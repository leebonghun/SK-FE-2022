import { A11yHidden } from './a11yHidden';

const metaConfig = {
  title: 'atomics/A11yHidden',
  component: A11yHidden,
};

export default metaConfig;

// 모든 스토리의 원형(템플릿)
const Template = (args) => (
  <div>
    <h1>접근성 있는 감춤 처리</h1>
    <A11yHidden {...args} />
    <p>동등한 정보를 제공해 차별하지 않음</p>
  </div>
);

// 스토리 마다 템플릿 복사 (베리에이션)
export const Hidden = Template.bind({});
Hidden.args = {
  children: 'Storybook을 활용한 CDD',
};

export const Visible = Template.bind({});
Visible.args = {
  hidden: false,
  children: 'Storybook을 활용한 CDD',
};
