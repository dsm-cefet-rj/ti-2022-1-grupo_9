import Swal from "sweetalert2";

export default class SweetAlertService {

    static ErroformularioInvalido(){
        return Swal.fire({
            title: 'Opss...',
            text: 'Formulário Inválido!',
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

    static SucessoPersonalizadoComTimer(title, text){
        return Swal.fire({
            icon: 'success',
            title: title,
            text:text,
            showConfirmButton: false,
            timer: 1500
          });
    }
}