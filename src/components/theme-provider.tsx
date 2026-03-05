"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps, useTheme } from "next-themes"

function ClientThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    const { theme } = useTheme()

    React.useEffect(() => {
        if (!theme) return

        // Next-themes controls html class, but we want to make sure the right color class 
        // like "theme-stone" gets strictly applied alongside "scroll-smooth"
        const root = document.documentElement
        root.className = `scroll-smooth ${theme}`
        root.setAttribute('data-theme', theme)
    }, [theme])

    return <>{children}</>
}

export function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute="class"
            enableSystem={false}
            themes={["theme-white", "theme-stone", "theme-parchment", "theme-slate"]}
            defaultTheme="theme-stone"
            {...props}
        >
            <ClientThemeProvider {...props}>
                {children}
            </ClientThemeProvider>
        </NextThemesProvider>
    )
}
