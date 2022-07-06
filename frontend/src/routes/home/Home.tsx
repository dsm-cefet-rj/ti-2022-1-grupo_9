import bannerPousada from '../../assets/img/banner.jpg';
import iconeWpp from '../../assets/img/wpp-icon.png';

export default (props) => {

;    return (
        <div>
            <div className="container">
                <div className="row" >
                    <img className="p-4" width="100%" src={bannerPousada} />
                </div>
                <div className="row">
                    <div className="col-12 center-align">
                        <h3>
                            Sobre a Pousada
                        </h3>
                        A Pousada Villa Terracotta está localizada em Miguel Pereira e oferece o que há de melhor na cidade:
                        tranquilidade, hospitalidade e um clima maravilhoso!
                        <br />
                        Todos os quartos possuem TV tela plana, camas queen size, frigobar, ventilador e banheiros particulares.
                        <br />
                        Alguns quartos possuem vista para o amplo jardim e piscina. Além dos quartos, você poderá usufruir da
                        piscina, churrasqueira, cozinha compacta, áreas de descanso e de um ótimo café da manhã.
                    </div>
                </div>
            </div>
            <footer className="page-footer">
                <div className="row">
                    <div className="col-12 center-align">
                        <h5>Contato</h5>
                        <img height="30%" width="1%" src={iconeWpp} /> (21) 9 9999-9999
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center-align">
                        © 2022 Pousada Villa Terracotta
                    </div>
                </div>
            </footer>
        </div>
    );
}