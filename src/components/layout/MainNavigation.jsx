import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className = {classes.header}>
      {/* <div className = {classes.logo}>foodie</div> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Video</Link>
          </li>
          <li>
            <Link to="/fridge">Fridge</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
