import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export async function POST(request: Request) {
    try {
        const { name, phone, message } = await request.json();

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            console.error('Telegram configuration missing');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const text = `
📩 *Новая заявка с сайта*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
💬 *Запрос:* ${message}
    `;

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API error:', errorData);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

        // Track the successful lead in Redis
        const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
            ? new Redis({
                url: process.env.UPSTASH_REDIS_REST_URL,
                token: process.env.UPSTASH_REDIS_REST_TOKEN,
            })
            : null;

        if (redis) {
            try {
                const today = new Date().toISOString().split('T')[0];
                await redis.incr(`stats:leads:${today}`);
            } catch (err) {
                console.error('Failed to update lead stat', err);
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
