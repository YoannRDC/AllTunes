'use client'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import NotConnected from './NotConnected'
import Section from './Section'
// import * as mm from 'music-metadata/lib/core';

const AllTunes = () => {
    const { address, isConnected } = useAccount()
    const [mp3Tags, setMp3Tags] = useState<any[]>([])

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            const tagsArray = []
            for (const file of Array.from(files)) {
                try {
                    const metadata = parseFile(file)
                    tagsArray.push(metadata)
                } catch (error) {
                    console.error('Error reading file:', error)
                }
            }
            setMp3Tags(tagsArray)
        }
    }

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="alltunes"
        >
            <div className="relative">
                <div className="relative">
                    {isConnected ? (
                        <>
                            <div>
                                <h1 className='mt-2 text-xl font-bold'>Available titles</h1>
                                <input type="file" accept="audio/mp3" multiple onChange={handleFileChange} />
                                <div>
                                    {mp3Tags.map((tag, index) => (
                                        <div key={index} className="mt-4">
                                            <h2 className="text-lg font-semibold">{tag.common.title || 'Unknown Title'}</h2>
                                            <p>Artist: {tag.common.artist || 'Unknown Artist'}</p>
                                            <p>Album: {tag.common.album || 'Unknown Album'}</p>
                                            <p>Year: {tag.common.year || 'Unknown Year'}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={`flex justify-center p-3 w-full`}>
                            <NotConnected />
                        </div>
                    )}
                </div>
            </div>
        </Section>
    )
}

export default AllTunes
function parseFile(file: File) {
	throw new Error('Function not implemented.')
}

