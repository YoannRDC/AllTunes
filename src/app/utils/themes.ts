
export interface ITheme {
    name: string
    borderFocus: string
    borderLowContrast: string
    textHighContrast: string
    bgBtnPrimary: string
    bgBtnSecondary: string
    bgForm: string
}

export const slate: ITheme = {
    name: 'slate',   
    bgBtnPrimary: 'dark:bg-slate-400/40 hover:dark:bg-slate-200/50 dark:text-slate-200 bg-slate-200 hover:bg-slate-300/60 text-slate-700',
    bgBtnSecondary: 'dark:bg-slate-600 hover:dark:bg-slate-500 bg-slate-600 hover:bg-slate-500 text-slate-50',
    textHighContrast: 'dark:text-slate-300/75 text-slate-600',
    borderLowContrast: 'dark:border-slate-500/20 border-slate-500/50',
    bgForm: 'dark:bg-slate-900/60 bg-slate-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-slate-500 focus:border-slate-500 focus:ring-3 ring-inset',
}

export const slate2: ITheme = {
    name: 'slate2',   
    bgBtnPrimary: 'dark:bg-slate-200/20 hover:dark:bg-slate-200/30 dark:text-slate-300 bg-slate-200/50 hover:bg-slate-200 text-slate-700',
    bgBtnSecondary: 'dark:bg-slate-400 hover:dark:bg-slate-300 dark:text-slate-900 bg-slate-400 hover:bg-slate-500 text-slate-50',
    textHighContrast: 'dark:text-slate-300 text-slate-600',
    borderLowContrast: 'dark:border-slate-400/30 border-slate-500/50',
    bgForm: 'dark:bg-slate-900/60 bg-slate-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-slate-300 focus:border-slate-500 focus:ring-3 ring-inset',
}

export const gray: ITheme = {
    name: 'gray',   
    bgBtnPrimary: 'dark:bg-gray-400/40 hover:dark:bg-gray-200/50 dark:text-gray-200 bg-gray-100 hover:bg-gray-200/60 text-gray-700',
    bgBtnSecondary: 'dark:bg-gray-600 hover:dark:bg-gray-500 bg-gray-600 hover:bg-gray-500 text-gray-50',
    textHighContrast: 'dark:text-gray-300/75 text-gray-600',
    borderLowContrast: 'dark:border-gray-500/20 border-gray-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-gray-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-gray-500 focus:border-gray-300 focus:ring-3 ring-inset',
}

export const gray2: ITheme = {
    name: 'gray2',   
    bgBtnPrimary: 'dark:bg-gray-200/20 hover:dark:bg-gray-200/30 dark:text-gray-300 bg-gray-200/50 hover:bg-gray-100 text-gray-700',
    bgBtnSecondary: 'dark:bg-gray-400 hover:dark:bg-gray-300 dark:text-gray-900 bg-gray-400 hover:bg-gray-500 text-gray-50',
    textHighContrast: 'dark:text-gray-300 text-gray-600',
    borderLowContrast: 'dark:border-gray-400/30 border-gray-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-gray-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-gray-600 focus:border-gray-300 focus:ring-3 ring-inset',
}

export const zinc: ITheme = {
    name: 'zinc',   
    bgBtnPrimary: 'dark:bg-zinc-400/40 hover:dark:bg-zinc-200/50 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200/60 text-zinc-700',
    bgBtnSecondary: 'dark:bg-zinc-600 hover:dark:bg-zinc-500 bg-zinc-600 hover:bg-zinc-500 text-zinc-50',
    textHighContrast: 'dark:text-zinc-300/75 text-zinc-600',
    borderLowContrast: 'dark:border-zinc-500/20 border-zinc-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-zinc-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-zinc-500 focus:border-zinc-300 focus:ring-3 ring-inset',
}

