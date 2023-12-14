import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { BsBack } from "react-icons/bs";
import "./index.css";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, getRandomColor }
) {


  return (
    <div className="d-flex-col" style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <hr />
      <div className="d-flex">
        <h2>Published Courses ({courses.length})</h2>
        <div className="d-flex">
          <input
            type="text"
            value={course.name}
            onChange={(e) => addNewCourse(e.target.value)}
            className="form-control"
            placeholder="Enter course title"
            style={{ width: '25%', marginLeft: 'auto' }}
          />

          <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

          <button className="btn btn-success" onClick={addNewCourse}>Add Course</button>
          <button className="btn btn-primary" onClick={updateCourse}>Update</button>
        </div>


      </div>

      <div class="d-flex flex-row flex-wrap" style={{ '--bs-gutter-x': 0 }}>
        {courses.map((course) => {
          const courseColor = getRandomColor();
          return (
            <div class="card">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="dash-course-link">
                <div class="card-header" style={{ background: courseColor }}></div>
              </Link>

              <div class="card-body">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="dash-course-link">
                  <h5 class="card-title" style={{ color: courseColor }}>{course._id} {course.name}</h5>

                </Link>
                <button className="btn btn-warning" onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>Update</button>
                <button className="btn btn-danger" onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                  Delete
                </button>
                <p class="card-text">CS4550.12631.202410
                  202410_1 Fall 2023 Semester Full Term</p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Dashboard;