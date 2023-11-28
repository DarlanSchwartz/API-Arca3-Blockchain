import { ethers } from "ethers"

export type ReadStateParams = {
    method: string,
    contractAddr: string,
    pvtKey: string,
    args?: any[],
    abi: ethers.ContractInterface
}




export type SendTxParams = {
    method: string,
    contractAddr: string,
    contractName?: string,
    pvtKey: string,
    args?: any[],
    abi: ethers.ContractInterface
}

export type contractInteractionParams = {
    method: string,
    contractAddr: string,
    contractName: string,
    args?: any[]
}


enum OPType{
    read = "read",
    sendTx = "send"
}

type interactionType = {
    operation?: OPType
}

export type scInteractionParams = contractInteractionParams & interactionType