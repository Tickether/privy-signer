import { useWallets } from '@privy-io/react-auth';
import { createWalletClient, custom, Chain, WalletClient } from 'viem'
import { base, sepolia } from 'viem/chains';


export const getPrivyWallet = async(chain: number) =>{
  const {wallets} = useWallets();
  const wallet = wallets.find((wallet) => (wallet.walletClientType === 'privy')); // Replace this with your desired wallet
  await wallet?.switchChain(chain);
  return wallet
}

export const getWalletClient = async(chain: number) => {
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
  
}
