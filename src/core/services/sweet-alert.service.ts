import Swal from "sweetalert2";

export default class SweetAlertService {

    static ErroformularioInvalido(errors){
        return Swal.fire({
            title: 'Opss, Formulário Inválido!',
            text: this.obterErrosFormulario(errors),
            icon: 'error',
            confirmButtonText: 'OK',
        })
    }
    static ErroPersonalizadoSemTimer(title, text){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'error',
            confirmButtonText: 'OK',
        })
    }
    static ErroPadraoSemTimer(){
        return Swal.fire({
            title: "Ops...",
            text: "ocorreu um erro, favor contatar o adm!",
            icon: 'error',
            confirmButtonText: 'OK',
        })
    }

    static ErroPersonalizadoComTimer(title, text){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'error',
            confirmButtonText: 'OK',
            timer:1500
        })
    }

    static WarningPersonalizadoSemTimer(title, text){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            confirmButtonText: 'OK',
        })
    }

    static SucessoPersonalizadoComTimer(title, text){
        return Swal.fire({
            icon: 'success',
            title: title,
            text:text,
            showConfirmButton: false,
            timer: 1500
          });
    }

    static SucessoPadraoComTimer(){
        return Swal.fire({
            icon: 'success',
            title: "Tudo certo!",
            text:"Sua ação foi realizada com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
    }

    private static obterErrosFormulario(errors){
        let message = '';
        for(let error in errors){
            message += errors[error].message + " -";
        }
        console.log(message);
        return message;
    }
}