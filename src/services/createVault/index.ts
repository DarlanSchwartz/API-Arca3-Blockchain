import { ethers } from "ethers";
import * as vaultFactoryAbi from "../abis/VaultFactory.json";
import { sendTx } from "../Common/sendTx";
import { contractAddresses } from "../Common/constants/contractAddresses";

export const createVault = async (
    vaultName: string,
    token: string,
    collateralTargetToken: string,
    vaultBookKeeper: string,
    tokenName: string,
    tokenSymbol: string,
    pvtKey: string
) => {
    const salt = ethers.utils.randomBytes(32);

    const abi = vaultFactoryAbi.abi;

    const tx = await sendTx({
        method: "deployNewVault",
        contractAddr: contractAddresses.vaultFactoryAdd,
        args: [
            vaultName,
            token,
            collateralTargetToken,
            vaultBookKeeper,
            tokenName,
            tokenSymbol,
            salt,
        ],
        pvtKey: pvtKey,
        abi,
    });

    return tx;
}