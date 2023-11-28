import { getKeyPairs } from "./createAccount";
import { addLiquidity } from "./addLiquidity";
import { createPool } from "./createPool";
import { createVault } from "./createVault";
import { depositCollateral } from "./depositCollateral";
import { getAssetsByLoanResquester } from "./getAssetsLoanRequester";
import { getBalancesByLP } from "./getBalancesByLP";
import { getPoolsList, getVaultAddr, getPoolAddr,getPoolAddrToRequestLoan } from "./getPoolsList";
import { payLoan } from "./payLoan";
import { requestLoan } from "./requestLoan";
// adicionar funcoes auxiliares ERC20, ERC721, ERC1155

export{
    getKeyPairs,
    addLiquidity,
    createPool,
    createVault,
    depositCollateral,
    getAssetsByLoanResquester,
    getBalancesByLP,
    getPoolsList,
    payLoan,
    requestLoan,
    getVaultAddr,
    getPoolAddr,
    getPoolAddrToRequestLoan
}