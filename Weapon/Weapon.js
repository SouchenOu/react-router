import React    from "react";
import template from "./Weapon.jsx";

class Weapon extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Weapon;
