import { Emoji, A11yHidden } from 'components';

export default function App() {
  return (
    <div className="container">
      <h1>Banner 컴포넌트가 이 곳에 위치해야 합니다.</h1>
      <Emoji image="react-atom.png" label="React Atom" />

      <A11yHidden tag="button" focusable>
        Banner Content
      </A11yHidden>
    </div>
  );
}
