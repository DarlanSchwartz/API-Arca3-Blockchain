import { ethers, BigNumberish } from "ethers";
import * as loanBookKeeperAbi from "../abis/LoanBookKeeper.json";
import { readState } from "../Common/readState";
import { contractAddresses } from "../Common/constants/contractAddresses";

export const getAssetsByLoanResquester = async (
    address: string,
    pvtKey: string
) => { 
    const abi = loanBookKeeperAbi.abi;

    const tx = await readState({
        method: "getAssetsByLoanResquester",
        contractAddr:contractAddresses.loanBookKeeperAddr,
        args: [
            address
        ],
        pvtKey: pvtKey,
        abi,
    });
}