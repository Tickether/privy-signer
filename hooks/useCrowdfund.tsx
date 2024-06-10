
import { fabricFactoryBase, fabricFactorySepolia } from '@/utils/constants/addresses';
import { CrowdfundData } from '@/utils/fabric/crowdfund';
import { useState } from 'react'
import { parseUnits } from 'viem';
import { base, sepolia } from 'viem/chains';
import { useClient } from './useClient';

export const useCrowdfund = () => {
    const [loadingCrowdfund, setLoading] = useState<boolean>(false)
    const { getWalletClient } = useClient()

    const Crowdfund = async(
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
        let  fabricFactory
        if (chain == sepolia.id) {
            fabricFactory = fabricFactorySepolia
        }
        if (chain == base.id) {
            fabricFactory = fabricFactoryBase
        }
        // Build the transactions
        const privyWalletClient = await getWalletClient(chain);
        const [address] = await privyWalletClient!.getAddresses()
        console.log(address)
        const tx = await privyWalletClient!.sendTransaction({
            account: address,
            to: fabricFactory,
            data: CrowdfundData(
                (address),
                (parseUnits(minGoal, decimals)),
                (parseUnits(maxGoal, decimals)),
                (parseUnits(minContribution, decimals)),
                (parseUnits(maxContribution, decimals)),
                (holdOff),
                (duration),
                (erc20TokenAddr),
            ),
            value: BigInt(0),
            chain: privyWalletClient!.chain
        })
        console.log(tx)
        setLoading(false)
    }
    return { loadingCrowdfund, Crowdfund }
}