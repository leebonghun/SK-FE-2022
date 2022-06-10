import React from 'react';
import { ThemeContext } from './contexts/theme';
import { AppContext } from './main';

export default function Child({ children }) {
  // 훅은 함수 컴포넌트 안에서만 사용 가능
  // 클래스 컴포넌트는 훅을 사용할 수 없습니다.
  const value = React.useContext(AppContext);
  const {
    theme: { color, background },
  } = React.useContext(ThemeContext);

  return (
    <div
      className="child"
      style={{
        background,
        color,
      }}
    >
      {value.name}
    </div>
  );
}
