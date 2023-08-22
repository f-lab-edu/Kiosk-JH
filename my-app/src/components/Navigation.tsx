import React from 'react';

const Navigation: React.FC = () => {
  const buttonStyle = {
    marginTop: '74px',
    marginLeft: '5px',
    width: '120px',
    height: '40px',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeigth: '500px',
    lineHeight: '24px',
    fontColor: '#000',
    backgroundColor: '#FFF1F2',
  };

  return (
    <div className='grid gap-x-4 grid-cols-3'>
      <button style={buttonStyle}>시즌 메뉴</button>
      <button style={buttonStyle}>커피</button>
      <button style={buttonStyle}>디저트</button>
    </div>
  );
}

export default Navigation;