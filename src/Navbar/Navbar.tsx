import React from 'react'
import NavStyled from './Navbar.styled';
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <NavStyled>
          <h2 className="Heading"> Note APP </h2>
          <nav className="links">
            <Link to="/" className="button-link">
              User List
            </Link>
            <Link to="/NewNotes" className="button-link">
              Add New Notes
            </Link>
          </nav>
        </NavStyled>
      );
}

export default Navbar