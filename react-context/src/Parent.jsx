import React, {
  useContext,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';

import { AppContext } from './contexts/app';
import { ThemeContext } from './contexts/theme';
import Child from './Child';
import Button from './Button';

const changeThemeButonStyle = {
  position: 'fixed',
  bottom: 30,
  right: 30,
};

// 클래스 컴포넌트
// class _Parent extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { themeName, setThemeName } = this.context;

//     const willAssignThemeName = themeName.includes('light') ? 'dark' : 'light';

//     return (
//       <div className="parent">
//         <button
//           type="button"
//           style={changeThemeButonStyle}
//           onClick={() => setThemeName(willAssignThemeName)}
//         >
//           {willAssignThemeName} 전환
//         </button>
//         <Child />
//       </div>
//     );
//   }
// }

// 함수형 컴포넌트
const Parent = () => {
  // 용도 1 DOM 노드 참조 (명령형 프로그래밍)
  const buttonRef = useRef(null); // { current: null }

  // 용도 2 컴포넌트 리-렌더링에 영향을 주지 않는 상태 활용
  const countRef = useRef(100);

  const [count, setCount] = useState(100);

  console.log('%cre-render', 'color: red; font-size: 30px');

  const { name } = useContext(AppContext);
  const { themeName, setThemeName } = useContext(ThemeContext);

  const willAssignThemeName = themeName.includes('light') ? 'dark' : 'light';

  const handleClick = useCallback(() => {
    countRef.current += 10;
    console.log(countRef.current);
  }, []);

  const handleClickMemo = useMemo(
    () => () => {
      countRef.current += 10;
      console.log(countRef.current);
    },
    []
  );

  // const memoizedValue = useMemo(() => {
  //   // 계산 비용이 많이 드는 결과 값을 기억
  //   return {
  //     a: 1,
  //     b: 100,
  //   };
  // }, []);

  // console.log(memoizedValue);

  // const MemoButton = useMemo(() => Button, []);

  return (
    <div className="parent">
      <Button onClick={handleClick}>ref update</Button>
      <button
        ref={buttonRef} /* { current: HTMLButtonElement } */
        type="button"
        style={changeThemeButonStyle}
        onClick={(e) => {
          console.log(`e.target`, e.target);
          console.log(`buttonRef`, buttonRef);
          setThemeName(willAssignThemeName);
          setCount((count) => count + 10);
        }}
      >
        {name} {willAssignThemeName} 전환
      </button>
      <Child />
    </div>
  );
};

export default Parent;
