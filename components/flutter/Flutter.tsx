import { Logout } from "@/components/logout/Logout"



export function Flutter() {

    
    return (
        <main className='fixed flex flex-col z-20 bg-gray-900/25 w-screen h-screen items-center justify-center top-0 left-0 right-0 bottom-0 backdrop-blur-[0.666px]'>

            <div className='w-full h-full relative'>
                <div className="absolute cursor-pointer p-5 top-0 right-0">
                    <Logout/>
                </div>
                <div className='h-full w-full'>
                    <iframe
                        src={
                            `
                                https://useaccrue.com/hosted/ramp?key=CSHRMP-PUBK_mO86nNyK8gOwP5Ho&paymentType=deposit&address=0xdead&coin=USDC&network=BASE&reference=ref&isWalletContext=false
                            `
                        }
                        title="cashRamp"
                        className='w-full h-full'
                    ></iframe>
                </div>
            </div>

        </main>
    );
}
