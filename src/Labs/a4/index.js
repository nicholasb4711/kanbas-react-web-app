import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";

function sayHello() {
    alert("Hello");
  }



const Assignment4 = () => {
 return(
   <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent />
     <PassingDataOnEvent />
     <PassingFunctions />       
     <PassingFunctions theFunction={sayHello} />
     <EventObject />
 
   </>
 );
};
export default Assignment4;