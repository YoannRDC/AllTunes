'use client'
import { getArtist } from '@/app/utils/artist'
import React, { useEffect, useState } from 'react'
import ArtistProfile from './ArtistProfile'
import { IArtist } from '@/app/utils/artistVault'

const ArtistProfileBoard = ({ address }: { address: `0x${string}` }) => {
    const [artist, setArtist] = useState<IArtist | undefined>()  

    const handleGetArtist = (): void => {
        getArtist(address)
            .then((_artist: IArtist |void ) => {
                if (_artist) setArtist(_artist)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        handleGetArtist()
    }, [])

    return (
        <>
            {artist && <ArtistProfile artist={artist} params={{activeLink: false}} />}
        </>
    )
}

export default ArtistProfileBoard