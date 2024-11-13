import Stepper from "../common/Stepper";
import BtnVolver from "../common/BtnVolver";
import PlanSelector from "./PlanSelector";
import "./Plans.scss";

export const Plans = () => {
  return (
    <div className="plans">
      <Stepper></Stepper>
      <BtnVolver path="/"></BtnVolver>
      <PlanSelector></PlanSelector>
    </div>
  );
};
