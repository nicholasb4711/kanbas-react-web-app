import React, { useState } from "react";
import db from "../../Database";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import "../../index.css";
import { FaCheck, FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="assignments-main">
      <div className="header-bar d-flex flex-row justify-content-end">
        <FaCheckCircle className="fas fa-lg" style={{ color: "#46c22e" }} />
        <p style={{ color: "#46c22e", margin: 0}}>Published</p>



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
            value={assignment.title}

          />
          <textarea
            className="form-control mb-3"
            rows="5"
            name="description"
            value={assignment.course}

          />
          {/* Other form inputs will go here */}
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
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-secondary me-2"
              >
                Cancel
              </Link>
              <button type="submit" className="btn btn-danger">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    // <div>

    //   <h1>Assignment Editor!!! {assignment.title}</h1>
    //   <input className="form-control" defaultValue={assignment.title} />
    //   <button onClick={handleSave} className="btn btn-success">
    //     Save
    //   </button>
    //   <Link
    //     className="btn btn-warning"
    //     to={`/Kanbas/Courses/${courseId}/Assignments`}
    //   >
    //     Cancel
    //   </Link>
    //   <button className="btn btn-danger">Delete</button>
    // </div>
  );
}

export default AssignmentEditor;