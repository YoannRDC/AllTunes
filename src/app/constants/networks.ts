export interface IHarmonyNetwork {
    id: number
    name: string
    iconUrl: string
    nativeTokenName: string
    nativeToken: string
    nativeTokenDecimal: number
    blockExplorerName: string
    blockExplorerUrl: string
    rpcUrl: string[]
}

export const HarmonyTestnet: IHarmonyNetwork = {
    id: 441,
    name: 'Harmonie',
    iconUrl: '../../../public/allfeat.png',
    nativeTokenName: 'Harmonie',
    nativeToken: 'HMY',
    nativeTokenDecimal: 18,
    blockExplorerName: 'Polkadot',
    blockExplorerUrl: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fharmonie-endpoint-02.allfeat.io#/explorer',
    rpcUrl: ['https://harmonie-endpoint-02.allfeat.io']
}

// Update to main network
export const Harmony: IHarmonyNetwork = {
    id: 441,
    name: 'Harmonie',
    iconUrl: '../../../public/allfeat.png',
    nativeTokenName: 'Harmonie',
    nativeToken: 'HMY',
    nativeTokenDecimal: 18,
    blockExplorerName: 'Polkadot',
    blockExplorerUrl: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fharmonie-endpoint-02.allfeat.io#/explorer',
    rpcUrl: ['https://harmonie-endpoint-02.allfeat.io']
}

export const Sepolia: IHarmonyNetwork = {
    id: 11155111,
    name: 'Sepolia',
    iconUrl: '../../../public/allfeat.png',
    nativeTokenName: 'SepoliaETH',
    nativeToken: 'ETH',
    nativeTokenDecimal: 18,
    blockExplorerName: 'Etherscan',
    blockExplorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: ['https://ethereum-sepolia.blockpi.network/v1/rpc/public']
}