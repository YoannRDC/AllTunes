// Events
import storage_abi from "../../storage_abi.json";
// Contract
export const abiStorage = storage_abi;

export const sepoliaContractAddressStorage =
  `${process.env.NEXT_PUBLIC_SEPOLIA_CONTRACT_ADDRESS_STORAGE}` as `0x${string}`;
export const sepoliaGenesisBlockStorage = `${process.env.NEXT_PUBLIC_SEPOLIA_GENESIS_BLOCK_STORAGE}`;

export const harmonyContractAddressStorage =
  `${process.env.NEXT_PUBLIC_HARMONY_CONTRACT_ADDRESS_STORAGE}` as `0x${string}`;
export const harmonyGenesisBlockStorage = `${process.env.NEXT_PUBLIC_HARMONY_GENESIS_BLOCK_STORAGE}`;
