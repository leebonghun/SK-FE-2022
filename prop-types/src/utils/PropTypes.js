import { typeIs, isBoolean, isString } from './typeIs';

export const PropTypes = {
  boolean(props, propName, componentName) {
    const value = props[propName];
    const valueType = typeIs(value);

    if (!isBoolean(value)) {
      throw new Error(
        `${componentName} 컴포넌트의 "${propName}" prop의 타입은 boolean으로 기대되나, 전달된 타입은 ${valueType}이므로 오류입니다.`
      );
    }
  },
  string(props, propName, componentName) {
    const value = props[propName];
    const valueType = typeIs(value);

    if (!isString(value)) {
      throw new Error(
        `${componentName} 컴포넌트의 "${propName}" prop의 타입은 string으로 기대되나, 전달된 타입은 ${valueType}이므로 오류입니다.`
      );
    }
  },
};
