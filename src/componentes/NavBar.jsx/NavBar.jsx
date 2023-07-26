import "./navbar.css";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="NavBar-logo">
          <div> 
          <Link to="/" >
            <h3>Ecommerce</h3>
          </Link>
          </div> 
          <div className="Categorias">
            <div className="Link">
            <NavLink
              to={`/category/celular`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
                
              Celulares
            </NavLink>
            </div>
            <div>
            <NavLink
              to={`/category/tablet`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              Tabletas
            </NavLink>
            </div>
            <div>
            <NavLink
              to={`/category/notebook`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              Notebook
            </NavLink>
            </div>
          </div>
          <CartWidget />
        </div>
      </div>
    </>
  );
};
