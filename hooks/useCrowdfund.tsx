import { getWalletClient } from '@/utils/client';
import { fabricFactory } from '@/utils/constants/addresses';
import { CrowdfundData } from '@/utils/fabric/crowdfund';
import { useState } from 'react'
import { Chain, parseUnits } from 'viem';

export const useCrowdfund = () => {
    const [loadingCrowdfund, setLoading] = useState<boolean>(false)

    const Crowdfund = async(
        recipient: `0x${string}`,
        minGoal: string,
        maxGoal: string,
        minContribution: string,
        maxContribution: string,
        holdOff: number,
        duration: number,
        erc20TokenAddr: `0x${string}`,
        decimals: number,
        chain: number
    )=>{
        setLoading(true)
        // Build the transactions
        const privyWalletClient = await getWalletClient(chain);
        const [address] = await privyWalletClient.getAddresses()
        await privyWalletClient.sendTransaction({
            account: address,
            to: fabricFactory,
            data: CrowdfundData(
                (recipient),
                (parseUnits(minGoal, decimals)),
                (parseUnits(maxGoal, decimals)),
                (parseUnits(minContribution, decimals)),
                (parseUnits(maxContribution, decimals)),
                (holdOff),
                (duration),
                (erc20TokenAddr),
            ),
            value: BigInt(0),
            chain: privyWalletClient.chain
        })
        setLoading(false)
    }
    return { loadingCrowdfund, Crowdfund }
}