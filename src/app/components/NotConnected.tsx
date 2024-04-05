'use client'

import React from 'react'
import Section from './Section'
import { useThemeContext } from '../contexts/ThemeContext'

const NotConnected = () => {
  const { theme } = useThemeContext()
  
  return (
    <Section
        className=""
        crosses
        crossesOffset=""
        customPaddings
        id="notConnected"
    >
        <div className="container relative">
            <h1 className='p-2 text-xl text-pink-600'>You are not connected!</h1>
            <p className='p-2'>Please click on <span className={`italic border-b
              ${theme?.borderFocus} ${theme?.textHighContrast}`}>Connect Wallet</span></p>
        </div>
    </Section>
  )
}

export default NotConnected