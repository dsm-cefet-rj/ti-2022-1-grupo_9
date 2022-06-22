export class FormularioHelper {
    static ExisteErro(errors) {
        let existeErro = Object.keys(errors).length > 0 ? true : false;
        return existeErro;
    }
}