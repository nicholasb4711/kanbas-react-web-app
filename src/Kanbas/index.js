import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useState } from "react";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({

        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses,
        {
            ...course,
            _id: new Date().getTime()
        }]);
    };
    // Function to generate random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
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
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Account" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        getRandomColor={getRandomColor} />} />
                    <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
                    <Route path="/Calendar" element={<Calendar />} />
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;