'use client'


import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import Image from 'next/image';

export function Login() {
    const router = useRouter()
    const { login, ready, authenticated } = usePrivy()

    const Login = async () => {
        try {
            if (authenticated) {
                router.push('/dashboard')
            }
            if (!authenticated) {
                login()
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <Button onClick={Login} className='w-96 max-md:w-80 h-12 rounded-xl bg-white text-black cursor-pointer text-lg font-bold z-20 hover:bg-green-400'>
            Get started
        </Button>
    );
}