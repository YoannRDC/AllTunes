'use client'
import React, { useEffect, useState } from 'react'
import { getArtists } from '../../utils/artist'
import ArtistProfile from './ArtistProfile'
import { IArtist } from '@/app/utils/artistVault'

const GetArtists = () => {
    const [artists, setArtists] = useState<IArtist[]>([])
    const handleGetArtists = (): void => {
        getArtists()
            .then((artists) => {setArtists(artists)})
            .catch(err => console.error(err))
    }

    useEffect(() => {
        handleGetArtists()
    },)
    

    return (
        <div className='p-2'>
            <div className={`flex items-stretch flex-wrap gap-3 lg:gap-4 text-sm`}>
                {artists.map((artist: IArtist, index) => (

                    <ArtistProfile 
                        artist={artist} 
                        params={{index: index, activeLink: true, minimize: true}} 
                        key={index}/>
                ))}
            </div>
        </div>
    )
}

export default GetArtists