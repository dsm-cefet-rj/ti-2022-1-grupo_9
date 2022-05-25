import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import Card from "../../shared/components/Card";
import Button from "../../shared/components/Button";


export default class CriarReserva extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hospedes:"",
            formaDePagamento:"Pix",
        }
        this.mudancaInput = this.mudancaInput.bind(this);
        this.save = this.save.bind(this);
    }

    


    mudancaInput(event){
        this.setState({ [event.target.id]: event.target.value });
    }

    save(){

    }

    render() {
        return (
            <div className="container mt-4 ">
                <Card content="Quarto com banheiro exclusivo"
                    image={imgQuarto} title="Quarto Suite"
                >

                </Card>
                <div className="row justify-content-center mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="hospedes">Quantidade de Hospedes</label>
                        <input value={this.state.hospedes} onChange={this.mudancaInput} id="hospedes" type="number" min="0" className="form-control" />
                    </div>

                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-12 col-md-6">
                        <div className="form-check form-check-inline">
                            <input checked={this.state.formaDePagamento === 'Pix'} onChange={this.mudancaInput} className="form-check-input" type="radio" name="inlineRadioOptions" id="formaDePagamento" value="Pix" defaultChecked />
                            <label className="form-check-label" for="inlineRadio1">Pix</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input checked={this.state.formaDePagamento === 'Boleto'} onChange={this.mudancaInput} className="form-check-input" type="radio" name="inlineRadioOptions" id="formaDePagamento" value="Boleto" />
                            <label className="form-check-label" for="inlineRadio2">Boleto</label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-12 col-md-6 center-align">
                        <Button function={this.save} title="Criar Reserva"></Button>
                    </div>
                </div>

            </div>
        );
    }
}
