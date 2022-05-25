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
    static ErroPersonalizado(title, text){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'error',
            confirmButtonText: 'OK',
        })
    }

    static SucessoPersonalizado(title, text){
        return Swal.fire({
            icon: 'success',
            title: title,
            text:text,
            showConfirmButton: false,
            timer: 2000
          });
    }
}