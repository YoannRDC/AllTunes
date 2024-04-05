import { 
    ProjectCreated,
    contractAddressArtistVault, 
    genesisBlockArtistVault, 
    abiArtistVault 
} from '../constants/artistVault'
import { readContractByFunctionName, readEvents } from './index'

// Interfaces
export interface IProjectCreated {
    owner: `0x${string}`
    projectName: string
}

// Events
export const readEventProjectCreated = async () => {  
    return readEvents(
        ProjectCreated,
        contractAddressArtistVault,
        genesisBlockArtistVault
    ).then(events => {
        console.log('events', events)
        let data: IProjectCreated[] = []

        for (let i = 0; i < events.length; i++) {
            const e: any = events[i]

            const ProjectCreated: IProjectCreated = {
                owner: e.owner,
                projectName: e.projectName,
            }
            data.push(ProjectCreated)
        }
        return data
    })
}

// Read functions
export const getBaseTokenURI = async (address: `0x${string}`): Promise<string> => {
    return readContractByFunctionName<string>(
        'getBaseTokenURI',
        abiArtistVault,
        contractAddressArtistVault,
        address, 
    ).then(baseURI => baseURI)
     .catch((err) => {
        console.log(err)
        return ""
    })
}

export interface IArtist {
    address: `0x${string}`
    name: string
    alias?: string
    image?: string
    description: string
    genres: number[] 
    assets: number[] 
    contracts: `0x${string}`[] 
}

export const getArtist = async (
    address: `0x${string}`,
    account: `0x${string}`
): Promise<IArtist> => {
    return readContractByFunctionName<IArtist>(
        'get_artist',
        abiArtistVault,
        contractAddressArtistVault,
        address,
        account
    ).then(Artist => Artist)
     .catch((err) => {
        console.log(err)
        return {
            address: "0x",
            name: "",
            alias: "",
            image: "",
            description: "",
            genres: [],
            assets: [],
            contracts: [],
        }
    })
}

export const checkGovTokenBalance = async (
    address: `0x${string}`,
    user: `0x${string}`,
): Promise<number> => {
    return readContractByFunctionName<number>(
        'checkGovTokenBalance',
        abiArtistVault,
        contractAddressArtistVault,
        address,
        user
    ).then(balances => balances)
     .catch((err) => {
        console.log(err)
        return 0
    })
}

export const getTotalGovTokenBalance = async (
    address: `0x${string}`,
): Promise<number> => {
    return readContractByFunctionName<number>(
        'getTotalGovTokenBalance',
        abiArtistVault,
        contractAddressArtistVault,
        address,
    ).then(totalGovTokenBalance => totalGovTokenBalance)
     .catch((err) => {
        console.log(err)
        return 0
    })
}

// see ERC20 token
export interface IGovToken {

}

export const getGovToken = async (
    address: `0x${string}`,
): Promise<IGovToken> => {
    return readContractByFunctionName<IGovToken>(
        'GovToken',
        abiArtistVault,
        contractAddressArtistVault,
        address,
    ).then(GovToken => GovToken)
     .catch((err) => {
        console.log(err)
        return {}
    })
}