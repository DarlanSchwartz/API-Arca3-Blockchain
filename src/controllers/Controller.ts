import { Request, Response } from 'express';
import { 
    getKeyPairs,
    addLiquidity as addLiquidityService,
    createPool as createPoolService,
    createVault as createVaultService,
    depositCollateral as depositCollateralService,
    getAssetsByLoanResquester as getAssetsByLoanResquesterService,
    getBalancesByLP as getBalancesByLPService,
    getPoolsList as getPoolsListService,
    payLoan as payLoanService,
    requestLoan as requestLoanService

} from "../services";

const createKeyPairs = async (req: Request, res: Response) => {
    const ret = await getKeyPairs();
    res.status(201).send(ret);
};

const createNewPool = async (req: Request, res: Response) => {};

const createNewVault = async (req: Request, res: Response) => {};

const getAssetsByLoanResquester = async (req: Request, res: Response) => {
    const ret = await getAssetsByLoanResquesterService(
        req.body.address,
        req.body.pvtKey
    );
    res.status(200).send(ret);
};

const depositCollateral = async (req: Request, res: Response) => {
    const tx = await depositCollateralService(
        req.body.tokenAddress,
        req.body.tokenId,
        req.body.amount,
        req.body.pvtKey
    );
    res.status(201).send(tx);
};

const requestLoan = async (req: Request, res: Response) => {
    const tx = await requestLoanService(
        req.body.tokenAddress,
        req.body.tokenId,
        req.body.amount,
        req.body.loanDuration,
        req.body.pvtKey
    );
    res.status(201).send(tx);
};

const payLoan = async (req: Request, res: Response) => {
    const tx = await payLoanService(
        req.body.installmentToPay,
        req.body.amount,
        req.body.loanId,
        req.body.pvtKey
    );
    res.status(201).send(tx);
};

const getPoolsList = async (req: Request, res: Response) => {
    res.status(200).send(await getPoolsListService(
        req.body.pvtKey
    ));
};

const addLiquidity = async (req: Request, res: Response) => {
    const tx = await addLiquidityService(
        req.body.poolAddress,
        req.body.amount,
        req.body.pvtKey
    );
    res.status(201).send(tx);
};

const getBalancesByLP = async (req: Request, res: Response) => {
    const ret = await getBalancesByLPService(
        req.body.address,
        req.body.pvtKey
    );
    res.status(200).send(ret);
};

export const Controller = {
    createKeyPairs,
    createNewPool,
    createNewVault,
    getAssetsByLoanResquester,
    depositCollateral,
    requestLoan,
    payLoan,
    getPoolsList,
    addLiquidity,
    getBalancesByLP
};