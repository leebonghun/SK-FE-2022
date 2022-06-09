import { StyledA11yHidden } from './a11yHidden.styled';

export default {
  title: 'atomics/A11yHidden',
  component: StyledA11yHidden,
};

// Base 스토리 내보내기
export const Base = (args) => (
  <StyledA11yHidden {...args}>CSS in JS 스타일링</StyledA11yHidden>
);

Base.args = {
  focusable: true,
};
