import React from 'react';
import { useParams, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import db from '../Database';
import CourseNavigation from './CourseNavigation';
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from './Assignments/AssignmentEditor';
import Grades from './Grades';
import TopElement from '../TopElement';

function Courses({courses}) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    // Extract the current location (e.g., Home, Modules) from the pathname
    const currentLocation = pathname.split('/').pop();
    console.log(course);
    return (
        <div>
            <TopElement />

            <div className='d-flex d-flex-row flex-fill'>
                <CourseNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to={`/Kanbas/Courses/${courseId}/Home`} />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<Navigate to={`https://piazza.com/class/lm1gi2uzv1x402`} />} />
                    <Route path="Assignments/*" element={<Assignments />} />
                    <Route path="Assignments/AssignmentEditor/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>

            </div>

        </div>
    );
}

export default Courses;