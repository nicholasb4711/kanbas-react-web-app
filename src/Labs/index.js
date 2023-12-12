import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";

function Labs() {
    const { pathname } = useLocation();
    return (
        <div>
            <Link to="/HelloWorld">Hello World</Link>
            <br />
            <Link to="/Labs">Labs</Link>
            <br />
            <Link to="/Kanbas">Kanbas</Link>
            <br />
            <div className="container">

                <h1>Labs</h1>
                <div className="nav nav-pills">
                    <Link to="a3"
                        className={`nav-link ${pathname.includes('a3') ? "active" : ""}`}>Assignment 3</Link>
                    <br />
                    <Link to="a4" className={`nav-link ${pathname.includes('a4') ? "active" : ""}`}>Assignment 4</Link>
                    <br />
                    <Link to="a5" className={`nav-link ${pathname.includes('a5') ? "active" : ""}`}>Assignment 5</Link>
                </div>

                <Routes>
                    <Route path="/" element={<Navigate to="a3" />} />
                    {/* <Route path="/" element={<Assignment3 />} /> */}
                    <Route path="a3" element={<Assignment3 />} />
                    <Route path="a4" element={<Assignment4 />} />
                    <Route path="a5" element={<Assignment5 />} />
                </Routes>
            </div>
        </div>
    );
}

export default Labs;