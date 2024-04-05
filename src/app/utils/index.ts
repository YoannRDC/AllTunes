import 'dotenv/config'
import { HarmonyTestnet } from "../constants/networks";
import { abiArtistVault, contractAddressArtistVault, genesisBlockArtistVault } from "../constants/artistVault"
import { abiProjectDAO, contractAddressProjectDAO, genesisBlockProjectDAO } from "../constants/projectDAO"
import { abiGovToken, contractAddressGovToken, genesisBlockGovToken } from "../constants/govToken"
import {
    BaseError,
    ContractFunctionRevertedError,
    GetLogsReturnType,
    parseAbiItem
} from "viem"
import { readContract, writeContract, simulateContract } from '@wagmi/core'
import { client, config } from './config'


const formattedError = (err: any): Error => {
    if (err instanceof BaseError) {
        // Option 1: checking the instance of the error
        if (err.cause instanceof ContractFunctionRevertedError) {
            const cause: ContractFunctionRevertedError = err.cause
            const error = cause.reason ?? 'Unknown error'

            throw new Error(error)
        }

        // Option 2: using `walk` method from `BaseError`
        const revertError: any = err.walk(err => err instanceof ContractFunctionRevertedError)
        if (revertError) {
            const error = revertError.data?.message ?? 'Unknown error'

            throw new Error(error)
        }
    }

    throw new Error(err.message)
}



export const readContractByFunctionName = async <T>(
    functionName: string,
    abi: any,
    contractAddress: `0x${string}`,
    address: `0x${string}`,
    ...args: `0x${string}`[]|any[]
): Promise<T> => {

    try {
        const data: Promise<T>|unknown = await readContract(config, {
            abi: abi,
            address: contractAddress,
            functionName: functionName,
            account: address,
            args: args
        })

        return data as T
    } catch (err) {
        throw formattedError(err)
    }
}


export const writeContractByFunctionName = async (
    abi: [],
    contractAddress: `0x${string}`,
    functionName: string,
    ...args: `0x${string}`[]|any[]
): Promise<`0x${string}`> => {
    try {
        const { request } = await simulateContract(config, {
            abi: abi,
            address: contractAddress,
            functionName: functionName,
            args: args
        })

        const hash = await writeContract(config, request)
        
        return hash
    } catch (err) {
        throw formattedError(err)
    }
}


export const readEvents = async (
    signature: string,
    contractAddress: `0x${string}`,
    genesisBlock: string
): Promise<GetLogsReturnType<any>> => {
    try {
        return await client.getLogs({
            address: contractAddress,
            event: parseAbiItem([signature]),
            fromBlock: BigInt(genesisBlock),
            toBlock: 'latest'
        })
        
    } catch (err) {
        throw formattedError(err)
    }
}