import React from "react";
import classNames from "classnames";
class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.outline ? "button button--outline" : "button"}
      >
        {this.props.children}
      </button>
    );
  }
}

// function Button() {
//   return <button>Hello</button>;
// }
export default Button;
