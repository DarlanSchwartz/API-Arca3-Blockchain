import { ethers } from "ethers";
import { SendTxParams } from "./types";
import { providerUrl } from '../Common/constants/providerUrl'

export const sendTx = async ({
    method,
    contractAddr,
    pvtKey,
    args,
    abi
}:SendTxParams) =>{

    try{
        const customHttpProvider = new ethers.providers.JsonRpcProvider({
            url: providerUrl
        });
    
        const wallet = new ethers.Wallet(pvtKey);
        const signer = wallet.connect(customHttpProvider);

        const contract = new ethers.Contract(contractAddr, abi, signer);

        const tx = await contract[method](...args || '', {gasLimit:2100000});
        
        const receipt = await tx.wait()

        console.log(`Tx hash ${tx.hash}, Tx status ${receipt.status}`);

        return {
            'tx': tx,
            'status': receipt.status
        }
    }catch(error:any){
        const errorMessage = {
            "Reason": error.reason,
            "Code": error.code
        }
        console.log(errorMessage)
    }

}
    

