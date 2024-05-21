export const fabricFiABI = [
    {
        inputs: [
            { name: 'amount', type: 'uint256' }, 
        ],
        name: 'contributeERC20',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
      inputs: [],
      name: 'contributeEth',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
  },
] as const;
