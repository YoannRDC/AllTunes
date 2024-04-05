'use client'

import React, { useState } from 'react'
import Section from '../Section'
import { useAccount } from 'wagmi'
import { CreateArtist } from '../forms/CreateArtist'
import NotConnected from '../NotConnected'
import { useThemeContext } from '../../contexts/ThemeContext'
import CreateProject from '../project/CreateProject'

// Must be connected to the chain
// Must be register as artist otherwise
// display a form to register

const Artist = () => {
  const { address, isConnected } = useAccount()
  const { theme } = useThemeContext()
  // Need a function to set this state
  const [isAnArtist, setIsAnArtist] = useState<boolean>(false)

  return (
    <Section
      className="mt-20"
      crosses
      crossesOffset=""
      customPaddings
      id="artist"
    >
      <div className="relative">
        {isConnected
          ? <>
            {isAnArtist
              ? <div className={`p-2`}>
                  <CreateProject />
                </div>

              : <div>
                <CreateArtist
                  title="Artist Registration"
                  description="By creating an account, you can manage your songs and albums. You will be able to create projects and request funds so that contributors can help you achieve your goals."
                  boxClasses='dark:bg-opacity-75 
                    dark:hover:shadow-xl dark:hover:shadow-gray-900
                    hover:shadow-xl -rounded-lg transition-shadow duration-300'
                />
              </div>
            }
          </>
          : <div className={`flex justify-center p-3 w-full`}>
            <NotConnected />
          </div>
        }

      </div>
    </Section>
  )
}

export default Artist