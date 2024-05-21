import { useWallets } from '@privy-io/react-auth';
import { createPublicClient, http, createWalletClient, custom } from 'viem'
import { sepolia, base } from 'viem/chains'


export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
})

export const getPrivyWallet = async() =>{
  const {wallets} = useWallets();
  const wallet = wallets[0]; // Replace this with your desired wallet
  await wallet.switchChain(sepolia.id);
  return wallet
}

export const getWalletClient = async() => {
  const wallet = await getPrivyWallet()
  const provider = await wallet.getEthereumProvider();
  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(provider),
  });
  return walletClient
}
