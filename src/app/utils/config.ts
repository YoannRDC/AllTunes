import { Chain } from "@rainbow-me/rainbowkit";
import { http, createConfig } from "@wagmi/core";
import { createPublicClient } from "viem";
import {
  Harmony,
  HarmonyTestnet,
  IHarmonyNetwork,
  Sepolia,
} from "../constants/networks";

const network =
  process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? "testnet" : "main";
// console.log("config.ts:testnet", network);
let networkConfig: IHarmonyNetwork;

switch (network) {
  case "testnet":
    networkConfig = HarmonyTestnet;
  case "main":
    networkConfig = Harmony;
  default:
    networkConfig = HarmonyTestnet;
}
// console.log("config.ts:networkConfig", networkConfig);
export const allfeat = {
  id: networkConfig.id,
  name: networkConfig.name,
  nativeCurrency: {
    name: networkConfig.nativeTokenName,
    symbol: networkConfig.nativeToken,
    decimals: networkConfig.nativeTokenDecimal,
  },
  rpcUrls: {
    default: { http: networkConfig.rpcUrl },
  },
  blockExplorers: {
    default: {
      name: networkConfig.blockExplorerName,
      url: networkConfig.blockExplorerUrl,
    },
  },
} as const satisfies Chain;
// console.log("config.ts:allfeat", allfeat);

export const sepolia = {
  id: Sepolia.id,
  name: Sepolia.name,
  nativeCurrency: {
    name: Sepolia.nativeTokenName,
    symbol: Sepolia.nativeToken,
    decimals: Sepolia.nativeTokenDecimal,
  },
  rpcUrls: {
    default: { http: Sepolia.rpcUrl },
  },
  blockExplorers: {
    default: {
      name: Sepolia.blockExplorerName,
      url: Sepolia.blockExplorerUrl,
    },
  },
} as const satisfies Chain;

export const config = createConfig({
  chains: [allfeat, sepolia],
  transports: {
    [allfeat.id]: http(),
    [sepolia.id]: http(),
  },
});
// console.log("config.ts:config", config);


export const clientHarmony = createPublicClient({
  chain: allfeat,
  transport: http(HarmonyTestnet.rpcUrl[0]),
});
// console.log("config.ts:client", clientHarmony);


export const clientSepolia = createPublicClient({
    chain: sepolia,
    transport: http(Sepolia.rpcUrl[0]),
  });
// console.log("config.ts:client", clientSepolia);