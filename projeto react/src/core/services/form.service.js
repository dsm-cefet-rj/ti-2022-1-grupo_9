import Swal from "sweetalert2";

export default class FormService {
    static ehValido(state) {
        for (let st in state) {
            if (state[st] === '') return false;
        }
        return true;
    }

    static limparFormulario(state){
        for(let st in state){
            state[st] = '';
        }
    }
}