import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import fetchIntercept from 'fetch-intercept';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { HttpStatus } from './core/enums/http-status.enum';
import SweetAlertService from './core/services/sweet-alert.service';
import { Provider, useDispatch } from 'react-redux';
import store from './core/store/store-config';
import { desativar } from './core/reducers/loading.redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const unregister = fetchIntercept.register({
  request: function (url, config) {
    if (config.headers == null) config.headers = {};
    config.headers["Content-Type"] = "application/json";
    if (localStorage.getItem("token")) config.headers.authorization = localStorage.getItem("token");

    // Modify the url or config here
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {

    if (response.status == HttpStatus.UNAUTHORIZED) {
      localStorage.removeItem("token");
      window.location.href = "/usuario/login";
    }
    if (response.status === HttpStatus.INTERNAL_SERVER_ERROR) {
      SweetAlertService.ErroPadraoSemTimer();
    }
    return response;
  },

  responseError: function (error) {
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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

