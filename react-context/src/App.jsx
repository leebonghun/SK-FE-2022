import './App.css';
import React, { useState } from 'react';
import logo from './logo.svg';
import Parent from './Parent';

import { ThemeContext, themeConfig } from './contexts/theme';

function App() {
  // useState()는 객체 또는 배열과 같은 객체 타입의 데이터 관리에 적합하지 않음
  // useReducer() 훅을 사용해 객체 또는 배열과 같은 복잡한 데이터 관리를 해야 함

  const [themeName, setThemeName] = useState('light');

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName,
        theme: themeConfig[themeName],
      }}
    >
      <div className="App">
        <Parent />
      </div>
    </ThemeContext.Provider>
  );
}

// class App extends React.Component {
//   state = {
//     name: 'App',
//   };

//   handleChangeTheme = () => {
//     console.log('change theme name');
//   }

//   render() {
//     return (
//         <div className="App">
//           <Parent />
//         </div>
//     );
//   }
// }

export default App;
