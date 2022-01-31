import React from "react";
import "./row-list.css"
import {Row} from "./row/row.component"

export const RowList = (props) => {
  console.log(props);
  return (
    <div className="salat-of-month ">
     {props.calendars.map((Row, index) => (
           <Row key={index}/>
          ))
          }
    </div>
  );
};
