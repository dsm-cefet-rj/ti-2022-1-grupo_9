export default class DatabaseService {
    static addUsuario(usuario) {
        delete usuario.confirmarSenha;
        let existeUsuario = localStorage.getItem("usuarios");
        let usuarios, novoId;
        if (!existeUsuario) {
            usuario.id = 1;
            usuario.role = "admin";
            usuarios = [];
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            return;
        }
        else {
            usuarios = (JSON.parse(localStorage.getItem("usuarios")));
            novoId = usuarios.length + 1;
            usuario.id = novoId;
            usuario.role = "cliente";
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    }
    static obterUsuarios() {
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));
        return usuarios;
    }

    static alterarSenhaUsuario(formulario) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));
        let usuarioId = JSON.parse(localStorage.getItem("logado")).id;
        let usuario = usuarios.find(x => x.id === usuarioId);
        usuario.senha = formulario.novaSenha;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    static logarUsuario(usuario) {
        localStorage.setItem("logado", JSON.stringify(usuario));
    }

    static addQuarto(quarto) {
        let quartos = JSON.parse(localStorage.getItem("quartos"));
        if (!quartos) {
            quartos = [];
            quarto.id = 1;
        }
        else {
            quarto.id = quartos.length + 1;
        }
        quartos.push(quarto);
        localStorage.setItem("quartos", JSON.stringify(quartos));
    }

    static obterQuartos() {
        let quartos = JSON.parse(localStorage.getItem("quartos"));
        if (!quartos) quartos = [];
        return quartos;
    }

    static addReserva(reserva){
        let reservas = JSON.parse(localStorage.getItem("reservas"));
        if (!reservas) {
            reservas = [];
            reserva.id = 1;
        }
        else {
            reserva.id = reservas.length + 1;
        }
        reserva.usuarioId = JSON.parse(localStorage.getItem("logado")).id;
        reservas.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }
    
    static obterQuartosDisponiveis(data){
        let reservas = JSON.parse(localStorage.getItem("reservas"));
        let quartos = JSON.parse(localStorage.getItem("quartos"));

        if(reservas == undefined) reservas = [];
        if(quartos == undefined) quartos = [];
        let quartosDisponiveis = quartos.filter(x => reservas.find(y => y.data != data && x.id == y.id) == null? true: false);

        if(quartosDisponiveis == undefined) quartosDisponiveis = [];

        return quartosDisponiveis;
    }
    static obterReservasPorUsuarioId(usuarioId){
        let reservas = JSON.parse(localStorage.getItem("reservas"));
       
        if(reservas == null) reservas = [];
        let reservasDoUsuario = reservas.filter(x => x.usuarioId == usuarioId);
        return reservasDoUsuario;

    }

    static obterTodasReservas(){
        let reservas = JSON.parse(localStorage.getItem("reservas"));
       
        if(reservas == null) reservas = [];
        return reservas;
    }

    static obterUsuarioPorId(usuarioId){
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));
        if(usuarios == null) usuarios = [];

        return usuarios.find(x => x.id == usuarioId);
    }

    static obterUsuarioLogado(){
        return JSON.parse(localStorage.getItem("logado"));
    }
}