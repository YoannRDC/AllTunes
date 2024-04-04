"use client"

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { ITheme, getTheme } from '../utils/themes'

interface IThemeContext {
    theme: ITheme
    toggleTheme: (theme: ITheme) => void
}

const defaultTheme: ITheme = getTheme('indigo')

const ThemeContext = createContext<IThemeContext>({
    theme: defaultTheme,
    toggleTheme: () => ''
})

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ITheme>(defaultTheme)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || defaultTheme.name
        const _theme = getTheme(savedTheme)
        setTheme(_theme)
    }, [])
    
    const toggleTheme = (theme: ITheme) => {
        setTheme(theme)
        localStorage.setItem("theme", theme.name)
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            toggleTheme: toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useThemeContext = () => useContext(ThemeContext)