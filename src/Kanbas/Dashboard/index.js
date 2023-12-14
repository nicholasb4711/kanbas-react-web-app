import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { BsBack } from "react-icons/bs";
import "./index.css";

function Dashboard({ courses, course, setCourses, setCourse, addCourse, deleteCourse, updateCourse }) {


  // Function to generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  return (
    <div className="d-flex-col" style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <hr />
      <div className="d-flex">
        <h2>Published Courses ({courses.length})</h2>

        <input
          type="text"
          value={course.name}
          onChange={(e) => {
            setCourse({ ...course, name: e.target.value });
          }}
        />
        <button className="btn btn-success" onClick={() => addCourse(course)}>Add Course</button>
        <button className="btn btn-primary" onClick={() => updateCourse(course)}>Update</button>

      </div>

      <div class="d-flex flex-row flex-wrap" style={{ '--bs-gutter-x': 0 }}>

        {courses.map((course, index) => {
          const courseColor = getRandomColor();
          return (
            <div class="card">
              <Link key={index} to={`/Kanbas/Courses/${course._id}`} className="dash-course-link">
                <div class="card-header" style={{ background: courseColor }}></div>
              </Link>

              <div class="card-body">
                <Link to={`/Kanbas/Courses/${course._id}`} className="dash-course-link">
                  <h5 class="card-title" style={{ color: courseColor }}>{course._id} {course.name}</h5>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(course);
                    }}
                  >Delete</button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <p class="card-text">CS4550.12631.202410
                    202410_1 Fall 2023 Semester Full Term</p>
                </Link>
                <button className="btn btn-warning" onClick={() => setCourse(course)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteCourse(course)}>Delete</button>
              </div>
            </div>
          );
        })}
        <pre>
        <code>{JSON.stringify(courses, null, 2)}</code>
      </pre>
      </div>
    </div>
  );
}

export default Dashboard;