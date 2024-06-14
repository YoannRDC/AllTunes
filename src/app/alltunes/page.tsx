import React from 'react'
import Header from '../components/Header'
import AllTunes from '../components/AllTunes'

const page = () => {
  return (
    <div>
        <Header />
        <div className='p-6'>
          <AllTunes />
        </div>
    </div>
  )
}

export default page