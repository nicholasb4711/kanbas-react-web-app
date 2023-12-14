import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import Counter from "./Counter";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";

function sayHello() {
  alert("Hello");
}



const Assignment4 = () => {
  return (
    <>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ChildStateComponent />
      <ParentStateComponent />
      <ReduxExamples />

    </>
  );
};
export default Assignment4;