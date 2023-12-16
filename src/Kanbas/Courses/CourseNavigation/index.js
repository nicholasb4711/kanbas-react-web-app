import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings",
        "Assignments", "Quizzes", "Grades", "People", "Panopto Video",
        "Discussions", "Announcements", "Pages", "Files", "Syllabus"]
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const URL = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState({});
    



    // Extract the current location (e.g., Home, Modules) from the pathname
    const currentLocation = pathname.split('/').pop();

    return (
        <div className="col-2-sidebar">
            <ul className="list-group">
                <div className="course-nav-header breadcrumb-item breadcrumb-item-custom active">
                    {courseId}.{course.number}
                </div>
                <div className="course-nav">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={`/Kanbas/Courses/${courseId}/${link}`}
                                className={`list-group-item ${pathname.includes(link) && "active"}`}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}

export default CourseNavigation;
