import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logo' src="./img/logo.png" alt="Logo Marolio" />
      </Link>

        <nav>
            <ul>

                <li>
                  <NavLink className="miBtn" to="/categoria/2">
                    Lacteos
                  </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" to="/categoria/3">
                    Almacen
                  </NavLink>
                </li>

            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar