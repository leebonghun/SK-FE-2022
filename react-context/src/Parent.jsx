import React, { Component, useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import { AppContext } from './main';
import Child from './Child';

// export default class Parent extends Component {
// static contextType = AppContext;

//   render() {
//     return (
//       <div className="parent">
//         <Child />
//       </div>
//     );
//   }
// }

const Parent = () => {
  const { name } = useContext(AppContext);
  const { themeName, setThemeName } = useContext(ThemeContext);

  const willAssignThemeName = themeName.includes('light') ? 'dark' : 'light';

  // const handleChangeTheme = () => {
  //   setThemeName(willAssignThemeName);
  // };

  return (
    <div className="parent">
      <button type="button" onClick={() => setThemeName(willAssignThemeName)}>
        {willAssignThemeName} 전환
      </button>
      <Child />
    </div>
  );
};

export default Parent;
