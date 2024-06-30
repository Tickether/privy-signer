import { Login } from "@/components/login/Login";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#3B008E]">
      <div>
        <Image
          src='./logo.svg'
          width={230}
          height={230}
          alt='logo'
        />
      </div>
      <div>
        <Image
          src='./brunch.svg'
          width={300}
          height={300}
          alt='brunch'
        />
      </div>
      <div className='flex flex-col gap-6 text-white text-center w-72'>
        <p className='text-3xl font-extrabold'>Fund the future</p>
        <p className='text-base font-normal'>Brunch is a cool new way to make creative and impactful projects happen</p>
      </div>
      <div>
        <Login/>
      </div>
    </main>
  );
}
