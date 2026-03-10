import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';

export const config = {
    matcher: '/', // Only track visits to the home page
};

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Skip if it's a bot/crawler
    const userAgent = request.headers.get('user-agent') || '';
    if (userAgent.toLowerCase().includes('bot') || userAgent.toLowerCase().includes('crawler')) {
        return response;
    }

    const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
        ? new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
        })
        : null;

    if (!redis) return response; // Silently skip if Redis isn't configured yet

    try {
        // We use UTC date to be consistent
        const today = new Date().toISOString().split('T')[0];
        const referer = request.headers.get('referer') || '';

        // Increment total visitors
        await redis.incr(`stats:visitors:${today}`);

        // Track traffic sources
        if (referer.includes('instagram.com') || request.nextUrl.searchParams.get('ref') === 'ig') {
            await redis.incr(`stats:source:instagram:${today}`);
        } else if (referer.includes('google.') || referer.includes('yandex.')) {
            await redis.incr(`stats:source:search:${today}`);
        } else if (!referer) {
            // Direct traffic (people who type elevchuk.online directly or click a link in a messenger app like TG)
            await redis.incr(`stats:source:direct:${today}`);
        } else {
            await redis.incr(`stats:source:other:${today}`);
        }
    } catch (error) {
        console.error('Redis tracking error:', error);
    }

    return response;
}
