import React from "react";
import "./InfoSection.scss";

export const InfoSection = () => {
  return (
    <div className="infoSection">
      <div className="infoSection__tag">
        <span className="tag__text">Seguro Salud Flexible</span>
      </div>
      <div className="infoSection__text">
        <h2>Creado para ti y tu familia</h2>
        <p>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </p>
      </div>
      <div className="infoSection__form">
        <div className="form__document">
          <select id="mySelect" name="options">
            <option value="dni">DNI</option>
            <option value="ruc">RUC</option>
            <option value="ce">CNE</option>
          </select>
          <div className="document__input-container">
            <input id="documentNumber" placeholder="" />
            <label for="documentNumber">Nro. de documento</label>
          </div>
        </div>
        <div className="form__cellphone">
          <input id="cellphoneNumber" placeholder="" />
          <label for="cellphoneNumber">Celular</label>
        </div>
      </div>
      <div className="infoSection__check">
          <label>
            <input type="checkbox"/>
            Acepto la Política de Privacidad
          </label>
          <label>
            <input type="checkbox"/>
            Acepto la Política de Comunicaciones Comerciales
          </label>
          <a href="./"> Aplican Términos y Condiciones</a>
      </div>
      <button className="infoSection__button">Cotiza aquí</button>
    </div>
  );
};
