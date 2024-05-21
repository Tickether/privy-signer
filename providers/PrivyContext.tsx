'use client'


import { PrivyProvider } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'


type Props = {
    children: ReactNode,
}

export function PrivyContext ({ children }: Props) {

    const router = useRouter()

    return (
        <>
            <PrivyProvider
                appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
                onSuccess={() => router.push('/dashboard')}
                config={{
                    /* Replace this with your desired login methods */
                    loginMethods: ['email', 'google'],
                    /* Replace this with your desired appearance configuration */
                    appearance: {
                        theme: 'light',
                        accentColor: '#0C3FFF',
                        logo: '',
                        showWalletLoginFirst: false,
                    },
                    embeddedWallets: {
                        createOnLogin: 'users-without-wallets',
                        noPromptOnSignature: true
                    },    
                }}
            >
                {children}
            </PrivyProvider>
        </>
    )
}