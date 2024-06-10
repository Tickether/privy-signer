import { useWallets } from '@privy-io/react-auth';
import { createWalletClient, custom, Chain, WalletClient } from 'viem'
import { base, sepolia } from 'viem/chains';

export const useClient = () => {
  
  const {wallets} = useWallets();

  const getPrivyWallet = async(chain: number) =>{
    try {
      const wallet = wallets.find((wallet) => (wallet.walletClientType === 'privy')); // Replace this with your desired wallet
      await wallet?.switchChain(chain);
      return wallet
    } catch (error) {
      console.log(error)
    }
  }
  const getWalletClient = async(chain: number) => {
    try {
      const wallet = await getPrivyWallet(chain)
      const provider = await wallet?.getEthereumProvider();
      let walletClient = undefined
      if (chain == base.id) {
        const baseWalletClient = createWalletClient({
          chain: base,
          transport: custom(provider!),
        });
        walletClient = baseWalletClient
      }
      if (chain == sepolia.id) {
        const sepoliaWalletClient = createWalletClient({
          chain: sepolia,
          transport: custom(provider!),
        });
        walletClient = sepoliaWalletClient
      }
      return walletClient as WalletClient
    } catch (error) {
      console.log(error)
    }
    
  }


  return { getWalletClient }
}




