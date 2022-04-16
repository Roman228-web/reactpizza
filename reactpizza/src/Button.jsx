import React from "react";
class Button extends React.Component {
  render() {
    return <button className="button">{this.props.children}</button>;
  }
}
// function Button() {
//   return <button>Hello</button>;
// }
export default Button;