export const zinc2: ITheme = {
    name: 'zinc2',   
    bgBtnPrimary: 'dark:bg-zinc-200/20 hover:dark:bg-zinc-200/30 dark:text-zinc-300 bg-zinc-200/50 hover:bg-zinc-100 text-zinc-700',
    bgBtnSecondary: 'dark:bg-zinc-400 hover:dark:bg-zinc-300 dark:text-zinc-900 bg-zinc-400 hover:bg-zinc-500 text-zinc-50',
    textHighContrast: 'dark:text-zinc-300 text-zinc-600',
    borderLowContrast: 'dark:border-zinc-400/30 border-zinc-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-zinc-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-zinc-600 focus:border-zinc-300 focus:ring-3 ring-inset',
}

export const neutral: ITheme = {
    name: 'neutral',   
    bgBtnPrimary: 'dark:bg-neutral-400/40 hover:dark:bg-neutral-200/50 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200/60 text-neutral-700',
    bgBtnSecondary: 'dark:bg-neutral-600 hover:dark:bg-neutral-500 bg-neutral-600 hover:bg-neutral-500 text-neutral-50',
    textHighContrast: 'dark:text-neutral-300/75 text-neutral-600',
    borderLowContrast: 'dark:border-neutral-500/20 border-neutral-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-neutral-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-neutral-500 focus:border-neutral-300 focus:ring-3 ring-inset',
}

export const neutral2: ITheme = {
    name: 'neutral2',   
    bgBtnPrimary: 'dark:bg-neutral-200/20 hover:dark:bg-neutral-200/30 dark:text-neutral-300 bg-neutral-200/50 hover:bg-neutral-100 text-neutral-700',
    bgBtnSecondary: 'dark:bg-neutral-400 hover:dark:bg-neutral-300 dark:text-neutral-900 bg-neutral-400 hover:bg-neutral-500 text-neutral-50',
    textHighContrast: 'dark:text-neutral-300 text-neutral-600',
    borderLowContrast: 'dark:border-neutral-400/30 border-neutral-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-neutral-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-neutral-600 focus:border-neutral-300 focus:ring-3 ring-inset',
}

export const stone: ITheme = {
    name: 'stone',   
    bgBtnPrimary: 'dark:bg-stone-400/40 hover:dark:bg-stone-200/50 dark:text-stone-200 bg-stone-100 hover:bg-stone-200/60 text-stone-700',
    bgBtnSecondary: 'dark:bg-stone-600 hover:dark:bg-stone-500 bg-stone-600 hover:bg-stone-500 text-stone-50',
    textHighContrast: 'dark:text-stone-300/75 text-stone-600',
    borderLowContrast: 'dark:border-stone-500/20 border-stone-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-stone-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-stone-500 focus:border-stone-300 focus:ring-3 ring-inset',
}

export const stone2: ITheme = {
    name: 'stone2',   
    bgBtnPrimary: 'dark:bg-stone-200/20 hover:dark:bg-stone-200/30 dark:text-stone-300 bg-stone-200/50 hover:bg-stone-100 text-stone-700',
    bgBtnSecondary: 'dark:bg-stone-400 hover:dark:bg-stone-300 dark:text-stone-900 bg-stone-400 hover:bg-stone-500 text-stone-50',
    textHighContrast: 'dark:text-stone-300 text-stone-600',
    borderLowContrast: 'dark:border-stone-400/30 border-stone-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-stone-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-stone-600 focus:border-stone-300 focus:ring-3 ring-inset',
}

export const red: ITheme = {
    name: 'red',   
    bgBtnPrimary: 'dark:bg-red-400/40 hover:dark:bg-red-200/50 dark:text-red-200 bg-red-100 hover:bg-red-200/60 text-red-700',
    bgBtnSecondary: 'dark:bg-red-600 hover:dark:bg-red-500 bg-red-600 hover:bg-red-500 text-red-50',
    textHighContrast: 'dark:text-red-300/75 text-red-600',
    borderLowContrast: 'dark:border-red-500/20 border-red-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-red-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-red-500 focus:border-red-300 focus:ring-3 ring-inset',
}

