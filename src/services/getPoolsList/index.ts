import { readState } from "../Common/readState"
import { contractAddresses } from "../Common/constants/contractAddresses"
import * as loanBookKeeper from "../abis/LoanBookKeeper.json"

export const getPoolsList = async (pvtKey: string) => {
    const abi = loanBookKeeper.abi;

    const tx = await readState({
        method: "getPoolsList",
        contractAddr: contractAddresses.loanBookKeeperAddr,
        args: [],
        pvtKey: pvtKey,
        abi,
    });

    return tx;
}

export const getPoolAddrToRequestLoan = async (
    collateralTokenAddr: string,
    loanDuration: string): Promise<string> => {
    return ""
}

export const getVaultAddr = async (poolAddress: string): Promise<string> => {
    return ""
}

export const getPoolAddr = async (collateralTokenAddr: string): Promise<string> => {
    return ""
}