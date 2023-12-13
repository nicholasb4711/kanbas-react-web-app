import { Link } from "react-router-dom";
import db from "../Database";
import { BsBack } from "react-icons/bs";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
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
    <div className="d-flex-col" style={{padding: 24}}>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="d-flex flex-row flex-wrap" style={{ '--bs-gutter-x': 0}}>
        {/* <div className="list-group list-group-horizontal"> */}
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
                  <Link to={`/#`} className="far fa-file-alt fa-lg" style={{ color: '#9c9c9c' }}></Link>

                </div>
              </div>
            );
          })}
        {/* </div> */}
      </div>
    </div>
  );
}
export default Dashboard;