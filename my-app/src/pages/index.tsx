import React from "react";
import { InputWithButton } from '@/components/Search';
import { DialogDemo } from '@/components/DialogDemo';
import { useState } from 'react';

export default function Home() {
  const [artists, setArtists] = useState<{ id: number; name: string; }[]>([]);

  const handleAddTodo = (newTodo: { id: number; name: string; }) => {
    setArtists([...artists, newTodo]);
  };

  return (
    <>
    <div className="max-w-[430px] p-4 h-screen bg-white relative mx-auto">
      <p className='ml-5 text-2xl font-bold text-slate-800'>Todo List</p>
      <div className='mt-5 mx-5'>
        <InputWithButton />
      </div>
      <div className="absolute bottom-4 right-4 h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center">
        <DialogDemo onAddTodo={handleAddTodo} artists={artists} setArtists={setArtists} />
      </div>
      <ul>
          {artists.map(artist => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
    </div>
    </>
  )
}
