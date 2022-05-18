import React from "react";
import "./Topbar.css";

export default (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md nav-rosa">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        (LOGO)
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">Sobre a Pousada</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Area do Usuario
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">Buscar Quartos</a></li>
                                    <li><a className="dropdown-item" href="#">Listar Reservas</a></li>
                                    <li><a className="dropdown-item" href="#">Registrar</a></li>
                                    <li><a className="dropdown-item" href="#">Alterar Senha</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Area do Admin
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                    <li><a className="dropdown-item" href="#">Criar Quarto</a></li>
                                    <li><a className="dropdown-item" href="#">Listar Quartos</a></li>
                                    <li><a className="dropdown-item" href="#">Listar Reservas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
