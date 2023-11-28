import express from 'express';

import { Controller } from '../controllers/Controller';

const contractRouter = express.Router()

// Admin

contractRouter.post('/createKeyPairs', Controller.createKeyPairs);
contractRouter.post('/createNewPool', Controller.createNewPool);
contractRouter.post('/createNewVault', Controller.createNewVault);

//Requester

contractRouter.post('/getAssetsByLoanResquester', Controller.getAssetsByLoanResquester);

contractRouter.post('/depositCollateral', Controller.depositCollateral);

contractRouter.post('/requestLoan', Controller.requestLoan);

contractRouter.post('/payLoan', Controller.payLoan);

// Lender

contractRouter.post('/getPoolsList', Controller.getPoolsList);

contractRouter.post('/addLiquidity', Controller.addLiquidity);

contractRouter.post('/getBalancesByLP', Controller.getBalancesByLP);


module.exports = contractRouter;