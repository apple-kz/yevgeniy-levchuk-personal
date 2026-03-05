"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className={`w-[16px] h-[16px] ${className}`} /> // placeholder prevents layout shift
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`opacity-40 hover:opacity-100 transition-opacity flex items-center justify-center ${className}`}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    )
}
