import { React } from "react";
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
  //can do default proprs here, standard es6
  // export const AsFunction = ({
  // total= 0,
  // shark= 0,
  // current= 0,
  // goal= 10
  // }) => (

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

// other default props option
// AsFunction.defaultProps = {
//   total: 0,
//   shark: 0,
//   current: 0,
//   goal: 10
// };
// other default props option

export default AsFunction;
