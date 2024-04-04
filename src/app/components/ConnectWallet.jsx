import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const ConnectWallet = () => {
  return (
    <div className='flex justify-end p-5'>
        <ConnectButton />
    </div>
  )
}

export default ConnectWallet