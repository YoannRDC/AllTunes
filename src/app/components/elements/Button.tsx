import React from 'react'

export interface IButton {
    classes?: string
    extendClasses?: string
    href?: string | object
    onClick?: () => void
    disabled?: boolean
    loading?: boolean
}

const Button = (
    {
        children,
        props
    }:
    {
        children: React.ReactNode,
        props?: IButton
    }
) => {
    return (
        <button
            className={` 
                ${props?.classes ? props.classes : 'py-2 px-2 rounded'}
                ${props?.extendClasses}
            `}
            aria-disabled={props?.loading}
            disabled={props?.disabled || props?.loading}
            onClick={props?.onClick ? props.onClick : () => { }}
        >
            {children}
        </button>
    )
}

export { Button }
