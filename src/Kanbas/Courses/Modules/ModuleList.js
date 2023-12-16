import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client"
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const fetchModulesForCourse = async (courseId) => {
    const modules = await client.findModulesForCourse(courseId);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModulesForCourse(courseId);
  }, [courseId]);

  const handleAddModule = async (module) => {
    try {
      const newModule = await client.createModule(courseId, module);
      dispatch(addModule(newModule));
      dispatch(setModule({ name: "", description: "" }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteModule = async (moduleId) => {
    try {
      await client.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ul className="list-group module-group">
      <li className="list-group-item">
        <button
          onClick={() => handleAddModule(module)}
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
              onClick={() => handleDeleteModule(module._id)}
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