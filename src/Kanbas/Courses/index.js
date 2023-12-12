import React from 'react';
import { useParams } from 'react-router-dom'
import db from '../Database';
import JsonPre from '../../Labs/a3/JsonPre';
import CoursesNavigation from './CourseNavigation';

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <h1> Courses {course.name}</h1>
            <CoursesNavigation />
            <JsonPre json={course} />
        </div>
    );
}

export default Courses;