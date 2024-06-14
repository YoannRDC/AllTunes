import { Chain } from '@rainbow-me/rainbowkit';
import { http, createConfig } from '@wagmi/core'
import { createPublicClient } from 'viem';
import { Harmony, HarmonyTestnet, IHarmonyNetwork } from '../constants/networks';


const network = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? 'testnet' : 'main'
console.log('config.ts:testnet', network)
let networkConfig: IHarmonyNetwork

switch (network) {
    case 'testnet': networkConfig = HarmonyTestnet
    case 'main': networkConfig = Harmony
    default: networkConfig = HarmonyTestnet
}
console.log('config.ts:networkConfig', networkConfig)
export const allfeat = {
    id: networkConfig.id,
    name: networkConfig.name,
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
    // contracts: {
    //     multicall3: {
    //         // address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_ARTIST_VAULT as `0x${string}` || "0x",
    //         // blockCreated: Number(process.env.NEXT_PUBLIC_GENESIS_BLOCK_ARTIST_VAULT) || 0,
    //         address: "0x",
    //     },
    // },
} as const satisfies Chain
console.log('config.ts:allfeat', allfeat)


export const config = createConfig({
    chains: [allfeat],
    transports: {
      [allfeat.id]: http(),
    },
})
console.log('config.ts:config', config)
export const client = createPublicClient({
    chain: allfeat,
    transport: http(HarmonyTestnet.rpcUrl[0])
})
console.log('config.ts:client', client)