import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext'

export interface IInputClasses {
  box?: string
  label?: string
  input?: string
}

export interface IInput {
  id: string
  name: string
  onChange: (event: any) => void
  value?: string
  ref?: string
  placeHolder?: string
  label?: string
  type?: string
  classes?: IInputClasses
  required?: boolean
}

const Input = ({ children, props }: { children?: React.ReactNode, props: IInput }) => {
  const { theme } = useThemeContext()

  return (
    <div className={`${props.classes?.box ? props.classes?.box : ''} 
        relative flex flex-col font-normal text-sm dark:text-slate-50 text-slate-950`}>
      {props.label &&
        <label
          htmlFor={props.id}
          className={`${props?.classes?.label ? props.classes?.label : ''} 
                    font-normal dark:text-slate-50 text-slate-800`}>
          {props.label}
        </label>
      }

      <input
        id={props.id}
        name={props.name}
        type={props.type ? props.type : 'text'}
        onChange={props.onChange}
        {...(props.required ? { required: true } : {})}
        placeholder={props.placeHolder}
        className={`${props.classes?.input ? props.classes?.input : ''} 
                py-1 px-2 rounded-md 
                dark:bg-slate-950 bg-slate-50
                dark:text-slate-50  text-slate-950
                border 
                dark:border-slate-700 border-slate-300 focus:outline-none
                ${theme.borderFocus}`} />

      {children}
    </div>
  )
}

export { Input }