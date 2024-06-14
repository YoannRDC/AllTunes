'use client'
import React, { useState } from 'react'
import { getArtist, getBaseTokenURI, IArtist } from '../utils/artistVault'
import { getArtists } from '../utils/artist'
import { Button } from '../components/elements/Button'
import { useThemeContext } from '../contexts/ThemeContext'
import Section from '../components/Section'
import Header from '../components/Header'
import { getChainIdsList } from '../utils/storage'
import { useAccount } from 'wagmi'

const Helper = () => {
    const { theme } = useThemeContext()
    const { address, isConnected } = useAccount()
    const [artists, setArtists] = useState<IArtist[]>([])
    const [chainIdsSepolia, setChainIdsSepolia] = useState<string[]>([])
    const [chainIdsHarmony, setChainIdsHarmony] = useState<string[]>([])
    
    const handleGetArtists = (): void => {
        getArtists()
            .then((artists) => {setArtists(artists)})
            .catch(err => console.error(err))
    }

    const handleGetChainIDsList = (chain: string): void => {
        getChainIdsList(address as `0x${string}`, chain)
            .then((chainIds) => {
                let _chainIds = []
                for (let i = 0; i < chainIds.length; i++){
                    _chainIds.push(chainIds[i].toString())
                }

                if (chain === "sepolia") {
                    setChainIdsSepolia(_chainIds)
                } else {
                    setChainIdsHarmony(_chainIds)
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <Header/>

            <Section
            className="mt-20"
            crosses
            crossesOffset=""
            customPaddings
            id="helper"
        >
            {/* Artists */}
            <div className="relative p-6">
                <Button props={{
                        onClick: () => {handleGetArtists()},
                        extendClasses: theme?.bgBtnPrimary
                    }}>
                        Get artists
                </Button>
                
                <div className='p-2'>
                    <div className='grid grid-cols-8 gap-4 p-2 border-b border-gray-600'>
                        <div>name</div>
                        <div>alias</div>
                        <div>assets</div>
                        <div>description</div>
                        <div>genres</div>
                        <div>address</div>
                        <div>image</div>
                        <div>contracts</div>
                    </div>
                    {artists.map((artist: IArtist, index) => (
                        <div key={index} className='grid grid-cols-8 gap-4 p-2 border-b border-gray-700/70'>
                            <div>{artist.name}</div>
                            <div>{artist.alias}</div>
                            <div>{artist.assets}</div>
                            <div>{artist.description}</div>
                            <div>{artist.genres}</div>
                            <div>{artist.address}</div>
                            <div>{artist.image}</div>
                            <div>{artist.contracts}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Autre */}
            <div className="relative p-6">
                <Button props={{
                        onClick: () => {handleGetChainIDsList("sepolia")},
                        extendClasses: theme?.bgBtnPrimary
                    }}>
                        Get storage chain ids from Sepolia
                </Button>
                
                <div className='p-2'>
                    <div className='grid grid-cols-2 gap-4 p-2 border-b border-gray-600'>
                        <div>Id</div>                        
                        <div>chainId</div>                        
                    </div>
                    {chainIdsSepolia.map((chain_id, index) => (
                        <div key={index} className='grid grid-cols-2 gap-4 p-2 border-b border-gray-700/70'>
                            <div>{index}</div>
                            <div>{chain_id}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative p-6">
                <Button props={{
                        onClick: () => {handleGetChainIDsList("harmony")},
                        extendClasses: theme?.bgBtnPrimary
                    }}>
                        Get storage chain ids from Harmony
                </Button>
                
                <div className='p-2'>
                    <div className='grid grid-cols-2 gap-4 p-2 border-b border-gray-600'>
                        <div>Id</div>
                        <div>chainId</div>
                    </div>
                    {chainIdsHarmony.map((chain_id, index) => (
                        <div key={index} className='grid grid-cols-2 gap-4 p-2 border-b border-gray-700/70'>
                            <div>{index}</div>
                            <div>{chain_id}</div>
                        </div>
                    ))}
                </div>
            </div>
            
        </Section>
        </div>
    )
}

export default Helper
