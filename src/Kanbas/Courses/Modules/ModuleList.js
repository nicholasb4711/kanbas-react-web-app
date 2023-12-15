import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
    <ul className="list-group module-group">
      <li className="list-group-item">
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          className="btn btn-success">
          Add
        </button>
        <button
          onClick={() => dispatch(updateModule(module))}
          className="btn btn-secondary">
          Update
        </button>


        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          className="form-control" />

        
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          className="form-control"
        />
      </li>


      {modules.filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}
              className="btn btn-warning">
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteModule(module._id))}
              className="btn btn-danger">
              Delete
            </button>


            <h3 className="module-section-header">{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))
      }
    </ul>
  );
}
export default ModuleList;