export const red2: ITheme = {
    name: 'red2',   
    bgBtnPrimary: 'dark:bg-red-200/20 hover:dark:bg-red-200/30 dark:text-red-300 bg-red-200/50 hover:bg-red-100 text-red-700',
    bgBtnSecondary: 'dark:bg-red-400 hover:dark:bg-red-300 dark:text-red-900 bg-red-400 hover:bg-red-500 text-red-50',
    textHighContrast: 'dark:text-red-300 text-red-600',
    borderLowContrast: 'dark:border-red-400/30 border-red-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-red-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-red-600 focus:border-red-300 focus:ring-3 ring-inset',
}

export const orange: ITheme = {
    name: 'orange',   
    bgBtnPrimary: 'dark:bg-orange-400/40 hover:dark:bg-orange-200/50 dark:text-orange-200 bg-orange-100 hover:bg-orange-200/60 text-orange-700',
    bgBtnSecondary: 'dark:bg-orange-600 hover:dark:bg-orange-500 bg-orange-600 hover:bg-orange-500 text-orange-50',
    textHighContrast: 'dark:text-orange-300/75 text-orange-600',
    borderLowContrast: 'dark:border-orange-500/20 border-orange-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-orange-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-orange-500 focus:border-orange-300 focus:ring-3 ring-inset',
}

export const orange2: ITheme = {
    name: 'orange2',   
    bgBtnPrimary: 'dark:bg-orange-200/20 hover:dark:bg-orange-200/30 dark:text-orange-300 bg-orange-200/50 hover:bg-orange-100 text-orange-700',
    bgBtnSecondary: 'dark:bg-orange-400 hover:dark:bg-orange-300 dark:text-orange-900 bg-orange-400 hover:bg-orange-500 text-orange-50',
    textHighContrast: 'dark:text-orange-300 text-orange-600',
    borderLowContrast: 'dark:border-orange-400/30 border-orange-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-orange-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-orange-600 focus:border-orange-300 focus:ring-3 ring-inset',
}

export const amber: ITheme = {
    name: 'amber',   
    bgBtnPrimary: 'dark:bg-amber-400/40 hover:dark:bg-amber-200/50 dark:text-amber-200 bg-amber-100 hover:bg-amber-200/60 text-amber-700',
    bgBtnSecondary: 'dark:bg-amber-600 hover:dark:bg-amber-500 bg-amber-600 hover:bg-amber-500 text-amber-50',
    textHighContrast: 'dark:text-amber-300/75 text-amber-600',
    borderLowContrast: 'dark:border-amber-500/20 border-amber-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-amber-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-amber-500 focus:border-amber-300 focus:ring-3 ring-inset',
}

export const amber2: ITheme = {
    name: 'amber2',   
    bgBtnPrimary: 'dark:bg-amber-200/20 hover:dark:bg-amber-200/30 dark:text-amber-300 bg-amber-200/50 hover:bg-amber-100 text-amber-700',
    bgBtnSecondary: 'dark:bg-amber-400 hover:dark:bg-amber-300 dark:text-amber-900 bg-amber-400 hover:bg-amber-500 text-amber-50',
    textHighContrast: 'dark:text-amber-300 text-amber-600',
    borderLowContrast: 'dark:border-amber-400/30 border-amber-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-amber-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-amber-600 focus:border-amber-300 focus:ring-3 ring-inset',
}

export const yellow: ITheme = {
    name: 'yellow',   
    bgBtnPrimary: 'dark:bg-yellow-200/40 hover:dark:bg-yellow-200/50 dark:text-yellow-200 bg-yellow-100 hover:bg-yellow-200 text-yellow-900',
    bgBtnSecondary: 'dark:bg-yellow-300 hover:dark:bg-yellow-200 bg-yellow-300 hover:bg-yellow-400 text-yellow-950',
    textHighContrast: 'dark:text-yellow-200 text-yellow-600',
    borderLowContrast: 'dark:border-yellow-100/50 border-yellow-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-yellow-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-yellow-200 focus:border-yellow-500 focus:ring-3 ring-inset',
}

