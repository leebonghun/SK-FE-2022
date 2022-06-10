import React, { memo } from 'react';

const Button = function (props) {
  return <button {...props} />;
};

// Button.displayName = 'Rutin';

export default memo(Button);
