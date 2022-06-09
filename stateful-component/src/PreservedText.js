import React from 'react';

function PreservedText({ data }, ref) {
  console.log(ref);
  return (
    <div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <pre ref={ref}>{JSON.stringify(data, null, 2)}</pre>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  );
}

// HOF 고차 함수
// React.forwardRef( )  ===> HOC
export default React.forwardRef(PreservedText);
