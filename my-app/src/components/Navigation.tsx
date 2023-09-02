import React from 'react';

const Navigation: React.FC = () => {
  return (
    <button className='w-120 h-40 bg-#FFF1F2 text-black text-sm grid gap-x-4 grid-cols-3'>
      <div>시즌 메뉴</div>
      <div>커피</div>
      <div>디저트</div>
    </button>
  )
};

export default Navigation;