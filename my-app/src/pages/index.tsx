import React from "react";
import { InputWithButton } from '@/components/Search';
import { PlusIcon } from '@/components/Plus';

export default function Home() {
  return (
    <>
    <div className="max-w-[430px] p-4 h-screen bg-white relative mx-auto">
      <p className='ml-5 text-2xl font-bold text-slate-800'>Todo List</p>
      <div className='mt-5 mx-5'>
        <InputWithButton />
      </div>
      <div className="absolute bottom-4 right-4 h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center">
        <PlusIcon />
      </div>
    </div>
    </>
  )
}
