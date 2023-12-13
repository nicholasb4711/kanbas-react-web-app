import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Account from "./Account";
import Dashboard from "./Dashboard";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Account" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:courseId/*" element={<Courses />} />
                    <Route path="/Calendar" element={<Calendar />} />
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;