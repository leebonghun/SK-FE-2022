/* eslint-disable no-unused-vars */

// import db from 'api/db.json';
// import { createElement } from 'react';
import { Fragment } from 'react';
import { EmojiOops, PrettyPrintCode } from 'components';
import { isObject, isArray, isString, typeIs } from 'utils';

/* -------------------------------------------------------------------------- */

let error = null;

// 오류 메시지를 포함한 객체를 추가해보세요.
error = {
  message: 'React 앱을 렌더링하는데 실패했습니다.',
  log() {
    console.error(this.message);
  },
};

/* -------------------------------------------------------------------------- */

export const ConditionalRendering = () => {
  // if (error === null || error === undefined) {
  //   console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');
  // }

  // null 병합 연산자 활용
  error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

  // if (error) {
  //   if (typeof error.log === 'function') {
  //     error.log();
  //   }
  // }

  // error && typeof error.log === 'function' && error.log();

  error?.log?.();

  // JSX 조건부 렌더링: if 문
  // 오류가 존재하면 렌더링 되도록 코드를 작성합니다.
  // if (error) {
  //   const displayErrorState = (
  //     <div className="container">
  //       <h1 className="headline">
  //         {/* 오류 메시지가 출력되도록 코드를 변경합니다. */}
  //         <EmojiOops height={200} />
  //         {error?.message}
  //       </h1>
  //     </div>
  //   );

  //   return displayErrorState;
  // }

  // JSX ({ expression })
  return (
    <div className="container">
      <h1 className="headline">
        {!error ? (
          'React 조건부 렌더링'
        ) : (
          <>
            <EmojiOops height={200} />
            {error.message}
          </>
        )}
      </h1>
      {/* {!error ? <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p> : null} */}
      {!error && <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p>}
    </div>
  );
};

/* -------------------------------------------------------------------------- */

// `api/db.json` 데이터에서 `navigation.items` 데이터를 화면에 출력해보세요.
// `list` 매개 변수를 순환해 아이템 리스트를 반환하는 `renderList` 함수를 만들어 활용해봅니다.

const db = require('api/db.json');

const {
  navigation: { items: list },
} = db;

const renderList = (list) => {
  const renderList = list.map(({ link, text }) => (
    <li key={link}>
      <a href={link}>{text}</a>
    </li>
  ));

  return renderList;
  // return list.map(({ link, text }) => {
  //   return createElement('li', {
  //     key: link,
  //     children: createElement('a', {
  //       href: link,
  //       children: text,
  //     }),
  //   });
  // });
};

export const ListRedering = () => {
  // React 훅 (함수형 컴포넌트 내부)
  // 사이드 이펙트
  // 데이터 요청 → 데이터 패치
  return (
    <div className="container">
      <h1 className="headline">React 리스트 렌더링 (배열)</h1>

      {/* 배열 리스트 렌더링 */}
      <nav className="globalNavigation">
        {/* 웹 표준을 준수해 비순차 목록(ul)을 화면에 출력해봅니다. */}
        {/* renderList(list) 함수를 실행해 리스트 렌더링 처리해봅니다. */}
        {/* {renderList(list)} */}
        {list.map(({ link, text }) => (
          <li key={link}>
            <a href={link}>{text}</a>
          </li>
        ))}
        {/* <ul>
          <li>리스트를 렌더링 해보세요.</li>
        </ul> */}
      </nav>

      {/* 객체 리스트 렌더링 */}
      <dl className="descriptionList">
        {Object.entries(db).map(([key, value]) => {
          return (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>
                {isString(value) ? value : <PrettyPrintCode code={value} />}
              </dd>
            </Fragment>
          );
        })}
        {/* 웹 표준을 준수해 설명 목록을 화면에 출력해봅니다. */}
        {/* `db` 객체의 "속성", "값" 쌍을 순환하여 리스트 렌더링 해보세요. */}
        {/* 값의 유형이 객체 또는 배열인 경우, 코드가 화면에 출력되도록 설정합니다. */}
        {/* `isArray`, `isObject` 유틸리티 함수를 만들어 활용하세요. */}
        {/* 코드를 화면에 출력할 때는 <PrettyPrintCode /> 컴포넌트를 활용합니다. (`code` 속성) */}
        {/* <PrettyPrintCode code={db} /> */}
      </dl>
    </div>
  );
};
