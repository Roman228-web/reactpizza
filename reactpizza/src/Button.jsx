import React from "react";
import classNames from "classnames";
function Button(props) {
  return (
    <button
      className={classNames("button", {
        "button--outline": props.outline,
      })}
    >
      {props.children}
    </button>
  );
}
// function Button() {
//   return <button>Hello</button>;
// }
export default Button;
