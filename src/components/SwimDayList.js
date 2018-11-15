import React from "react";
// import { IoIosWater } from "react-icons/io";
// import { FaFortAwesome } from "react-icons/fa";
// import { FaCalendarCheck } from "react-icons/fa";
import { SwimDayRow } from "./SwimDayRow.js";

export const SwimDayList = ({ days }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Ocean</th>
        <th>Waves</th>
        <th>Salty</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) => (
        <SwimDayRow
          key={i}
          // ocean={day.ocean}
          // date={day.date}
          // waves={day.waves}
          // salty={day.salty}
          {...day}
        />
      ))}
    </tbody>
  </table>
);
