import { NavLink } from "react-router-dom";
import {nav} from "./PageNav.module.css"
function PageNav() {
  // console.log(styles);
  return (
    <nav className={nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