export const yellow2: ITheme = {
    name: 'yellow2',   
    bgBtnPrimary: 'dark:bg-yellow-200/20 hover:dark:bg-yellow-200/30 dark:text-yellow-300 bg-yellow-200/50 hover:bg-yellow-100 text-yellow-700',
    bgBtnSecondary: 'dark:bg-yellow-400 hover:dark:bg-yellow-300 dark:text-yellow-900 bg-yellow-400 hover:bg-yellow-500 text-yellow-50',
    textHighContrast: 'dark:text-yellow-300 text-yellow-600',
    borderLowContrast: 'dark:border-yellow-400/30 border-yellow-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-yellow-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-yellow-600 focus:border-yellow-300 focus:ring-3 ring-inset',
}

export const lime: ITheme = {
    name: 'lime',   
    bgBtnPrimary: 'dark:bg-lime-200/40 hover:dark:bg-lime-200/50 dark:text-lime-300 bg-lime-50 hover:bg-lime-100 text-lime-700',
    bgBtnSecondary: 'dark:bg-lime-600 hover:dark:bg-lime-500 bg-lime-600 hover:bg-lime-500 text-lime-50',
    textHighContrast: 'dark:text-lime-300/75 text-lime-600',
    borderLowContrast: 'dark:border-lime-500/20 border-lime-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-lime-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-lime-600 focus:border-lime-300 focus:ring-1',
}

export const lime2: ITheme = {
    name: 'lime2',   
    bgBtnPrimary: 'dark:bg-lime-200/20 hover:dark:bg-lime-200/30 dark:text-lime-300 bg-lime-200/50 hover:bg-lime-100 text-lime-700',
    bgBtnSecondary: 'dark:bg-lime-400 hover:dark:bg-lime-300 dark:text-lime-900 bg-lime-400 hover:bg-lime-500 text-lime-50',
    textHighContrast: 'dark:text-lime-300 text-lime-600',
    borderLowContrast: 'dark:border-lime-400/30 border-lime-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-lime-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-lime-600 focus:border-lime-300 focus:ring-3 ring-inset',
}

export const green: ITheme = {
    name: 'green',   
    bgBtnPrimary: 'dark:bg-green-200/40 hover:dark:bg-green-200/50 dark:text-green-300 bg-green-50 hover:bg-green-100 text-green-700',
    bgBtnSecondary: 'dark:bg-green-600 hover:dark:bg-green-500 bg-green-600 hover:bg-green-500 text-green-50',
    textHighContrast: 'dark:text-green-300/75 text-green-600',
    borderLowContrast: 'dark:border-green-500/20 border-green-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-green-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-green-600 focus:border-green-300 focus:ring-1',
}

export const green2: ITheme = {
    name: 'green2',   
    bgBtnPrimary: 'dark:bg-green-200/20 hover:dark:bg-green-200/30 dark:text-green-300 bg-green-200/50 hover:bg-green-100 text-green-700',
    bgBtnSecondary: 'dark:bg-green-400 hover:dark:bg-green-300 dark:text-green-900 bg-green-400 hover:bg-green-500 text-green-50',
    textHighContrast: 'dark:text-green-300 text-green-600',
    borderLowContrast: 'dark:border-green-400/30 border-green-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-green-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-green-600 focus:border-green-300 focus:ring-3 ring-inset',
}

export const emerald: ITheme = {
    name: 'emerald',   
    bgBtnPrimary: 'dark:bg-emerald-200/40 hover:dark:bg-emerald-200/50 dark:text-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-700',
    bgBtnSecondary: 'dark:bg-emerald-600 hover:dark:bg-emerald-500 bg-emerald-600 hover:bg-emerald-500 text-emerald-50',
    textHighContrast: 'dark:text-emerald-300/75 text-emerald-600',
    borderLowContrast: 'dark:border-emerald-500/20 border-emerald-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-emerald-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-emerald-600 focus:border-emerald-300 focus:ring-1',
}

