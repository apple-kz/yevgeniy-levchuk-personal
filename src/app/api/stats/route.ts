import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    if (secret !== process.env.STATS_SECRET_KEY) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
        ? new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
        })
        : null;

    if (!redis) {
        return NextResponse.json({ error: 'Redis no config' }, { status: 500 });
    }

    const today = new Date().toISOString().split('T')[0];

    const todayVisitors = await redis.get(`stats:visitors:${today}`) || 0;
    const instagram = await redis.get(`stats:source:instagram:${today}`) || 0;
    const search = await redis.get(`stats:source:search:${today}`) || 0;
    const direct = await redis.get(`stats:source:direct:${today}`) || 0;
    const leads = await redis.get(`stats:leads:${today}`) || 0;

    return NextResponse.json({
        today: Number(todayVisitors),
        instagram: Number(instagram),
        search: Number(search),
        direct: Number(direct),
        leads: Number(leads),
    });
}
