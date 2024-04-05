import { 
    ProposalCreated, 
    ProposalQueued, 
    ProposalExecuted, 
    VoteCast, 
    contractAddressProjectDAO, 
    genesisBlockProjectDAO,  
} from '../constants/projectDAO'
import { readEvents } from './index'

// Interfaces
export interface IProposalCreated {
    id: number
    proposer: `0x${string}`
    targets: `0x${string}`[]
    values: number[]
    signatures: string[]
    calldatas: string[]
    startBlock: number
    endBlock: number
    description: string
}

export interface IProposalQueued {
    id: number
    eta: number
}

export interface IProposalExecuted {
    id: number
}

export interface IVoteCast {
    voter: `0x${string}`
    proposalId: number
    voteChoice: number
    votes: number
    reason: string
}



export const readEventProposalCreated = async () => {
    return readEvents(
        ProposalCreated,
        contractAddressProjectDAO,
        genesisBlockProjectDAO
    ).then(events => {
        console.log('event from ProposalCreated', events)
        let data: IProposalCreated[] = []

        for (let i = 0; i < events.length; i++) {
            const e: any = events[i]

            const proposalCreated: IProposalCreated = {
                id: e.id,
                proposer: e.proposer,
                targets: e.targets,
                values: e.values,
                signatures: e.signatures,
                calldatas: e.calldatas,
                startBlock: e.startBlock,
                endBlock: e.endBlock,
                description: e.description,
            }
            data.push(proposalCreated)
            
        }
        return data
    })
}

export const readEventProposalQueued = async () => {
    return readEvents(
        ProposalQueued,
        contractAddressProjectDAO,
        genesisBlockProjectDAO
    ).then(events => {
        let data: IProposalQueued[] = []

        for (let i = 0; i < events.length; i++) {
            const e: any = events[i]

            const proposalQueued: IProposalQueued = {
                id: e.id,
                eta: e.eta,
            }
            data.push(proposalQueued)
        }
        return data
    })
}

export const readEventProposalExecuted = async () => {
    return readEvents(
        ProposalExecuted,
        contractAddressProjectDAO,
        genesisBlockProjectDAO
    ).then(events => {
        let data: IProposalExecuted[] = []

        for (let i = 0; i < events.length; i++) {
            const e: any = events[i]

            const proposalExecuted: IProposalExecuted = {
                id: e.id,
            }
            data.push(proposalExecuted)
        }
        return data
    })
}

export const readEventVoteCast = async () => {
    return readEvents(
        VoteCast,
        contractAddressProjectDAO,
        genesisBlockProjectDAO
    ).then(events => {
        let data: IVoteCast[] = []

        for (let i = 0; i < events.length; i++) {
            const e: any = events[i]

            const voteCast: IVoteCast = {
                voter: e.voter,
                proposalId: e.proposalId,
                voteChoice: e.voteChoice,
                votes: e.votes,
                reason: e.reason,
            }
            data.push(voteCast)
        }
        return data
    })
}