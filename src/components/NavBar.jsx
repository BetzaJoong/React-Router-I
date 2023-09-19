import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";

export default function Navegador() {
    return (
        <Navbar bg="danger" variant="dark" expand="lg" className="fixed-top">
            <Container>
                <div className="d-flex justify-content-between w-100">
                    <div className="d-flex">
                        <NavLink to="/" className="nav-link nav-link-custom" activeClassName="active">
                            Home 🏠
                        </NavLink>
                        <NavLink to="/contacto" className="nav-link nav-link-custom" activeClassName="active">
                            Contacto 📝
                        </NavLink>
                        <NavLink to="/NotFound" className="nav-link nav-link-custom" activeClassName="active">
                            Sucursales 🛒
                        </NavLink>
                    </div>
                    <NavLink to="/sobre nosotros" className="nav-link nav-link-custom" activeClassName="active">
                        <Navbar.Brand>
                            Happy Cake <span role="img" aria-label="cake">🍰</span>
                        </Navbar.Brand>
                    </NavLink>
                </div>
            </Container>
        </Navbar>
    );
}

