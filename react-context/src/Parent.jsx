import React, { Component, useContext } from 'react';

import { AppContext } from './contexts/app';
import { ThemeContext } from './contexts/theme';
import Child from './Child';

const changeThemeButonStyle = {
  position: 'fixed',
  bottom: 30,
  right: 30,
};

// 클래스 컴포넌트
class _Parent extends Component {
  static contextType = ThemeContext;

  render() {
    const { themeName, setThemeName } = this.context;

    const willAssignThemeName = themeName.includes('light') ? 'dark' : 'light';

    return (
      <div className="parent">
        <button
          type="button"
          style={changeThemeButonStyle}
          onClick={() => setThemeName(willAssignThemeName)}
        >
          {willAssignThemeName} 전환
        </button>
        <Child />
      </div>
    );
  }
}

// 함수형 컴포넌트
const Parent = () => {
  const { name } = useContext(AppContext);
  const { themeName, setThemeName } = useContext(ThemeContext);

  const willAssignThemeName = themeName.includes('light') ? 'dark' : 'light';

  return (
    <div className="parent">
      <button
        type="button"
        style={changeThemeButonStyle}
        onClick={() => setThemeName(willAssignThemeName)}
      >
        {willAssignThemeName} 전환
      </button>
      <Child />
    </div>
  );
};

export default _Parent;
