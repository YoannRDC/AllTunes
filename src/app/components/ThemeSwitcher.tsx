import { useThemeContext } from "../contexts/ThemeContext"
import { Button } from "./elements/Button"
import { ITheme, themes2 } from '../utils/themes'

const ThemeSwitcher = () => {
    const { toggleTheme } = useThemeContext()

    return (
        <div className="border border-slate-600 rounded-lg">
            <h1 className="p-6 ui-h1">Select a theme</h1>

            <div className="flex flex-row flex-wrap font-normal text-sm 
                dark:text-slate-50 text-slate-950 
                gap-4 justify-center p-4 w-full">

                {themes2.map((theme: ITheme, index) => (
                    <Button key={index} props={{
                        classes: `${theme.bgBtnSecondary}`,
                        onClick: () => toggleTheme(theme)
                    }}>{theme.name}</Button>
                ))}
            </div>
        </div>
    )
}

export default ThemeSwitcher