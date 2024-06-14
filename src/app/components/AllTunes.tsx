'use client'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import NotConnected from './NotConnected'
import Section from './Section'

interface IFormData {
    address: `0x${string}`
	projectName: string
    amount: number
    currentDate: string
}

const AllTunes = () => {
	const { address, isConnected } = useAccount()
	
	return (
	<Section
		className="pt-[12rem] -mt-[5.25rem]"
		crosses
		crossesOffset="lg:translate-y-[5.25rem]"
		customPaddings
		id="alltunes"
	>
		<div className="relative">
			
		<div className="relative">
		{isConnected
			? <>

			<div>
				{/* TODO: COde Here */}
				<h1 className='mt-2 text-xl font-bold'>Available titles </h1>

			</div>

			</>
			: <div className={`flex justify-center p-3 w-full`}>
				<NotConnected />
			</div>
		}

		</div>
		</div>
	</Section>
	)
}

export default AllTunes