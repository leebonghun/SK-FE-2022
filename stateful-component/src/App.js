import './App.css';
import React, { createRef } from 'react';
import { ReactComponent as Bricks } from './bricks.svg';
import PreservedText from './PreservedText';

class App extends React.Component {
  state = {
    loading: true,
    error: null,
    data: null,
  };

  preservedRef = createRef(null); // { current: null }

  handleAssignStyle = (e) => {
    // DOM 요소 접근, 조작 (DOM Script)
    // 명령형 프로그래밍 코드
    // jQuery, GSAP, anime.js
    const { current: preElement } = this.preservedRef;

    console.log(
      '하위 컴포넌트에 감싸여진 pre 요소를 부모 컴포넌트가 참조 할 수 있을까?'
    );
    console.log(preElement);

    preElement.setAttribute('tabindex', 0);
    preElement.style.cssText = `
      padding: 2rem;
    `;
    preElement.focus();
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return (
        <figure aria-label="로딩 중...." title="로딩 중....">
          <Bricks
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              height: 100,
              widht: 'auto',
            }}
          />
        </figure>
      );
    }

    if (error) {
      return <div role="alert">{error.message}</div>;
    }

    return (
      <div className="App">
        <button onClick={this.handleAssignStyle}>pre style</button>
        <PreservedText ref={this.preservedRef} data={data} />
      </div>
    );
  }

  // Async Function
  async fetchDataAsync() {
    try {
      const response = await fetch(process.env.REACT_APP_ENDPOINT);
      const json = await response.json();
      this.setState({
        data: json,
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  // Promise
  fetchData() {
    fetch(process.env.REACT_APP_ENDPOINT)
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          data: json,
        })
      )
      .catch((error) => {
        this.setState({
          error,
        });
      })
      .finally(() =>
        this.setState({
          loading: false,
        })
      );
  }

  subscribe() {
    const clearIntervalId = setInterval(() => {
      console.log('subscription');
    }, 1000);

    // cleanup
    return () => clearInterval(clearIntervalId);
  }

  unsubscribe = null;

  componentDidMount() {
    this.fetchDataAsync();
    // 구독
    this.unsubscribe = this.subscribe();
  }

  componentDidUpdate(prevProps, prevState) {
    // 구독 취소
    this.unsubscribe();
    // 재 구독
    this.unsubscribe = this.subscribe();
  }

  componentWillUnmount() {
    // 취소
    this.unsubscribe();
  }
}

export default App;