'use client'
import React from 'react'
import Section from './Section'
import { useAccount } from 'wagmi'
import NotConnected from './NotConnected'

const Dao = () => {
  const { address, isConnected } = useAccount()
  return (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="dao"
    >
        <div className="relative">
            
        <div className="relative">
        {isConnected
          ? <>
            
          </>
          : <div className={`flex justify-center p-3 w-full`}>
              <NotConnected />
          </div>
        }

      </div>
        </div>
    </Section>
  )
}

export default Dao