import React from 'react';

// 일반적인 CSS
// import './a11yHidden.css';

// 모듈 CSS (후처리)
import styles from './a11yHidden.module.css';

export function A11yHidden({
  tag: Tag = 'span',
  className = '',
  top = 0,
  right = 0,
  focusable = false,
  external = false,
  style,
  ...restProps
}) {
  const classNames = `${styles.container} ${
    focusable ? styles.focusable : ''
  } ${className}`.trim();

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
