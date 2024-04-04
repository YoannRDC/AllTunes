import 'dotenv/config'
import { Harmony, HarmonyTestnet, IHarmonyNetwork } from "../constants/networks";

const network = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? 'testnet' : 'main'

const getNetwork = (): IHarmonyNetwork => {
    switch (network) {
        case 'testnet': return HarmonyTestnet
        case 'main': return Harmony
        default: return HarmonyTestnet
    }
}

export default getNetwork
