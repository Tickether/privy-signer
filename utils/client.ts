import { useWallets } from '@privy-io/react-auth';
import { createWalletClient, custom, Chain } from 'viem'


export const getPrivyWallet = async(chain: number) =>{
  const {wallets} = useWallets();
  const wallet = wallets.find((wallet) => (wallet.walletClientType === 'privy')); // Replace this with your desired wallet
  await wallet?.switchChain(chain);
  return wallet
}

export const getWalletClient = async(chain: Chain) => {
  const wallet = await getPrivyWallet(chain.id)
  const provider = await wallet?.getEthereumProvider();
  const walletClient = createWalletClient({
    chain: chain,
    transport: custom(provider!),
  });
  return walletClient
}