export const emerald2: ITheme = {
    name: 'emerald2',   
    bgBtnPrimary: 'dark:bg-emerald-200/20 hover:dark:bg-emerald-200/30 dark:text-emerald-300 bg-emerald-200/50 hover:bg-emerald-100 text-emerald-700',
    bgBtnSecondary: 'dark:bg-emerald-400 hover:dark:bg-emerald-300 dark:text-emerald-900 bg-emerald-400 hover:bg-emerald-500 text-emerald-50',
    textHighContrast: 'dark:text-emerald-300 text-emerald-600',
    borderLowContrast: 'dark:border-emerald-400/30 border-emerald-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-emerald-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-emerald-600 focus:border-emerald-300 focus:ring-3 ring-inset',
}

export const teal: ITheme = {
    name: 'teal',   
    bgBtnPrimary: 'dark:bg-teal-200/40 hover:dark:bg-teal-200/50 dark:text-teal-300 bg-teal-50 hover:bg-teal-100 text-teal-700',
    bgBtnSecondary: 'dark:bg-teal-600 hover:dark:bg-teal-500 bg-teal-600 hover:bg-teal-500 text-teal-50',
    textHighContrast: 'dark:text-teal-300/75 text-teal-600',
    borderLowContrast: 'dark:border-teal-500/20 border-teal-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-teal-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-teal-600 focus:border-teal-300 focus:ring-1',
}

export const teal2: ITheme = {
    name: 'teal2',   
    bgBtnPrimary: 'dark:bg-teal-200/20 hover:dark:bg-teal-200/30 dark:text-teal-300 bg-teal-200/50 hover:bg-teal-100 text-teal-700',
    bgBtnSecondary: 'dark:bg-teal-400 hover:dark:bg-teal-300 dark:text-teal-900 bg-teal-400 hover:bg-teal-500 text-teal-50',
    textHighContrast: 'dark:text-teal-300 text-teal-600',
    borderLowContrast: 'dark:border-teal-400/30 border-teal-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-teal-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-teal-600 focus:border-teal-300 focus:ring-3 ring-inset',
}

export const cyan: ITheme = {
    name: 'cyan',   
    bgBtnPrimary: 'dark:bg-cyan-200/40 hover:dark:bg-cyan-200/50 dark:text-cyan-300 bg-cyan-50 hover:bg-cyan-100 text-cyan-700',
    bgBtnSecondary: 'dark:bg-cyan-600 hover:dark:bg-cyan-500 bg-cyan-600 hover:bg-cyan-500 text-cyan-50',
    textHighContrast: 'dark:text-cyan-300/75 text-cyan-600',
    borderLowContrast: 'dark:border-cyan-500/20 border-cyan-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-cyan-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-cyan-600 focus:border-cyan-300 focus:ring-1',
}

export const cyan2: ITheme = {
    name: 'cyan2',   
    bgBtnPrimary: 'dark:bg-cyan-200/20 hover:dark:bg-cyan-200/30 dark:text-cyan-300 bg-cyan-200/50 hover:bg-cyan-100 text-cyan-700',
    bgBtnSecondary: 'dark:bg-cyan-400 hover:dark:bg-cyan-300 dark:text-cyan-900 bg-cyan-400 hover:bg-cyan-500 text-cyan-50',
    textHighContrast: 'dark:text-cyan-300 text-cyan-600',
    borderLowContrast: 'dark:border-cyan-400/30 border-cyan-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-cyan-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-cyan-600 focus:border-cyan-300 focus:ring-3 ring-inset',
}

export const sky: ITheme = {
    name: 'sky',   
    bgBtnPrimary: 'dark:bg-sky-200/40 hover:dark:bg-sky-200/50 dark:text-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-700',
    bgBtnSecondary: 'dark:bg-sky-600 hover:dark:bg-sky-500 bg-sky-600 hover:bg-sky-500 text-sky-50',
    textHighContrast: 'dark:text-sky-300/75 text-sky-600',
    borderLowContrast: 'dark:border-sky-500/20 border-sky-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-sky-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-sky-600 focus:border-sky-300 focus:ring-1',
}

