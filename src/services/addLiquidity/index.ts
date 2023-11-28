import { sendTx } from '../Common/sendTx';
import { getVaultAddr } from '../../services';
import * as vaultAbi from '../abis/CredChainVault.json';
import { contractAddresses } from '../Common/constants/contractAddresses';

export const addLiquidity = async (
    poolAddress: string,
    amount: string,
    pvtKey: string
) => {
    const abi = vaultAbi.abi
    const vaultAddr = await getVaultAddr(poolAddress)
    const tx = await sendTx({
        method: 'addLiquidity',
        contractAddr: vaultAddr,
        args: [contractAddresses.realTokenizadoAddr, amount],
        pvtKey: pvtKey,
        abi
    })

    return tx
}