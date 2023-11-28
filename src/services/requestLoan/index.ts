import { sendTx } from "../Common/sendTx";
import * as CredChainLoanPoolAbi from "../abis/CredChainLoanPool.json";
import { getPoolAddrToRequestLoan } from "../../services";
import { BigNumberish } from "ethers";

export const requestLoan = async (
    tokenAddress: string,
    tokenId: string,
    amount: BigNumberish,
    loanDuration: string,
    pvtKey: string
) => {
    const abi = CredChainLoanPoolAbi.abi;
    const poolAddr = await getPoolAddrToRequestLoan(tokenAddress, loanDuration);
    const tx = await sendTx({
        method: "requestLoan",
        contractAddr: poolAddr,
        args: [
            tokenAddress,
            tokenId,
            amount,
            loanDuration
        ],
        pvtKey: pvtKey,
        abi,
    });

    return tx;
}
