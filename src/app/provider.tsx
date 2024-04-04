'use client'

import * as React from 'react';
import {
    RainbowKitProvider,
    getDefaultWallets,
    getDefaultConfig,
    Chain,
    lightTheme,
    Theme,
} from '@rainbow-me/rainbowkit';
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { Harmony, HarmonyTestnet, IHarmonyNetwork } from './constants/networks';
import merge from 'lodash.merge';
import '@rainbow-me/rainbowkit/styles.css';



// const customTheme = merge(lightTheme({
//     borderRadius: 'small',
//     overlayBlur: 'small',
//     fontStack: 'system',
// }), {
//     colors: {
//         accentColor: '#4c5be0ff',
//         accentColorForeground: '#d7fffdff', // Test Button
//         connectButtonBackground: '#5452e7',
//         connectButtonText: '#f1f5f9',
//         generalBorder: '#4c5be0ff',
//         menuItemBackground: '#4c5be066',
//         profileActionHover: '#4c5be066',
//         selectedOptionBorder: '',
//         standby: '',
//     },
// } as Theme)



const projectId: string = process.env.NEXT_PUBLIC_WALLET_PROJECT_ID || ""
const { wallets } = getDefaultWallets();
const network = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? 'testnet' : 'main'
let networkConfig: IHarmonyNetwork

switch (network) {
    case 'testnet': networkConfig = HarmonyTestnet
    case 'main': networkConfig = Harmony
    default: networkConfig = HarmonyTestnet
}

const allfeat = {
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

const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: projectId,
    wallets: [
        ...wallets,
        {
            groupName: 'Other',
            wallets: [argentWallet, trustWallet, ledgerWallet],
        },
    ],
    chains: [
        allfeat,
    ],
    ssr: true,
});

const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default Provider