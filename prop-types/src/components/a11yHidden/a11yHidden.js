// 일반적인 CSS
// import './a11yHidden.css';
// 모듈 CSS (후처리)
import styles from './a11yHidden.module.css';
import * as cs from 'classnames';
import { bool, string, oneOfType, arrayOf, node, shape } from 'prop-types';

// 컴포넌트
export function A11yHidden({
  id, // required
  tag: Tag,
  className,
  top,
  right,
  focusable,
  external,
  style,
  ...restProps
}) {
  const classNames = cs(
    styles.container,
    {
      [styles.focusable]: focusable,
    },
    className
  );

  return (
    <Tag
      className={classNames}
      target={external ? '_blank' : null}
      rel={external ? 'noopener noreferrer' : null}
      style={{
        top: `${top}px`,
        right: `${right}px`,
        ...style,
      }}
      {...restProps}
    />
  );
}

// props 기본 값 설정
A11yHidden.defaultProps = {
  tag: 'span',
  className: '',
  top: 0,
  right: 0,
  focusable: false,
  external: false,
};

// props 타입 검사 설정
A11yHidden.propTypes = {
  detail: shape({
    ko: string,
    en: string,
    desc: string,
    display_criteria: arrayOf(arrayOf(string)),
  }).isRequired,
  /** 렌더링 할 요소 이름 또는 컴포넌트 참조 */
  tag: oneOfType([string, node]),
  /** 요소의 고유한 ID (필수) */
  id: string.isRequired,
  /** 요소에 초점 이동 시, 화면에 표시 됨 */
  focusable: bool,
  /** href 속성을 가진 요소가 외부 링크인 경우, 새 탭에서 열림 */
  external: bool,
  /** 요소 기본 스타일 외, 확장된 스타일 클래스 설정 */
  className: string,
};
