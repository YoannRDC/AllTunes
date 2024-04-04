import React from 'react'
import Section from './Section'
import { FoundArtist } from './forms/FoundArtist'

const Founder = () => {
  return (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="founder"
    >
        <div className="container relative">
        < FoundArtist 
                  title="Support the artist's project financially."
                  boxClasses='dark:-bg-opacity-75 
                    dark:hover:shadow-2xl dark:hover:shadow-slate-600
                    hover:shadow-2xl -rounded-lg transition-shadow duration-300'                  
                  />
        </div>
    </Section>
  )
}

export default Founder