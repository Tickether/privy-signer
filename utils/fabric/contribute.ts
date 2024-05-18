//import { encodeFunctionData, erc20Abi } from "viem"

import { encodeFunctionData } from "viem";
import { fabricFi } from "../constants/addresses";
import { fabricFiABI } from "../abi/fabricFiABI";




export const Contribute = (amount: bigint) => {
    const contributeData = encodeFunctionData({
        abi: fabricFiABI,
        functionName: 'contributeERC20',
        args: [(amount)]
    })

    // Build the transactions
    const contributeTx = {
        to: fabricFi,
        data: contributeData    
    };
    return contributeTx
}
