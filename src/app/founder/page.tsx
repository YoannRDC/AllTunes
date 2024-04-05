import React from 'react'
import Header from '../components/Header'
import Founder from '../components/Founder'

const page = () => {
  return (
    <div>
        <Header />
        <div className='p-6'>
          <Founder />
        </div>
    </div>
  )
}

export default page