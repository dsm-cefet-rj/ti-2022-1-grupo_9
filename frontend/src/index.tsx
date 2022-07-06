import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import fetchIntercept from 'fetch-intercept';
import { BrowserRouter } from 'react-router-dom';
import { HttpStatus } from './core/enums/http-status.enum';
import SweetAlertService from './core/services/sweet-alert.service';
import { Provider} from 'react-redux';
import store from './core/store/store-config';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const unregister = fetchIntercept.register({
  request: function (url, config) {
    if (config.headers == null) config.headers = {};
    config.headers["Content-Type"] = "application/json";
    if (localStorage.getItem("token")) config.headers.authorization = localStorage.getItem("token");
    
    return [url, config];
  },

  requestError: function (error) {
    return Promise.reject(error);
  },

  response: function (response) {
    if (response.status == HttpStatus.UNAUTHORIZED) {
      localStorage.removeItem("token");
      window.location.href = "/usuario/login";
    }
    else if (response.status === HttpStatus.INTERNAL_SERVER_ERROR) {
      SweetAlertService.ErroPadraoSemTimer();
    }
    else if(response.status === HttpStatus.FORBIDDEN) SweetAlertService.ErroPersonalizadoSemTimer("Não Autorizado!", "")
    else if(response.status != HttpStatus.OK){
      response.text().then(x => SweetAlertService.ErroPersonalizadoSemTimer("Opss..", x));
    }
    return response;
  },

  responseError: function (error) {
    SweetAlertService.ErroPadraoSemTimer();
    return Promise.reject(error);
  }
});


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>

);

reportWebVitals();

