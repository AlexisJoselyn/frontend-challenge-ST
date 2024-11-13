import React from "react";
import SummaryCard from "./SummaryCard";
import "./SummaryInfo.scss";

export default function SummaryInfo() {
  return (
    <div className="summary-info">
      <div className="summary-info__text">Resumen del seguro</div>
      <div className="summary-info__card">
        <SummaryCard />
      </div>
    </div>
  );
}
