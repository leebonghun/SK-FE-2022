import { render } from '@testing-library/react';
import { Emoji } from './emoji';

describe('Emoji 컴포넌트', () => {
  let figure = null;
  let image = null;
  const props = { image: 'oops.png', label: '이봐!! 오류가 발생했다구!' };

  beforeEach(() => {
    const { getByRole } = render(<Emoji {...props} />);
    figure = getByRole('figure');
    image = getByRole('img');
  });

  test('래퍼 요소는 figure이고, 내부에는 img 요소가 포함되어 있다.', () => {
    expect(figure).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(figure.firstElementChild).toEqual(image);
  });

  test('figure 요소는 `emoji` 클래스 이름을 포함한다.', () => {
    expect(figure).toHaveClass('emoji');
  });

  test('img 요소는 src, alt 속성 값을 가지며, src 속성 값은 public 에셋 이어야 한다.', () => {
    expect(image).toHaveAttribute(
      'src',
      `${process.env.PUBLIC_URL}/assets/${props.image}`
    );
    expect(image).toHaveAttribute('alt');
  });

  test('img 요소의 alt, title 값은 동일해야 한다.', () => {
    expect(image.getAttribute('alt')).toBe(image.getAttribute('title'));
  });

  test('figure, img 요소 모두 화면에 표시되어야 한다.', () => {
    expect(figure).toBeVisible();
    expect(image).toBeVisible();
  });
});
