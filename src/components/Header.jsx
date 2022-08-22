import React, { PureComponent } from "react";
import "./Header.css";
import catImg from "../assets/cat.png";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src={catImg}
          width="32"
          height="32"
          alt=""
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
