import React from "react";
import line from "../../assets/line.svg";
import back from "../../assets/atoms-button-circle-icons-web.png";
import lineProgress from "../../assets/atoms_stepper_progress.png";
import { useLocation } from "react-router-dom";
import "./Stepper.scss";

export default function Stepper({step1, step2, }) {
  const location = useLocation();
  const isSummary = location.pathname === "/resumen";

  return (
    <div className="container">
      <div className="container__stepper">
        <div className={`stepper__first ${isSummary && "inSummary"}`}>
          <img src={step1} alt="" />
          <p>Planes y coberturas</p>
        </div>
        <div className="stepper__line">
          <img src={line} alt="" />
        </div>
        <div className={`stepper__second ${isSummary && "inSummary"}`}>
          <img src={step2} alt="" />
          <p>Resumen</p>
        </div>
      </div>
      <div className="stepper__mobile">
        <a className="mobile__btn-volver" href={isSummary?'/planes':'/'}>
          <img src={back} alt="" />
        </a>
        <div className="stepper__first">
          <p>{!isSummary ? 'PASO 1 DE 2' : 'PASO 2 DE 2'}</p>
        </div>
        <div className="stepper__line">
          <img src={lineProgress} alt="" />
        </div>
      </div>
    </div>
  );
}
