import React from "react";
import { IoIosWater } from "react-icons/io";

class AsClass extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  percentToDecimal(decimal) {
    return decimal * 100 + " %";
  }
  calcGoal(total, goal) {
    return this.percentToDecimal(total / goal);
  }
  render() {
    return (
      <div className="swim-day-count">
        <div className="total-days">
          <IoIosWater />
          <span>{this.props.total} days</span>
        </div>

        <div className="shark-days">
          <span>{this.props.shark} days</span>
        </div>

        <div className="current-days">
          <span>{this.props.current} days</span>
        </div>

        <div className="goal-days">
          <span>{this.calcGoal(this.props.total, this.props.goal)} days</span>
        </div>
      </div>
    );
  }
}

export default AsClass;
