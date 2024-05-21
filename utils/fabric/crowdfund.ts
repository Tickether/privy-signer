import { encodeFunctionData, erc20Abi } from 'viem'
import { fabricFactoryABI } from '../abi/fabricFactoryABI'

export function CrowdfundData (
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
    
    return crowdfundData
}