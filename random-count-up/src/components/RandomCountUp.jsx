import { Component } from 'react';
import { getRandomMinMax } from '../utils';

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
    // ※ React 컴포넌트 상태 업데이트에 대해
    // immutable
    // mutation
    // this.state.count = this.state.count + this.state.step;

    // this.state.count = 0

    const { count, step } = this.state;

    console.log('setState() 이전: ', count);

    this.setState(
      {
        count: count + step,
      },
      () => console.log('setState() callback: ', this.state.count)
    );

    console.log('setState() 이후: ', this.state.count);
  }

  //라이프 사이클 메서드 [3]
  //컴포넌트가 생성될 때, 업데이트 할 때 모두 실행
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
}

export default RandomCountUp;
