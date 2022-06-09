import React from 'react';

// 일반적인 CSS
// import './a11yHidden.css';

// 모듈 CSS (후처리)
import styles from './a11yHidden.module.css';

export function A11yHidden({ tag: Tag = 'span', focusable, ...restProps }) {
  const classNames = `${styles.container} ${
    focusable ? styles.focusable : ''
  }`.trim();

  return <Tag className={classNames} {...restProps} />;
}
