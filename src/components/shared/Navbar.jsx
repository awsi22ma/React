import { Link ,NavLink} from "react-router-dom";
import './Navbar.css';

const Navbar =()=> {
    return(
        <header>
            <nav>
                <div className="container">
                    <ul className="menu">
                    <li className="logo">
                    
                        <NavLink to="/">
                             KFC
                        </NavLink>
                    </li>
                    <li className='toggle'>
              <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
              </label>
            </li>
                    
                    <li className="menu-item">
                        <NavLink to="/">Start</NavLink>
                    </li>

                    <li className="menu-item">
                        <NavLink to="/mat">Many</NavLink>
                    </li>

                    <li className="menu-item">
                        <NavLink to="/kontakt">Kontakt</NavLink>
                    </li>

                    <li className="menu-item">
                        <NavLink to="/om oss">Om Oss</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar