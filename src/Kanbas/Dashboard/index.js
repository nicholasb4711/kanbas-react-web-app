import React from "react";
import { Link } from "react-router-dom";
function Dashboard({ courses, course, setCourse, addCourse,
  deleteCourse, updateCourse }
) {
    return (
      <div className="container" style={{paddingLeft: '3%'}}>
        <link href="../vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css" rel="stylesheet"/>
        <h1>Dashboard</h1><hr />
        <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <h4>Published Courses({courses.length})</h4>
        <button className="btn btn-success" onClick={addCourse}>Add Course</button>
        <button className="btn btn-secondary" onClick={() => updateCourse(course)} >
        Update
      </button>
        <div className="text-center">
          <div className="row">
            {courses.map((course) => (
              <div key={course._id} className="col-4" style={{paddingTop: '1.5%'}}>
                <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">{course.number} - Starts on: {course.startDate}</p>
                    <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-danger">Go to {course.name}</Link><br/>
                    <div style={{paddingTop: '3.5%'}}>
                    <button onClick={() => deleteCourse(course)} className="btn btn-danger" style={{ marginLeft: '10px' , paddingTop: '1.5%'}}>Delete</button>
                    <button onClick={(event) => {event.preventDefault();setCourse(course);}}  className= "btn btn-dark">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
export default Dashboard;
