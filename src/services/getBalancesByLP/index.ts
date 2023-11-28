import { ethers, BigNumberish } from "ethers";
import * as vaultBookKeeperAbi from "../abis/VaultBookKeeper.json";
import { readState } from "../Common/readState";
import { contractAddresses } from "../Common/constants/contractAddresses";

export const getBalancesByLP = async (
    address: string,
    pvtKey: string
) => { 
    const abi = vaultBookKeeperAbi.abi;

    const tx = await readState({
        method: "getBalancesByLP",
        contractAddr:contractAddresses.vaultBookKeeperAddr,
        args: [
            address
        ],
        pvtKey: pvtKey,
        abi,
    });
}
