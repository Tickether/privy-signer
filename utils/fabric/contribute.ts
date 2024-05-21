//import { encodeFunctionData, erc20Abi } from 'viem'

import { encodeFunctionData } from 'viem';
import { fabricFi } from '../constants/addresses';
import { fabricFiABI } from '../abi/fabricFiABI';




export const ContributeData = () => {
    const contributeData = encodeFunctionData({
        abi: fabricFiABI,
        functionName: 'contributeEth',
    })

    return contributeData
}
