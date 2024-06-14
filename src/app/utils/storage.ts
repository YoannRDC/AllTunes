import { readContractByFunctionName } from ".";
import {
  abiStorage,
  harmonyContractAddressStorage,
  sepoliaContractAddressStorage,
} from "../constants/storage";

export const getChainIdsList = async (
    address: `0x${string}`,
    network: string
): Promise<string> => {
    let contractAddress = harmonyContractAddressStorage

    if (network === "sepolia") {
        contractAddress = sepoliaContractAddressStorage
    }

    console.log("contract addr : ", contractAddress)

    return readContractByFunctionName<string>(
        "getChainIdsList",
        abiStorage,
        contractAddress,
        address,
        network,
    )
    .then((baseURI) => baseURI)
    .catch((err) => {
        console.log(err);
        return "";
    });
};
