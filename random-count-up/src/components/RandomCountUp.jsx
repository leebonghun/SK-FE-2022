import { Component } from 'react';
import { getRandomMinMax } from '../utils';

const DOCUMENT_TITLE = document.title;

const completedStyle = {
  animationName: 'none',
};

class RandomCountUp extends Component {
  // 라이프 사이클 메서드 [1]
  // 컴포넌트가 생성될 때 1회 실행
  constructor(props) {
    super(props);

    // 컴포넌트 상태 선언
    this.state = {
      count: props.count ?? 0,
      step: props.step ?? 1,
      target: getRandomMinMax(40, 80),
    };

    // 클래스 컴포넌트의 인스턴스 메서드의 this 다시 연결(bind)
    this.handleClick = this.handleClick.bind(this);
  }

  // 라이프 사이클 메서드 [2]
  // 컴포넌트가 생성될 때, 업데이트 할 때 모두 실행
  // props에 의해 파생된(derived) 상태 값 믹스인(합성)
  static getDerivedStateFromProps(props, { count, target }) {
    return {
      isComplete: count >= target,
    };
  }

  // 라이프 사이클 메서드 [6]
  // 컴포넌트의 렌더링 유무를 제어할 때 사용
  // 오직 성능 최적화 목적으로 사용
  // shouldComponentUpdate

  // 라이프 사이클 메서드 [3]
  // 컴포넌트가 생성될 때, 업데이트 할 때 모두 실행
  render() {
    const { count, isComplete } = this.state;

    return (
      <div className="random-count-up">
        <button type="button" onClick={this.handleClick}>
          increment count
        </button>
        <output style={isComplete ? completedStyle : null}>{count}</output>
      </div>
    );
  }

  // 라이프 사이클 메서드 [7]
  // getSnapshotBeforeUpdate

  // 라이프 사이클 메서드 [4]
  // 컴포넌트가 실제 DOM에 마운트 된 이후, 1회 실행(콜백)
  componentDidMount() {
    document.title = `(${this.state.target}) ${DOCUMENT_TITLE}`;
  }

  // 라이프 사이클 메서드 [5]
  // 컴포넌트가 업데이트(re-render) 될 때 마다 실행
  // 업데이트 내용이 DOM에 패치(patch)될 때 마다
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { target, isComplete } = this.state;
  }

  // 라이프 사이클 메서드 [8]
  // 컴포넌트가 언마운트 되기 직전에 수행
  // componentWillUnmount

  // 이벤트 핸들러
  // 클래스 컴포넌트의 인스턴스 메서드
  handleClick() {
    this.setState(
      ({ count, step }) => ({
        count: count + step,
      }),
      () => {
        // console.log('컴포넌트 상태 업데이트가 보장 됨');
        const { isComplete, target } = this.state;

        if (isComplete) {
          this.setState({
            count: target,
          });
        }
      }
    );
  }
}

export default RandomCountUp;