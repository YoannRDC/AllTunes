'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type T_Theme = 'light' | 'dark' | ''

export interface T_ThemeContext {
    themeMode: T_Theme
    toggleThemeMode: (themeMode: T_Theme) => void
}

export const ThemeModeContext = createContext<T_ThemeContext>({
    themeMode: '',
    toggleThemeMode: () => '',
})

export const ThemeModeContextProvider = ({ children }: { children: ReactNode }) => {
    const [themeMode, setThemeMode] = useState<T_Theme>('')

    const loadTheModeFromCookie = () => {
        const cookie = localStorage.getItem("themeMode") || 'dark'
        if (cookie && cookie === 'dark') setThemeMode('dark')
    }

    const toggleThemeMode = (theme: T_Theme) => {
        setThemeMode(theme)
        localStorage.setItem("themeMode", theme)
    }

    useEffect(() => {
        loadTheModeFromCookie()
    }, [])

    return (
        <ThemeModeContext.Provider value={{
            themeMode: themeMode,
            toggleThemeMode: toggleThemeMode,
        }}>{children}</ThemeModeContext.Provider>
    )
}

export const useThemeMode = () => useContext(ThemeModeContext)