import React from "react";
import { Link, useParams } from "react-router-dom";
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
  const assignment = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  return (
    <div className="d-flex-col assignments-main flex-fill">
      <div className="header-bar d-flex flex-row justify-content-between">
        <input type="search" className="form-control w-25" placeholder="Search for Assignments" />
        <div className="float-end">
          <button className="btn-secondary">
            <FaPlus className="fas fa-sm" style={{ color: "#9c9c9c", marginRight: "9px" }} />
            Group</button>

          <button className="btn-danger">
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

          <li>
            <button
              onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
              Add
            </button>
            <button
              onClick={() => dispatch(updateAssignment(assignment))}>
              Update
            </button>
            <input value={assignment.name}
              onChange={(e) => dispatch(selectAssignment({ ...assignment, name: e.target.value }))}
            />
            <textarea value={assignment.description}
              onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}

            />
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
                onClick={() => dispatch(selectAssignment(assignment))}>
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteAssignment(assignment._id))}>
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