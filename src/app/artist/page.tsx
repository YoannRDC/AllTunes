import React from 'react'
import Header from '../components/Header'
import Artist from '../components/artist/Artist'

const page = () => {
  return (
    <div>
      <Header />
      <div className='p-6'>
        <Artist />
      </div>
    </div>
  )
}

export default page