'use client'
import { useThemeContext } from '@/app/contexts/ThemeContext'
import { getGenres } from '@/app/utils/artist'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../elements/Button'
import { IArtist } from '@/app/utils/artistVault'

interface IArtistProfile {
    index?: number
    minimize?: boolean
    activeLink?: boolean // enable the link to go to profile board
}

const ArtistProfile = ({ artist, params }: { artist: IArtist, params?: IArtistProfile }) => {
    const { theme } = useThemeContext()
    const [index, setIndex] = useState<number>(0)
    const [urlRef, setUrlRef] = useState("#")
    const [genres, setGenres] = useState<string[]>([])
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState<string>("Project")
   
    const handleUrlRef = () => {
         if (params?.activeLink === true) setUrlRef(`/artist/${artist.address}`)
    }

    const handleGetGenres = () => {
        getGenres().then((_genres) => {
            if (_genres.length > 0) setGenres(_genres)
        })
    }

    const getGenre = (genreId: number) => {
        return genres.find((genre, id) => id === genreId);
    }
    
    const toggleTabSelection = (selected: string) => {
        setSelectedTab(selected)
    }

    useEffect(() => {
        handleUrlRef()
        handleGetGenres()
    }, [])
    
    return (
        <div className={`
            relative flex flex-col p-4 rounded-lg  ${theme?.bgForm}
            ${params?.minimize === true ? 'w-full lg:w-2/5': 'w-full lg:h-[350px]'}
            ${params?.activeLink === true ? 'cursor-pointer' : 'cursor-text'}
            `}
            onClick={() => router.push(urlRef)}
        >
            <div className='font-bold flex'>
                <div className={`${theme?.textHighContrast}`}>{artist.name}</div>
            </div>
            <div className='font-medium mt-5 flex'>
                <div className='italic'>{artist.alias}</div>
            </div>
            <div className='mt-2'>
                <div className='font-extralight'>{artist.description}</div>
            </div>
                
            {/* Show more info */}
            {!params?.minimize && 
                <>
                <div className='absolute inline-block right-0 mr-4 shadow-lg'>
                    <Image 
                        src={artist.image ? artist.image : ''}
                        alt={'artistImage'}
                        width={192}
                        height={192}
                        className='rounded-lg'
                        priority
                    />
                </div>

                <div className='mt-2 flex flex-col text-xs gap-2'>
                    {/* <div className='flex gap-2'>
                        <div>Address</div>
                        <div className={`font-extralight`}>{artist.address}</div>
                    </div> */}

                    <div className='flex gap-2'>
                        <div>Genres: </div>
                        <div className='flex gap-2 font-extralight'>
                            {artist.genres.map((genreId, index) => (
                                <div key={index}>{getGenre(genreId)}</div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className={`mt-20 border-b ${theme?.borderFocus}`}></div>

                {/* Tab selector */}
                <div className='flex justify-center gap-4 p-4'>
                    <Button props={{ 
                        onClick: () => {toggleTabSelection("Project")}, 
                        extendClasses: selectedTab === 'Project' ? theme?.bgBtnSecondary : theme?.bgBtnPrimary
                    }}>My projects</Button>
                    
                    <Button props={{ 
                        onClick: () => {toggleTabSelection("Music")}, 
                        extendClasses: selectedTab === 'Music' ? theme?.bgBtnSecondary : theme?.bgBtnPrimary
                    }}>My musics</Button>
                </div>

                {/* Tab content */}
                <div className='flex w-full '>
                    
                    <div className={`${selectedTab === 'Project' ? 'block' : 'hidden'}`}>
                        Project: 
                    </div>
                    
                    
                    <div className={`${selectedTab === 'Music' ? 'block' : 'hidden'}`}>
                        Music: 
                    </div>
                    
                </div>
                </>
            }
        
        </div>
    )
}

export default ArtistProfile