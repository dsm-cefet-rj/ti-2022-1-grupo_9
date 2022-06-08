import { STATUS_CODES } from "http";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JwttService from "../../core/services/jwt.service";
import SweetAlertService from "../../core/services/sweet-alert.service";
import { AuthService } from "../../services/auth.service";
import Button from "../../shared/components/Button";

export default (props) => {
    const [form, setForm] = useState({ email: "", senha: "" });
    let navigate = useNavigate();



    async function login() {
        let response = await AuthService.Login(form);
        
        if (response.status == 200) {
            let result = await response.json();
            localStorage.setItem("token", result);
            props.setLogged(true);
            setTimeout(() => navigate("/", { replace: true }), 1800);
            return SweetAlertService.SucessoPersonalizadoComTimer("Login Efetuado com sucesso!", "você será redirecionado em breve");
        }

        return;
    }

    return (<div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                <label className="form-label" htmlFor="email">Email</label>
                <input value={form.email} onChange={(event) => { setForm({ email: event.target.value, senha: form.senha }) }} id="email" type="text" className="form-control" />

            </div>

        </div>
        <div className="row right-align">
            <div className="col-12 col-md-6">
                <label className="form-label" htmlFor="senha">Senha</label>
                <input value={form.senha} onChange={(event) => { setForm({ email: form.email, senha: event.target.value }) }} id="senha" type="password" className="form-control" />

            </div>
        </div>
        <div className="row my-4">
            <div className="col-12 col-md-6">
                <Button function={login} title="Logar"></Button>
            </div>
        </div>
    </div>);
}