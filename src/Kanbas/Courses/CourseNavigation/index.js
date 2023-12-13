import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../Database";
import "./index.css";


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", 
    "Assignments", "Quizzes", "Grades", "People", "Panopto Video", 
    "Discussions", "Announcements", "Pages", "Files", "Syllabus"]
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
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
                        <li>
                            <Link
                                key={index}
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
