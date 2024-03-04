import { memo } from "react";
import logo from "../assets/logo.jpg";

const Logo = memo(() => {
  return (
    <div id="title">
      <img src={logo} alt="" />
      <h1>REACTFOOD</h1>
    </div>
  );
});

export default Logo;
