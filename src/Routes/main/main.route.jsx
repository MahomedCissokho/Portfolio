import { Link, Outlet } from "react-router-dom"
import './main.route.css';

const MainRoute = () => {
    return (
      <>
        <div className="container">
          <div className="content logo">
            <span>Ciisco</span>
            <span>.</span>
          </div>
            <div className="content">
                <Link to="/" >Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <Outlet />
      </>
    );
}

export default MainRoute;