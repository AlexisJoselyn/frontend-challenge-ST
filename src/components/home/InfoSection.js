import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./InfoSection.scss";

export const InfoSection = () => {
  const { setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({
    documentType: "dni",
    documentNumber: "",
    cellphone: "",
    isCheckedPP: false,
    isCheckedPC: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://rimac-front-end-challenge.netlify.app/api/user.json")
      .then((response) => {
        setUserData({ ...response.data });
      })
      .catch((error) => {
        console.error("Error obteniendo data de usuario", error);
      });
  }, [setUserData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const documentNumberLength = formData.documentType === "dni" ? 8 : 11;
    const newErrors = {
      documentNumber: !formData.documentNumber || formData.documentNumber.length !== documentNumberLength,
      cellphone: !formData.cellphone || formData.cellphone.length !== 9,
      isCheckedPP: !formData.isCheckedPP,
      isCheckedPC: !formData.isCheckedPC,
    };

    setTimeout(() => {
      setErrors({
        documentNumber: false,
        cellphone: false,
        isCheckedPP: false,
        isCheckedPC: false,
      });
    }, 900);

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Success:", formData);
      navigate("/planes");
    } else {
      console.log("Validation failed or incorrect values");
    }
  };

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
      <div className="infoSection__text-mobile">
        <p>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </p>
      </div>
      <form className="infoSection__form" onSubmit={handleSubmit}>
        <div className="form__inputs">
          <div className="inputs__document">
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleInputChange}
            >
              <option value="dni">DNI</option>
              <option value="ruc">RUC</option>
              <option value="ce">CNE</option>
            </select>
            <div
              className={`document__input-container ${
                errors.documentNumber ? "error-border" : ""
              }`}
            >
              <input
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleInputChange}
                placeholder=""
              />
              <label>Nro. de documento</label>
            </div>
          </div>
          <div
            className={`inputs__cellphone ${
              errors.cellphone ? "error-border" : ""
            }`}
          >
            <input
              name="cellphone"
              value={formData.cellphone}
              onChange={handleInputChange}
              placeholder=""
            />
            <label>Celular</label>
          </div>
        </div>
        <div className={`form__check ${errors.isCheckedPC ? "error" : ""}`} >
          <label>
            <input
              type="checkbox"
              name="isCheckedPP"
              checked={formData.isCheckedPP}
              onChange={handleInputChange}              
            />
            Acepto la Política de Privacidad
          </label>
          <label>
            <input
              type="checkbox"
              name="isCheckedPC"
              checked={formData.isCheckedPC}
              onChange={handleInputChange}
            />
            Acepto la Política de Comunicaciones Comerciales
          </label>
          <a href="./"> Aplican Términos y Condiciones</a>
        </div>
        <button type="submit" className="form__button">
          Cotiza aquí
        </button>
      </form>
    </div>
  );
};
