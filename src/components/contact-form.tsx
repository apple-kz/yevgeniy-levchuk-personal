"use client"

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="py-12 px-8 border border-[color:var(--color-line)] rounded-sm text-center">
                <h3 className="text-2xl font-serif mb-4 text-[color:var(--color-fg)]">Спасибо.</h3>
                <p className="text-[color:var(--color-muted)] font-light">
                    Я получил ваш запрос и напишу вам в ближайшее время.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm tracking-widest uppercase hover:opacity-50 transition-opacity text-[color:var(--color-fg)]"
                >
                    Вернуться
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto space-y-8 text-left">
            <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-[color:var(--color-faint)] font-medium">Как вас зовут</label>
                <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[color:var(--color-line-heavy)] py-3 outline-none focus:border-[color:var(--color-fg)] transition-colors font-light text-lg"
                    placeholder="Имя"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[color:var(--color-faint)] font-medium">Телефон для связи</label>
                <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[color:var(--color-line-heavy)] py-3 outline-none focus:border-[color:var(--color-fg)] transition-colors font-light text-lg"
                    placeholder="+7 (___) ___-__-__"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-[color:var(--color-faint)] font-medium">Ваш запрос (кратко)</label>
                <textarea
                    id="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[color:var(--color-line-heavy)] py-3 outline-none focus:border-[color:var(--color-fg)] transition-colors font-light text-lg resize-none"
                    placeholder="О чем бы вы хотели поговорить?"
                />
            </div>

            {status === 'error' && (
                <p className="text-sm text-red-500 font-light">Что-то пошло не так. Пожалуйста, попробуйте позже.</p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="group flex items-center gap-3 text-sm tracking-[0.15em] uppercase hover:opacity-50 transition-opacity text-[color:var(--color-fg)] disabled:opacity-30 pt-4"
            >
                {status === 'loading' ? (
                    <>Отправка <Loader2 size={16} className="animate-spin" /></>
                ) : (
                    <>Отправить запрос <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                )}
            </button>
        </form>
    );
}
