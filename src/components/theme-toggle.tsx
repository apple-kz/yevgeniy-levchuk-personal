"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle({ className = "" }: { className?: string }) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const options = [
        { id: "theme-white", label: "Простой белый" },
        { id: "theme-stone", label: "Теплый камень" },
        { id: "theme-parchment", label: "Пергамент" },
        { id: "theme-slate", label: "Глубокий синий" },
    ]

    return (
        <div className={`fixed bottom-4 right-4 p-4 bg-[var(--bg-panel)] border border-[var(--border-line)] shadow-2xl rounded flex flex-col gap-2 z-50 text-sm ${className}`}>
            <div className="text-[var(--text-faint)] font-medium mb-2">Тестирование фона:</div>
            {options.map(opt => (
                <button
                    key={opt.id}
                    onClick={() => setTheme(opt.id)}
                    className={`text-left px-3 py-1 rounded transition-colors ${theme === opt.id ? 'bg-[color:var(--color-inverted-bg)] text-[color:var(--color-inverted-fg)]' : 'hover:bg-[color:var(--color-alt)] text-[color:var(--color-fg)]'}`}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    )
}
