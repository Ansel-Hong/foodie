import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

function BottomNav() {
  return (
    <footer className = {classes.footer}>
      <nav>
        <ul>
          <li>
            <Link to="/bookmark">Bookmark</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default BottomNav;
