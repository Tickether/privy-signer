
import { ContributeData } from '@/utils/fabric/contribute';
import { useState } from 'react'
import { parseEther } from 'viem';
import { useClient } from './useClient';

export const useContribute = () => {
    const [loadingContribute, setLoading] = useState<boolean>(false)
    const { getWalletClient } = useClient()
    
    const Contribute = async(amount: string, chain: number, to: `0x${string}`)=>{
        setLoading(true)
        
        // Build the transactions
        const privyWalletClient = await getWalletClient(chain);
        const [address] = await privyWalletClient!.getAddresses()
        
        const tx = await privyWalletClient!.sendTransaction({
            account: address,
            to: to,
            data: ContributeData(),
            value: parseEther(amount),
            chain: privyWalletClient!.chain
        })
        setLoading(false)
        console.log(tx)
    }
    return { loadingContribute, Contribute }
}