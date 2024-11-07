import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InfoSection.scss";

export const InfoSection = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    documentType: "dni",
    documentNumber: "",
    cellphone: "",
    isCheckedPP: false,
    isCheckedPC: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("https://rimac-front-end-challenge.netlify.app/api/user.json")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Erro obteniendo data de usuario", error);
      });
  }, []);

  console.log(userData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  console.log(formData);

  const validateForm = () => {
    const newErrors = {
      documentNumber: !formData.documentNumber,
      cellphone: !formData.cellphone,
      isCheckedPP: !formData.isCheckedPP,
      isCheckedPC: !formData.isCheckedPC
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
            <div className={`document__input-container ${errors.documentNumber ? "error-border" : ""}`}>
              <input
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleInputChange}
                placeholder=""
              />
              <label>Nro. de documento</label>
            </div>
          </div>
          <div className={`inputs__cellphone ${errors.cellphone ? "error-border" : ""}`}>
            <input
              name="cellphone"
              value={formData.cellphone}
              onChange={handleInputChange}
              placeholder=""
            />
            <label>Celular</label>
          </div>
        </div>
        <div className="form__check">
          <label className={errors.isCheckedPP ? "error-border" : ""}>
            <input
              type="checkbox"
              name="isCheckedPP"
              checked={formData.isCheckedPP}
              onChange={handleInputChange}
            />
            Acepto la Política de Privacidad
          </label>
          <label className={errors.isCheckedPC ? "error-border" : ""}>
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
