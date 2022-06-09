export function typeIs(data) {
  // 메서드 빌려쓰기 패턴
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

export const isObject = (data) => typeIs(data) === 'object';

export const isArray = (data) => typeIs(data) === 'array';

export const isNull = (data) => typeIs(data) === 'null';

export const isString = (data) => typeIs(data) === 'string';
