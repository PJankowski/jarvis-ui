import React from 'react';
import classnames from 'classnames';

function Button({ text, handler, pin, status }) {
  const classes = classnames({
    isOff: status === "off"
  });
  
  function func() {
    handler(pin);
  }

  return (
    <button className={classes} onClick={func}>{text}</button>
  )
}

export default Button;