export const sky2: ITheme = {
    name: 'sky2',   
    bgBtnPrimary: 'dark:bg-sky-200/20 hover:dark:bg-sky-200/30 dark:text-sky-300 bg-sky-200/50 hover:bg-sky-100 text-sky-700',
    bgBtnSecondary: 'dark:bg-sky-400 hover:dark:bg-sky-300 dark:text-sky-900 bg-sky-400 hover:bg-sky-500 text-sky-50',
    textHighContrast: 'dark:text-sky-300 text-sky-600',
    borderLowContrast: 'dark:border-sky-400/30 border-sky-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-sky-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-sky-600 focus:border-sky-300 focus:ring-3 ring-inset',
}

export const blue: ITheme = {
    name: 'blue',   
    bgBtnPrimary: 'dark:bg-blue-200/40 hover:dark:bg-blue-200/50 dark:text-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-700',
    bgBtnSecondary: 'dark:bg-blue-600 hover:dark:bg-blue-500 bg-blue-600 hover:bg-blue-500 text-blue-50',
    textHighContrast: 'dark:text-blue-300/75 text-blue-600',
    borderLowContrast: 'dark:border-blue-500/20 border-blue-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-blue-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-blue-600 focus:border-blue-300 focus:ring-1',
}

export const blue2: ITheme = {
    name: 'blue2',   
    bgBtnPrimary: 'dark:bg-blue-200/20 hover:dark:bg-blue-200/30 dark:text-blue-300 bg-blue-200/50 hover:bg-blue-100 text-blue-700',
    bgBtnSecondary: 'dark:bg-blue-400 hover:dark:bg-blue-300 dark:text-blue-900 bg-blue-400 hover:bg-blue-500 text-blue-50',
    textHighContrast: 'dark:text-blue-300 text-blue-600',
    borderLowContrast: 'dark:border-blue-400/30 border-blue-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-blue-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-blue-600 focus:border-blue-300 focus:ring-3 ring-inset',
}

export const indigo: ITheme = {
    name: 'indigo',    
    bgBtnPrimary: 'dark:bg-indigo-400/40 hover:dark:bg-indigo-400/50 dark:text-indigo-200 bg-indigo-100 hover:bg-indigo-200/60 text-indigo-700',
    bgBtnSecondary: 'dark:bg-indigo-600 hover:dark:bg-indigo-500 bg-indigo-600 hover:bg-indigo-500 text-indigo-50',  
    textHighContrast: 'dark:text-indigo-400 text-indigo-500',
    borderLowContrast: 'dark:border-indigo-300/50 border-indigo-300/50',
    bgForm: 'dark:bg-gray-900/60 bg-indigo-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-indigo-600 focus:border-indigo-600 focus:ring-1',
}

export const indigo2: ITheme = {
    name: 'indigo2',   
    bgBtnPrimary: 'dark:bg-indigo-200/20 hover:dark:bg-indigo-200/30 dark:text-indigo-300 bg-indigo-200/50 hover:bg-indigo-100 text-indigo-700',
    bgBtnSecondary: 'dark:bg-indigo-400 hover:dark:bg-indigo-300 dark:text-indigo-900 bg-indigo-400 hover:bg-indigo-500 text-indigo-50',
    textHighContrast: 'dark:text-indigo-300 text-indigo-600',
    borderLowContrast: 'dark:border-indigo-400/30 border-indigo-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-indigo-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-indigo-600 focus:border-indigo-300 focus:ring-1',
}

export const violet: ITheme = {
    name: 'violet',    
    bgBtnPrimary: 'dark:bg-violet-400/40 hover:dark:bg-violet-400/50 dark:text-violet-200 bg-violet-100 hover:bg-violet-200/60 text-violet-700',
    bgBtnSecondary: 'dark:bg-violet-600 hover:dark:bg-violet-500 bg-violet-600 hover:bg-violet-500 text-violet-50',  
    textHighContrast: 'dark:text-violet-400 text-violet-500',
    borderLowContrast: 'dark:border-violet-300/50 border-violet-300/50',
    bgForm: 'dark:bg-gray-900/60 bg-violet-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-violet-600 focus:border-violet-600 focus:ring-1',
}


