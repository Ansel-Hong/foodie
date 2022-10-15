import { Link } from "react-router-dom";
import './MainNavigation.css'

function BottomNav() {
  return (
    <footer className= "footer">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item"><Link to="/bookmark"><i className="bi bi-bookmark"></i></Link></li>
          <li className="nav-item"><Link to="/"><i className="bi bi-film"></i></Link></li>
          <li className="nav-item"><Link to="/cart"><i className="bi bi-cart"></i></Link></li>
        </ul>
    </footer>
  );
}

export default BottomNav;
