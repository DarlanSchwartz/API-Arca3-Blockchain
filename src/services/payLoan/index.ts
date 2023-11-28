import { sendTx } from "../Common/sendTx";
import * as CredChainLoanPoolAbi from "../abis/CredChainLoanPool.json";
import { getPoolAddr } from "../../services";
import { BigNumberish } from "ethers";

export const payLoan = async (
    installmentToPay: string,
    amount: BigNumberish,
    loanId:string,
    pvtKey: string
) => {
    const abi = CredChainLoanPoolAbi.abi;
    const poolAddr = await getPoolAddr(loanId);
    const tx = await sendTx({
        method: "payLoan",
        contractAddr: poolAddr,
        args: [
            installmentToPay,
            amount,
            loanId
        ],
        pvtKey: pvtKey,
        abi,
    });

    return tx;
}