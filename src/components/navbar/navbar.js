import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink as Link } from "react-router-dom";
import './navbar.css';
import SearchBar from '../searchbar/searchbar';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
            <img
                src="images/logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
            />
        </Navbar.Brand>
        <SearchBar />
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='links'>
          <Nav className="me-auto">
            <Link to="/home" className="navlink">Home</Link>
            <Link to="/result" className="navlink">Recipes</Link>
            <Link to="/account" className="navlink">Account</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;