import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
     
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
     
    </div>
  );
};
export default Home;
