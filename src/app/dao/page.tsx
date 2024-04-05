import React from 'react'
import Header from '../components/Header'
import DAO from '../components/DAO'

const page = () => {
  return (
    <div>
        <Header />
        <div className='p-6'>
          <DAO />
        </div>
    </div>
  )
}

export default page