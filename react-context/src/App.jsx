import './App.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Parent from './Parent';

import { ThemeContext, themeConfig } from './contexts/theme';

function App() {
  // useState()는 객체 또는 배열과 같은 객체 타입의 데이터 관리에 적합하지 않음
  // useReducer() 훅을 사용해 객체 또는 배열과 같은 복잡한 데이터 관리를 해야 함

  // 지연된 초기화
  const [lazyState] = useState(() => {
    const storageItemTheme = localStorage.getItem('theme');
    // const parsedValue = JSON.parse(storageItemTheme);
    // console.log(parsedValue);
    return storageItemTheme;
  });

  useEffect(() => {
    console.log(lazyState);
  }, [lazyState]);

  // 복합적인 상태인 경우 useState() 훅을 사용한다면 개별적으로 상태를 관리해야 한다.

  // { loading, error, data }
  // const [state, setState] = useState({ loading, error, data });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // Promise
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // Async Function
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1'
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(loading, error, data);

  // class : this.setState(newState[, callback])

  // functional :
  // const [state, setState] = React.useState(initialState);
  // React.useEffect(() => { callback }, [state]);

  // 테마 상태
  const [themeName, setThemeName] = useState('light');

  // 테마 상태가 변경되면? 사용자에게 알림 메시지를 표시합니다. (side effect)

  useLayoutEffect(
    /* 이펙트 함수(콜백) */
    () => {
      // console.log('effect function callback');
      const app = document.querySelector('.App');
      const noti = document.createElement('div');
      noti.textContent = `${themeName} 테마로 변경되었습니다.`;
      noti.style.cssText = 'color: #c6a024';
      app?.insertAdjacentElement('afterbegin', noti);

      // 이벤트 구독
      // event loop (web api => queue)
      console.log('구독');
      const clearTimeoutId = setTimeout(() => {
        console.log('interval');
        noti.parentNode?.removeChild(noti);
      }, 1000);

      // 클린업 (useEffect 훅의 클린업은 이펙트 함수가 반환하는 함수이다.)
      // 이벤트 구독 취소
      return () => {
        console.log('구독 취소');
        clearTimeout(clearTimeoutId);
      };
    },
    /* 종속(의존)성 배열: 조건 처리 */
    [themeName]
  );

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName,
        theme: themeConfig[themeName],
      }}
    >
      <div
        className="App"
        style={{
          minHeight: '100vh',
          background: themeConfig[themeName].background,
        }}
      >
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
