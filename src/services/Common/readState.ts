import { ethers } from "ethers";
import { ReadStateParams } from "./types";
import { providerUrl } from '../Common/constants/providerUrl'

export const readState = async ({
    method,
    contractAddr,
    pvtKey,
    args,
    abi
}: ReadStateParams) => {

    try {
        const customHttpProvider = new ethers.providers.JsonRpcProvider({
            url: providerUrl
        });

        const wallet = new ethers.Wallet(pvtKey);
        const signer = wallet.connect(customHttpProvider);

        const contract = new ethers.Contract(contractAddr, abi, signer);

        const result = await contract[method](...args || '');

        return result
    }
    catch (error: any) {
        const errorMessage = {
            "Reason": error.reason,
            "Code": error.code
        }
        console.log(errorMessage)
    }

}