export const violet2: ITheme = {
    name: 'violet2',   
    bgBtnPrimary: 'dark:bg-violet-200/20 hover:dark:bg-violet-200/30 dark:text-violet-300 bg-violet-200/50 hover:bg-violet-100 text-violet-700',
    bgBtnSecondary: 'dark:bg-violet-400 hover:dark:bg-violet-300 dark:text-violet-900 bg-violet-400 hover:bg-violet-500 text-violet-50',
    textHighContrast: 'dark:text-violet-300 text-violet-600',
    borderLowContrast: 'dark:border-violet-400/30 border-violet-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-violet-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-violet-600 focus:border-violet-300 focus:ring-1',
}

export const purple: ITheme = {
    name: 'purple',    
    bgBtnPrimary: 'dark:bg-purple-400/40 hover:dark:bg-purple-400/50 dark:text-purple-200 bg-purple-100 hover:bg-purple-200/60 text-purple-700',
    bgBtnSecondary: 'dark:bg-purple-600 hover:dark:bg-purple-500 bg-purple-600 hover:bg-purple-500 text-purple-50',  
    textHighContrast: 'dark:text-purple-400 text-purple-500',
    borderLowContrast: 'dark:border-purple-300/50 border-purple-300/50',
    bgForm: 'dark:bg-gray-900/60 bg-purple-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-purple-600 focus:border-purple-600 focus:ring-1',
}


export const purple2: ITheme = {
    name: 'purple2',   
    bgBtnPrimary: 'dark:bg-purple-200/20 hover:dark:bg-purple-200/30 dark:text-purple-300 bg-purple-200/50 hover:bg-purple-100 text-purple-700',
    bgBtnSecondary: 'dark:bg-purple-400 hover:dark:bg-purple-300 dark:text-purple-900 bg-purple-400 hover:bg-purple-500 text-purple-50',
    textHighContrast: 'dark:text-purple-300 text-purple-600',
    borderLowContrast: 'dark:border-purple-400/30 border-purple-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-purple-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-purple-600 focus:border-purple-300 focus:ring-1',
}

export const fuchsia: ITheme = {
    name: 'fuchsia',    
    bgBtnPrimary: 'dark:bg-fuchsia-400/40 hover:dark:bg-fuchsia-400/50 dark:text-fuchsia-200 bg-fuchsia-100 hover:bg-fuchsia-200/60 text-fuchsia-700',
    bgBtnSecondary: 'dark:bg-fuchsia-600 hover:dark:bg-fuchsia-500 bg-fuchsia-600 hover:bg-fuchsia-500 text-fuchsia-50',  
    textHighContrast: 'dark:text-fuchsia-400 text-fuchsia-500',
    borderLowContrast: 'dark:border-fuchsia-300/50 border-fuchsia-300/50',
    bgForm: 'dark:bg-gray-900/60 bg-fuchsia-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-fuchsia-600 focus:border-fuchsia-600 focus:ring-1',
}


export const fuchsia2: ITheme = {
    name: 'fuchsia2',   
    bgBtnPrimary: 'dark:bg-fuchsia-200/20 hover:dark:bg-fuchsia-200/30 dark:text-fuchsia-300 bg-fuchsia-200/50 hover:bg-fuchsia-100 text-fuchsia-700',
    bgBtnSecondary: 'dark:bg-fuchsia-400 hover:dark:bg-fuchsia-300 dark:text-fuchsia-900 bg-fuchsia-400 hover:bg-fuchsia-500 text-fuchsia-50',
    textHighContrast: 'dark:text-fuchsia-300 text-fuchsia-600',
    borderLowContrast: 'dark:border-fuchsia-400/30 border-fuchsia-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-fuchsia-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-fuchsia-600 focus:border-fuchsia-300 focus:ring-1',
}

