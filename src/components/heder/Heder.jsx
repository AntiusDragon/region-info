import style from "./Header.module.css";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export function Hewder() {
  return (
    <header>
      <h1>Where in the world?</h1>
      <div>
        <FaRegMoon /> Dark Mode
      </div>
      {/* <div>
        <FaRegSun /> Wihite Mode
      </div> */}
    </header>
  );
}
