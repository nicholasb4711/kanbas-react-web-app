import React, { useState } from "react";
import db from "../../Database";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import "../../index.css";
import { FaCheck, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
  resetAssignment,
} from "./assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    dispatch(updateAssignment(assignment));
    dispatch(resetAssignment());
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleExit = () => {
    dispatch(deleteAssignment(assignment._id));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


  return (
    <div className="assignments-main">
      <div className="header-bar d-flex flex-row justify-content-end">
        <FaCheckCircle className="fas fa-lg" style={{ color: "#46c22e" }} />
        <p style={{ color: "#46c22e", margin: 0 }}>Published</p>

        <button className="btn-ellipsis">
          <FaEllipsisV className="fas fa-lg" style={{ color: "#9c9c9c" }} />
        </button>
      </div>
      <hr />
      <form className="assignments-content" onSubmit={handleSave}>
        <div className="container">
          <h2>Assignment Name</h2>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            value={assignment.title} // Set the initial value of the input field to the assignment title
            onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))} // Update the assignment name
          />
          <h4>Assignment Description</h4>
          <textarea
            className="form-control mb-3"
            rows="5"
            name="description"
            value={assignment.description} // Check if assignment is defined before accessing its properties
            onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))} 
          />
          {/* Other form inputs will go here */}
          <h4>Due Date</h4>
          <input
            type="date"
            className="form-control mb-3"
            name="dueDate"
            value={assignment.dueDate}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
          />

          <h4>Available From</h4>
          <input
            type="datetime-local"
            className="form-control mb-3"
            name="availableFromDate"
            value={assignment.availableFromDate}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
          />

          <h4>Available Until</h4>
          <input
            type="datetime-local"
            className="form-control mb-3"
            name="availableUntilDate"
            value={assignment.availableUntilDate}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
          />
          {/* ... */}
          <div className="d-flex justify-content-between">
            <div className="mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="notifyChange"
              />
              <label className="form-check-label" htmlFor="notifyChange">
                Notify users that this content has changed
              </label>
            </div>
            <div className="mt-3">
              <button onClick={handleExit}
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-secondary me-2">
                Cancel
              </button>
              <button onClick={handleSave} className="btn btn-danger">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


export default AssignmentEditor;