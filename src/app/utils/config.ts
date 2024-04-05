import { Chain } from '@rainbow-me/rainbowkit';
import { http, createConfig } from '@wagmi/core'
import { createPublicClient } from 'viem';
import { Harmony, HarmonyTestnet, IHarmonyNetwork } from '../constants/networks';


const network = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? 'testnet' : 'main'

let networkConfig: IHarmonyNetwork

switch (network) {
    case 'testnet': networkConfig = HarmonyTestnet
    case 'main': networkConfig = Harmony
    default: networkConfig = HarmonyTestnet
}

export const allfeat = {
    id: networkConfig.id,
    name: networkConfig.name,
    iconUrl: networkConfig.iconUrl,
    iconBackground: '#fff',
    nativeCurrency: {
        name: networkConfig.nativeTokenName,
        symbol: networkConfig.nativeToken,
        decimals: networkConfig.nativeTokenDecimal
    },
    rpcUrls: {
        default: { http: networkConfig.rpcUrl },
    },
    blockExplorers: {
        default: {
            name: networkConfig.blockExplorerName,
            url: networkConfig.blockExplorerUrl
        },
    },
    contracts: {
        multicall3: {
            address: process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS as `0x${string}` || "0x",
            blockCreated: Number(process.env.NEXT_PUBLIC_GENESIS_BLOCK) || 0,
        },
    },
} as const satisfies Chain


export const config = createConfig({
    chains: [allfeat],
    transports: {
      [allfeat.id]: http(),
    },
})

export const client = createPublicClient({
    chain: allfeat,
    transport: http(HarmonyTestnet.rpcUrl[0])
})