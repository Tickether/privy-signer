export const fabricFactoryABI = [
    {
        inputs: [
            
            { name: 'recipient', type: 'address' },
            { name: 'minGoal', type: 'uint256' }, 
            { name: 'maxGoal', type: 'uint256' },
            { name: 'minContribution', type: 'uint256' },
            { name: 'maxContribution', type: 'uint256' },
            { name: 'holdOff', type: 'uint32' },
            { name: 'duration', type: 'uint32' },
            { name: 'erc20TokenAddr', type: 'address' },

        ],
        name: 'deployCampaign',
        outputs: [{ name: '', type: 'address' }],
        stateMutability: 'payable',
        type: 'function',
    },
    
] as const;
