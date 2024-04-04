'use client'

import React, { useState } from 'react'
import Section from './Section'
import { useAccount } from 'wagmi'
import { CreateArtist } from './forms/CreateArtist'

// Must be connected to the chain
// Must be register as artist otherwise
// display a form to register

const Artist = () => {
  const { address, isConnected } = useAccount()
  const [isAnArtist, setIsAnArtist] = useState<boolean>(false)

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="artist"
    >
      <div className="container relative">
        {isConnected
          ? <>
            {isAnArtist
              ? <div>Connected as an artist</div>
              : <div>
                < CreateArtist
                  title="Artist Registration"
                  boxClasses='dark:bg-opacity-75 
                    dark:hover:shadow-xl dark:hover:shadow-gray-900
                    hover:shadow-xl -rounded-lg transition-shadow duration-300'
                />
              </div>
            }
          </>
          : <div>not connected</div>
        }

      </div>
    </Section>
  )
}

export default Artist