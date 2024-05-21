import { getWalletClient } from '@/utils/client';
import { fabricFi } from '@/utils/constants/addresses';
import { ContributeData } from '@/utils/fabric/contribute';
import { useState } from 'react'
import { parseEther } from 'viem';

export const useContribute = () => {
    const [loadingContribute, setLoading] = useState<boolean>(false)
    
    const Contribute = async(amount: string)=>{
        setLoading(true)
        // Build the transactions
        const privyWalletClient = await getWalletClient();
        const [address] = await privyWalletClient.getAddresses()
        privyWalletClient.sendTransaction({
            account: address,
            to: fabricFi,
            data: ContributeData(),
            value: parseEther(amount)
        })
        setLoading(false)
    }
    return { loadingContribute, Contribute }
}