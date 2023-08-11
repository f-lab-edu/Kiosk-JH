import React from 'react';

function Navigation() {
  const buttonStyle = {
    marginTop: '82px',
    marginLeft: '37px',
    width: '120px',    // 버튼의 너비 설정
    height: '40px',    // 버튼의 높이 설정
    fontSize: '14px',  // 버튼의 폰트 크기 설정
    fontWeigth: '500px',
    fontHeight: '24px',
    // 추가적인 스타일 속성들...
  };

  return (
    <div>
      <button style={buttonStyle}>시즌 메뉴</button>
    </div>
  );
}

export default Navigation;