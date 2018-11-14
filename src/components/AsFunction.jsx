import React from "react";
import "../style/ui.scss";
import { IoIosWater } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";

const percentToDecimal = decimal => {
  return decimal * 100 + " %";
};

const calcGoal = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const AsFunction = props => (
  <div className="swim-day-count">
    <div className="total-days">
      <IoIosWater />
      <span>{props.total} days completed.</span>
    </div>

    <div className="shark-days">
      <span>{props.shark} days without sharks!</span>
    </div>

    <div className="current-days">
      <span>{props.current} days without being sucked out by a current!</span>
    </div>

    <div className="goal-days">
      <span>
        {props.total}/{props.goal} = {calcGoal(props.total, props.goal)} days of
        the way to our goal
      </span>
      <FaCalendarCheck />
    </div>
  </div>
);
export default AsFunction;
