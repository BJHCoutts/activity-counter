import React from "react";
import { IoIosWater } from "react-icons/io";
import { FaFortAwesome } from "react-icons/fa";
// import { FaCalendarCheck } from "react-icons/fa";

export const SwimDayRow = ({ ocean, date, waves, salty }) => (
  <tr>
    <td>
      {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>{ocean}</td>
    <td>{waves ? <IoIosWater /> : null}</td>
    <td>{salty ? <FaFortAwesome /> : null}</td>
  </tr>
);
