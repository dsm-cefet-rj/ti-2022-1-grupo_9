import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/img/villa-terracotta-logo-editado.png";

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ok: "" }
        this.atualizar = this.atualizar.bind(this);
    }

    atualizar() {
        this.setState({ ok: "" });
    }

    render() {
        return (
            <div id="topbar">
                <nav className="navbar navbar-expand-md nav-rosa">
                    <div className="container-fluid">
                        <img src={imgLogo} alt="Logo" className="logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item" role="button">
                                    <Link to="/">
                                        <a className="nav-link" aria-current="page">Sobre a Pousada</a>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Area do Usuario
                                    </a>
                                    <ul role="button" className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        {
                                            !localStorage.getItem("logado")
                                            &&
                                            <Link to="usuario/login">
                                                <li><a onClick={this.atualizar} className="dropdown-item">Login</a></li>
                                            </Link>
                                        }
                                        {
                                            localStorage.getItem("logado")
                                            &&
                                            <li><a onClick={() => { localStorage.removeItem("logado"); this.atualizar() }} className="dropdown-item" >Deslogar</a></li>
                                        }

                                        {
                                            localStorage.getItem("logado")
                                            &&
                                            <Link to="cliente/buscar-quartos">
                                                <li><a onClick={this.atualizar} className="dropdown-item">Buscar Quartos</a></li>
                                            </Link>
                                        }
                                        {
                                            localStorage.getItem("logado")
                                            &&
                                            <Link to="cliente/listar-reservas">
                                                <li><a onClick={this.atualizar} className="dropdown-item" >Listar Reservas</a></li>
                                            </Link>
                                        }

                                        {!localStorage.getItem("logado") &&
                                            <Link to="usuario/registrar">
                                                <li><a onClick={this.atualizar} className="dropdown-item" >Registrar</a></li>
                                            </Link>
                                        }
                                        {localStorage.getItem("logado") &&
                                            <Link to="usuario/alterar-senha">
                                                <li><a onClick={this.atualizar} className="dropdown-item" >Alterar Senha</a></li>
                                            </Link>
                                        }

                                    </ul>
                                </li>
                                {
                                    JSON.parse(localStorage.getItem("logado"))?.role === "admin" &&
                                    this.atualizar
                                    &&
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Area do Admin
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                            <Link to="admin/criar-quartos">
                                                <li><a onClick={this.atualizar} className="dropdown-item" >Criar Quarto</a></li>
                                            </Link>
                                            <Link to="admin/listar-quartos">
                                                <li><a onClick={this.atualizar} className="dropdown-item" >Listar Quartos</a></li>
                                            </Link>
                                            <Link to="admin/listar-reservas">
                                                <li><a onClick={this.atualizar} className="dropdown-item" >Listar Reservas</a></li>
                                            </Link>

                                        </ul>
                                    </li>
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
