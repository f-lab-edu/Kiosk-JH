import React from "react";
import { InputWithButton } from '@/components/Search';
import App from '@/components/Plus.js';

export default function Home() {
  return (
    <>
    <div className="w-[430px] h-[932px] bg-[#FFF] rounded-[0px] absolute mx-auto">
      <p className='mt-10 ml-5 text-2xl font-bold text-[#000]'>Todo List</p>
      <div className='mt-5 mx-5'>
        <InputWithButton />
      </div>
      <div className="absolute bottom-0 right-0 h-10 w-10 bg-[#0F172A] rounded-full flex items-center justify-center">
        <App />
      </div>
    </div>
    </>
  )
}
