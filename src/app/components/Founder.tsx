'use client'
import React from 'react'
import Section from './Section'
import { FoundArtist } from './forms/FoundArtist'
import NotConnected from './NotConnected'
import { useAccount } from 'wagmi'

const Founder = () => {
  const { address, isConnected } = useAccount()
  
  return (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="founder"
    >
        <div className="relative">
          {isConnected
            ? < FoundArtist 
                  title="Support the artist's project financially."
                  boxClasses='dark:-bg-opacity-75 
                    dark:hover:shadow-2xl dark:hover:shadow-slate-600
                    hover:shadow-2xl -rounded-lg transition-shadow duration-300'                  
              />
            : <div className={`flex justify-center p-3 w-full`}>
                <NotConnected />
              </div>
          }
        </div>
    </Section>
  )
}

export default Founder