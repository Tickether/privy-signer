import { encodeFunctionData, erc20Abi } from "viem"
import { fabricFactoryABI } from "../abi/fabricFactoryABI"
import { fabricFactory } from "../constants/addresses";

export function Crowdfund (
    recipient: `0x${string}`,
    minGoal: bigint,
    maxGoal: bigint,
    minContribution: bigint,
    maxContribution: bigint,
    holdOff: number,
    duration: number,
    erc20TokenAddr: `0x${string}`,

) {
    const crowdfundData = encodeFunctionData({
        abi: fabricFactoryABI,
        functionName: 'deployCampaign',
        args: [
            (recipient),
            (minGoal),
            (maxGoal),
            (minContribution),
            (maxContribution),
            (holdOff),
            (duration),
            (erc20TokenAddr),
        ]
    })
    // Build the transactions
    const crowdfundTx = {
        to: fabricFactory,
        data: crowdfundData    
    };
    return crowdfundTx
}