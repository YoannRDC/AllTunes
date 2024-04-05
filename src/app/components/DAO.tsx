'use client'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import NotConnected from './NotConnected'
import Section from './Section'
import { readEventProjectCreated, IProjectCreated } from '../utils/artistVault'
import { FoundProject } from './forms/FoundProject'
import { getProjectNameFromChain, IProposalCreated, readEventProposalCreated } from '../utils/projectDAO'
const currentDate = new Date();

interface IFormData {
    address: `0x${string}`
	projectName: string
    amount: number
    currentDate: string
}

const Dao = () => {
	const { address, isConnected } = useAccount()
	const [projects, setProjects] = useState<IProjectCreated[]>([])
	const [proposals, setProposals] = useState<IProposalCreated[]>([])
	const [formData, setFormData] = useState<IFormData>({
        address: address || '0x',
		projectName: "",
        amount: 0,
		currentDate: currentDate.toLocaleString(),
	});
	const [projectName, setProjectName] = useState("")


	// Read event from chains
	const getProjects = async () => {
		setProjects(await readEventProjectCreated())
	}

	const getProposalsFromEvent = async () => {
		setProposals(await readEventProposalCreated())
	}

	// Read function from chain
	const getProposalsFromChain = async () => {
		const r = await getProjectNameFromChain(address as `0x${string}`)
		console.log("proposal name", r)
		setProjectName(r)
	}


	// Send data to chain
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

	const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
		const actionName: string = 'mint'
		let result: string[] = []
        Object.entries(formData).map(([key, value]) => result.push(value))
	}

	useEffect(() => {
		getProjects()
		getProposalsFromEvent()
		getProposalsFromChain()
	}, [])
	
	return (
	<Section
		className="pt-[12rem] -mt-[5.25rem]"
		crosses
		crossesOffset="lg:translate-y-[5.25rem]"
		customPaddings
		id="dao"
	>
		<div className="relative">
			
		<div className="relative">
		{isConnected
			? <>

			<div>
				<h1 className='mt-2 text-xl font-bold'>Projets </h1>
				{/* projects name from event */}
				<div>
					{projects.map((project: IProjectCreated, index) => (
						<div key={index}>
							{project.projectName}
						</div>
					))}
				</div>

				{/* Project name from contract */}
				<div className='p-2 text-sm'>{projectName}</div>

				{/* form */}
				<div className='mt-2'>
					<FoundProject 
						title="Found a project" 
						description="Founding a project help the artist to achieve his goal."/>
				</div>
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

export default Dao