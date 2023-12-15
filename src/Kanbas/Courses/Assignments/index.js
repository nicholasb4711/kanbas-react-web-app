import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, getState } from "react";
import db from "../../Database";
import "./index.css";
import "../Modules/index.css";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle, FaEllipsisV, FaFileAlt, FaPlus } from "react-icons/fa";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer";


function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAssignment = async () => {
    const newAssignment = {
      ...assignment,
      _id: new Date().getTime().toString(),
    };
    dispatch(addAssignment({ ...newAssignment, course: courseId }));
    dispatch(selectAssignment(newAssignment));
    console.log("Actually add the assignment TBD");
    navigate(`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor/${newAssignment._id}`);
  }

  function handleDeleteAssignment(id) {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(id));
    }
  }

  const handleEditAssignment = async (assignment) => {
    dispatch(selectAssignment(assignment));
    console.log("Actually add the assignment TBD");
    navigate(`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor/${assignment._id}`);
  }

  return (
    <div className="d-flex-col assignments-main flex-fill">
      <div className="header-bar d-flex flex-row justify-content-between">
        <input type="search" className="form-control w-25" placeholder="Search for Assignments" />
        <div className="float-end">
          <button className="btn-secondary">
            <FaPlus className="fas fa-sm" style={{ color: "#9c9c9c", marginRight: "9px" }} />
            Group</button>

          <button onClick={() => handleAddAssignment()}
            className="btn-danger" to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
            <FaPlus className="fas fa-lg" style={{ color: "white", marginRight: "9px" }} />Assignment
          </button>



          <button className="btn-secondary btn-ellipsis">
            <FaEllipsisV className="fas fa-lg" style={{ color: "#9c9c9c" }} />
          </button>
        </div>

      </div>
      <hr />

      <div className="assignments-content">
        <ul className="list-group assignments-list">

          <li className="list-group-item list-group-item-secondary module-align" style={{ display: "flex", verticalAlign: "center" }}>
            <span className="module-section-header me-auto" style={{ marginTop: 0 }}>
              Assignments
            </span>
            <button className="btn-secondary">40% of Total</button>
            <FaPlus className="fas fa-lg" style={{ color: "#9c9c9c", marginRight: "9px" }} />
            <FaEllipsisV className="fas fa-lg" style={{ color: "#9c9c9c" }} />

          </li>



          {assignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item module-align" style={{ display: "flex" }}>
              <FaFileAlt className="far fa-lg fa-file" style={{ color: "#9c9c9c", fontSize: 25 }} />
              <div className="assignments-info d-flex-col me-auto">
                <div className="assignment-h1">
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </Link>
                </div>
                <div className="assignment-details">Due Sep 18,2022 at 11:59pm | 100 pts</div>
              </div>
              <button
                onClick={() => handleEditAssignment(assignment)}
                className="btn-secondary">
                Edit
              </button>
              <button
                onClick={() => handleDeleteAssignment(assignment._id)}
                className="btn btn-danger">
                Delete
              </button>
              <FaCheckCircle className="fas fa-lg check" style={{ color: "#46c22e" }} />
              <FaEllipsisV className="fas fa-lg" style={{ color: "#9c9c9c" }} />
            </li>
          ))}


        </ul>
      </div>
    </div >
  );
}
export default Assignments;