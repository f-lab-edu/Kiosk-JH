import DrinkList from './DrinkList';
import React from 'react';
import productList from '@/pages/productList.json'

const MenuButton = () => {
  const buttonStyle = {
    width: '110px',
    height: '110px',
    borderRadius: '10px',
  };

  return (
    <>
    <div className='grid gap-x-23 gap-y-59 grid-cols-3'>
    <button style={buttonStyle}>

    </button>
    </div>
    </>
  )
}