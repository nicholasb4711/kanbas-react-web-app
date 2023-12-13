import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css"
import "../Modules/index.css"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="container">
      {/* Search fields */}
      <div className="search-row d-flex ">
        <div className="d-flex flex-column col-6 m-3">
          <h3>Student Names</h3>
          <input className="form-control" type="text" placeholder="Search Students" />
        </div>
        <div className="d-flex flex-column col-6 m-3">
          <h3>Assignment Names</h3>
          <input className="form-control" type="text" placeholder="Search Assignments" />
        </div>
      </div>
      <hr />

      {/* Apply filters button */}
      <div className="filters-row d-flex">
        <div className="d-flex flex-column m-3">
          <button className="btn btn-secondary">
            <i className="fas fa-filter fa-lg" style={{ color: "#9c9c9c", marginRight: "9px" }}></i>
            Apply Filters
          </button>
        </div>
      </div>

      {/* Grades table */}
      <div className="table-responsive m-3">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (
                      <td key={assignment._id}>
                        <input className="form-control" type="number" defaultValue={grade?.grade || "N/A"} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
