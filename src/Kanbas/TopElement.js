import './index.css';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import db from './Database';
import { RxHamburgerMenu } from "react-icons/rx";

function TopElement() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    // Extract the current location (e.g., Home, Modules) from the pathname
    const currentLocation = pathname.split('/').pop();
    console.log(course);

    // Assume we have a user object with a name property
    const user = { name: 'User Name' };
    return (
        <div>
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
               
                <ol className="breadcrumb bc-header flex-fill">
                <RxHamburgerMenu className='burger' />
                    {currentLocation === 'Account' ? (
                        <>  
                        
                            <li className="breadcrumb-item">
                                <Link to={`/Kanbas/Account`}> {user.name}'s Profile</Link>
                            </li>
                            
                        </>
                    ) : (
                        <>
                            <li className="breadcrumb-item">
                                <Link to={`/Kanbas/Courses/${courseId}`}>{course.name}</Link>
                            </li>
                            <li className="breadcrumb-item breadcrumb-item-custom active" aria-current="page">
                                {currentLocation}
                            </li>
                        </>
                    )}
                </ol>
            </nav>
            <hr />
        </div>
    )
}

export default TopElement;