export const pink: ITheme = {
    name: 'pink',    
    bgBtnPrimary: 'dark:bg-pink-400/40 hover:dark:bg-pink-400/50 dark:text-pink-200 bg-pink-100 hover:bg-pink-200/60 text-pink-700',
    bgBtnSecondary: 'dark:bg-pink-600 hover:dark:bg-pink-500 bg-pink-600 hover:bg-pink-500 text-pink-50',  
    textHighContrast: 'dark:text-pink-400 text-pink-500',
    borderLowContrast: 'dark:border-pink-300/50 border-pink-300/50',
    bgForm: 'dark:bg-gray-900/60 bg-pink-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-pink-600 focus:border-pink-600 focus:ring-1',
}


export const pink2: ITheme = {
    name: 'pink2',   
    bgBtnPrimary: 'dark:bg-pink-200/20 hover:dark:bg-pink-200/30 dark:text-pink-300 bg-pink-200/50 hover:bg-pink-100 text-pink-700',
    bgBtnSecondary: 'dark:bg-pink-400 hover:dark:bg-pink-300 dark:text-pink-900 bg-pink-400 hover:bg-pink-500 text-pink-50',
    textHighContrast: 'dark:text-pink-300 text-pink-600',
    borderLowContrast: 'dark:border-pink-400/30 border-pink-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-pink-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-pink-600 focus:border-pink-300 focus:ring-1',
}

export const rose: ITheme = {
    name: 'rose',    
    bgBtnPrimary: 'dark:bg-rose-400/40 hover:dark:bg-rose-400/50 dark:text-rose-200 bg-rose-100 hover:bg-rose-200/60 text-rose-700',
    bgBtnSecondary: 'dark:bg-rose-600 hover:dark:bg-rose-500 bg-rose-600 hover:bg-rose-500 text-rose-50',  
    textHighContrast: 'dark:text-rose-400 text-rose-500',
    borderLowContrast: 'dark:border-rose-300/50 border-rose-300/50',
    bgForm: 'dark:bg-gray-900/60 bg-rose-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-rose-600 focus:border-rose-600 focus:ring-1',
}


export const rose2: ITheme = {
    name: 'rose2',   
    bgBtnPrimary: 'dark:bg-rose-200/20 hover:dark:bg-rose-200/30 dark:text-rose-300 bg-rose-200/50 hover:bg-rose-100 text-rose-700',
    bgBtnSecondary: 'dark:bg-rose-400 hover:dark:bg-rose-300 dark:text-rose-900 bg-rose-400 hover:bg-rose-500 text-rose-50',
    textHighContrast: 'dark:text-rose-300 text-rose-600',
    borderLowContrast: 'dark:border-rose-400/30 border-rose-500/50',
    bgForm: 'dark:bg-gray-900/60 bg-rose-50/5 border dark:border-slate-700 border-slate-300',
    borderFocus: 'dark:focus:border-rose-600 focus:border-rose-300 focus:ring-1',
}


export const themes2: ITheme[] = [
    slate,
    slate2,
    gray,
    gray2,
    zinc,
    zinc2,
    neutral,
    neutral2,
    stone,
    stone2,
    red,
    red2,
    orange,
    orange2,
    amber,
    amber2,
    yellow,
    yellow2,
    lime,
    lime2,
    green,
    green2,
    emerald,
    emerald2,
    teal,
    teal2,
    cyan,
    cyan2,
    sky,
    sky2,
    blue,
    blue2,
    indigo,
    indigo2,
    violet,
    violet2,
    purple,
    purple2,
    fuchsia,
    fuchsia2,
    pink,
    pink2,
    rose,
    rose2,
]

export const getTheme = (theme: string): ITheme => {
    const indexOfTheme = themes2.findIndex((item: ITheme) => item.name === theme )
    if ( indexOfTheme === -1 ) return themes2[0]    
    return themes2[indexOfTheme]
}
