import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from "sweetalert";

const Navbar = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        swal({
            title: "Cierre de sesión",
            text: "Hasta luego",
            icon: "success",
            button: false,
            timer: 2000,
          });
          localStorage.removeItem("token");
          localStorage.removeItem("mail");
          localStorage.removeItem("id");
          navigate("/");
        };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <strong onClick={cerrarSesion} className="nav-link" style={{cursor: 'pointer'}}>Salir</strong>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"#"} className="nav-link" data-widget="fullscreen" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;