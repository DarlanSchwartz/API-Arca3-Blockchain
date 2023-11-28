import { ethers, BigNumberish } from "ethers";
import * as lockerAbi from "../abis/CredchainLocker.json";
import { sendTx } from "../Common/sendTx";
import { contractAddresses } from "../Common/constants/contractAddresses";

export const depositCollateral = async (
    tokenAddress: string,
    tokenId: string,
    amount: BigNumberish,
    pvtKey: string
) => { 
    const abi = lockerAbi.abi;

    const tx = await sendTx({
        method: "deployNewLoanPool",
        contractAddr:contractAddresses.lockerAddr ,
        args: [
            tokenAddress,
            tokenId,
            amount
        ],
        pvtKey: pvtKey,
        abi,
    });

}




