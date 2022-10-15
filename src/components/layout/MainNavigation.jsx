import { Link } from "react-router-dom";

import './MainNavigation.css'


function MainNavigation() {
  var percentage = 50;
  const liStyle = {height : percentage + "%"};

  return (
    <div className="food-meter">
      <Link to="/fridge">
          <div className="circle">
            <h2 className="circle-text">{percentage}</h2>
            <div className="box" style={liStyle}>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MainNavigation;
