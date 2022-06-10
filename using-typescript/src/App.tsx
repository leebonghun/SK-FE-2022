import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// props 타입 시스템
interface AppProps {
  /** 카운트 초깃값 */
  count: number;
  /** 카운트 증가 값 */
  step: number;
  /** 나머지 props */
  [key: string]: any;
}

// props 기본 값
const defaultProps = {
  count: 0,
  step: 1,
};

function App({
  count: initialCount,
  step,
  ...restProps
}: AppProps): JSX.Element {
  // state React hook
  const [count, setCount] = useState(initialCount);

  return (
    <div className="App" {...restProps}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((count) => count + step)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

App.defaultProps = defaultProps;

export default App;
