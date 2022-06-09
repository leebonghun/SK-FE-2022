import { A11yHidden } from './a11yHidden';

const metaConfig = {
  title: 'atomics/A11yHidden',
  component: A11yHidden,
  argTypes: {
    top: {
      control: {
        type: 'range',
        min: 10,
        step: 10,
        max: 200,
      },
    },
    right: {
      control: {
        type: 'range',
        min: 10,
        step: 10,
        max: 200,
      },
    },
  },
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
export const Base = Template.bind({});
Base.args = {
  children: 'Storybook을 활용한 CDD',
};

export const FocusableLink = Template.bind({});
FocusableLink.args = {
  ...Base.args,
  tag: 'a',
  href: 'https://google.co.kr',
  children: 'Google',
  focusable: true,
};

export const FocusableExternalLink = Template.bind({});
FocusableExternalLink.args = {
  ...FocusableLink.args,
  external: true,
};

export const Layout = Template.bind({});
Layout.args = {
  ...FocusableLink.args,
  className: 'layout--fixed',
  top: 30,
  right: 40,
};

export const ExtendLayout = Template.bind({});
ExtendLayout.args = {
  ...Layout.args,
  style: {
    color: 'darkred',
    textDecoration: 'none',
  },
};
