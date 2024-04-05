import React from 'react'
import Header from '../../components/Header'
import ArtistProfileBoard from '@/app/components/artist/ArtistProfileBoard'

const page = ({ params }: {params: { id: string }}) => {
 
    return (
        <div>
          <Header />
          <div className='mt-20 p-6'>
            <h1 className='p-4 text-2xl font-bold'>Artist profile board</h1>
            <ArtistProfileBoard address={params.id as `0x${string}`}/>
          </div>
        </div>
    )
}

export default page