import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height="30px" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home#Services">Services</Nav.Link>
            <Nav.Link href="Home#Experts">Expert</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">
              Abouth
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
