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

  handleClick() {
    // setState() 방법 1: 객체 합성
    // const { count, step } = this.state;
    // this.setState({
    //   count: count + step,
    // });

    // setState() 방법 2: 콜백 활용
    /* 이전 상태 { count, step, target, isComplete } */
    // 업데이트 상태 반환
    this.setState(({ count, step }) => ({
      count: count + step,
    }));
  }

  // 라이프 사이클 메서드 [6]
  // 컴포넌트의 렌더링 유무를 제어할 때 사용
  // 오직 성능 최적화 목적으로 사용
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isComplete) {
      return false;
    } else {
      return true;
    }
  }

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
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // UI 비교
    return {
      distanceY: 20,
    }; // {}, [], ...
  }

  // 라이프 사이클 메서드 [4]
  // 컴포넌트가 실제 DOM에 마운트 된 이후, 1회 실행(콜백)
  componentDidMount() {
    document.title = `(${this.state.target}) ${DOCUMENT_TITLE}`;
    // console.log('component did mount');
  }

  // 라이프 사이클 메서드 [5]
  // 컴포넌트가 업데이트(re-render) 될 때 마다 실행
  // 업데이트 내용이 DOM에 패치(patch)될 때 마다
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('이전 count 상태', prevState.count);
    // console.log('현재 count 상태', this.state.count);
    // console.log('component did update');

    const { target, isComplete } = this.state;

    if (isComplete) {
      console.log('completed');
      // 목표 값으로 상태 업데이트
      // this.setState({
      //   count: target,
      // });
    }
  }

  // 라이프 사이클 메서드 [8]
  // 컴포넌트가 언마운트 되기 직전에 수행
  componentWillUnmount() {
    console.log('컴포넌트가 언마운트 되기 직전에 수행');
    // 구독, 취소
    // jQuery 플러그인 연결
    // 연결된 플러그인 -> DOM 노드에 연결
    // 페이지 전환 -> DOM 노드는 문서에서 존재하지 않음
  }
}

export default RandomCountUp;
