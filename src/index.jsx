import React from "react";
import { render } from "react-dom";
import "./style/global.css";
// import AsClass from "./components/AsClass.jsx";
import AsFunction from "./components/AsFunction.jsx";
import * as serviceWorker from "./serviceWorker";
import { SwimDayList } from "./components/SwimDayList";

render(
  <React.Fragment>
    {/* <AsClass total={50} shark={20} current={30} goal={100} /> */}
    <AsFunction />
    <AsFunction total={50} shark={20} current={30} goal={100} />
    <SwimDayList
      days={[
        {
          ocean: "Red Sea",
          date: new Date("10/28/2018"),
          waves: true,
          salty: true
        },
        {
          ocean: "Dead Sea",
          date: new Date("/10/29/2018"),
          waves: false,
          salty: true
        },
        {
          ocean: "Agien Sea",
          date: new Date("/10/30/2018"),
          waves: true,
          salty: false
        }
      ]}
    />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
