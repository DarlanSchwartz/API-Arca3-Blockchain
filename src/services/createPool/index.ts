import { ethers } from "ethers";
import * as poolFactoryAbi from "../abis/LoanPoolFactory.json";
import { sendTx } from "../Common/sendTx";
import { contractAddresses } from "../Common/constants/contractAddresses";

export const createPool = async (
    poolName: string,
    acceptedCollateralToken: string,
    financingVault: string,
    locker: string,
    loanBookKeeper: string,
    paymentToken: string,
    pvtKey: string
) => {
    const salt = ethers.utils.randomBytes(32);

    const abi = poolFactoryAbi.abi;

    const tx = await sendTx({
        method: "deployNewLoanPool",
        contractAddr: contractAddresses.loanPoolFactoryAddr,
        args: [
            poolName,
            acceptedCollateralToken,
            financingVault,
            locker,
            loanBookKeeper,
            paymentToken,
            salt,
        ],
        pvtKey: pvtKey,
        abi,
    });

}