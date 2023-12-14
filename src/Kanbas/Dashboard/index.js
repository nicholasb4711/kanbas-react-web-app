import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { BsBack } from "react-icons/bs";
import "./index.css";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [newCourse, setNewCourse] = useState("");

  // Function to generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleAddCourse = () => {
    setCourses([
      { ...course, _id: new Date().getTime().toString() },
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const handleEditCourse = (courseId, newTitle) => {
    const updatedCourses = courses.map((course) => {
      if (course._id === courseId) {
        return { ...course, name: newTitle };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const handleDeleteCourse = (courseId) => {
    const updatedCourses = courses.filter((course) => course._id !== courseId);
    setCourses(updatedCourses);
  };

  return (
    <div className="d-flex-col" style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <hr />
      <div className="d-flex">
        <h2>Published Courses ({courses.length})</h2>

        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          className="form-control"
          placeholder="Enter course title"
          style={{ width: '25%', marginLeft: 'auto' }}
        />
        <button className="btn btn-success" onClick={handleAddCourse}>Add Course</button>
        <button className="btn btn-primary" onClick={handleEditCourse}>Update</button>

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
                  <p class="card-text">CS4550.12631.202410
                    202410_1 Fall 2023 Semester Full Term</p>
                </Link>
                <button className="btn btn-warning" onClick={() => handleEditCourse(course._id, "New Title")}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDeleteCourse(course._id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;