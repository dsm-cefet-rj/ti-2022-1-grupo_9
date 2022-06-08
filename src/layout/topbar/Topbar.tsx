import "./Topbar.css";
import { Link, useNavigate } from "react-router-dom";
import imgLogo from "../../assets/img/villa-terracotta-logo-editado.png";
import JwtService from "../../core/services/jwt.service";
import SweetAlertService from "../../core/services/sweet-alert.service";

export default function Topbar(props) {

    let navigate = useNavigate();

    function deslogar() {
        props.setLogged(false);
        localStorage.removeItem("token");
        SweetAlertService.SucessoPersonalizadoComTimer("Deslogado com Sucesso!", "você seá redirecionado em breve!");
        setTimeout(() => navigate("/", { replace: true }), 1800);
    }
    

    return (
        <div className="topbar">
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
                                        !props.isLogged
                                        &&
                                        <Link to="usuario/login">
                                            <li><a className="dropdown-item">Login</a></li>
                                        </Link>
                                    }
                                    {
                                        props.isLogged
                                        &&
                                        <li><a onClick={() => deslogar()} className="dropdown-item" >Deslogar</a></li>
                                    }

                                    {
                                        JwtService.usuarioEhAdmin() == false
                                        &&
                                        <Link to="cliente/buscar-quartos">
                                            <li><a className="dropdown-item">Buscar Quartos</a></li>
                                        </Link>
                                    }
                                    {
                                        JwtService.usuarioEhAdmin() == false
                                        &&
                                        <Link to="cliente/listar-reservas">
                                            <li><a className="dropdown-item" >Listar Reservas</a></li>
                                        </Link>
                                    }

                                    {!props.isLogged &&
                                        <Link to="usuario/registrar">
                                            <li><a className="dropdown-item" >Registrar</a></li>
                                        </Link>
                                    }
                                    {props.isLogged &&
                                        <Link to="usuario/alterar-senha">
                                            <li><a className="dropdown-item" >Alterar Senha</a></li>
                                        </Link>
                                    }
                                </ul>
                            </li>
                            {
                                JwtService.usuarioEhAdmin() == true
                                &&
                                <li className="nav-item dropdown">
                                    <a className="nav-link" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Area do Admin
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                        <Link to="admin/criar-quarto">
                                            <li><a className="dropdown-item" >Criar Quarto</a></li>
                                        </Link>
                                        <Link to="admin/listar-quartos">
                                            <li><a className="dropdown-item" >Listar Quartos</a></li>
                                        </Link>
                                        <Link to="admin/listar-reservas">
                                            <li><a className="dropdown-item" >Listar Reservas</a></li>
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
