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
