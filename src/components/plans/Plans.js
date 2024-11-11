import Stepper from "./Stepper";
import BtnVolver from "./BtnVolver";
import PlanSelector from "./PlanSelector";
import "./Plans.scss";

export const Plans = () => {
  return (
    <div className="plans">
      <Stepper></Stepper>
      <BtnVolver></BtnVolver>
      <PlanSelector></PlanSelector>
    </div>
  );
};
