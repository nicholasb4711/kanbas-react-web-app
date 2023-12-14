import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import store from "./store";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: new Date(), endDate: new Date(),
    });

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const addCourse = () => {
        setCourses([
          { ...course, _id: new Date().getTime().toString() },
          ...courses,
        ]);
        setCourse({ name: "" });
      };

    const deleteCourse = (id) => {
        setCourses(courses.filter(course => course._id !== id));
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                    <Routes>
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route
                            path="Dashboard"
                            element={<Dashboard
                                    courses={courses}
                                    setCourses={setCourses}
                                    course={course}
                                    setCourse={setCourse}
                                    addCourse={addCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            }
                        />
                        <Route
                            path="Courses/:courseId/*"
                            element={<Courses courses={courses} />}
                        />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;