import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const linksToIconMap = {
    Account: <BiUserCircle />,
    Dashboard: <RiDashboard3Fill />,
    Courses: <FaBook />,
    Calendar: <BsFillCalendar2WeekFill />,
  };

  const { pathname } = useLocation();

  return (
      <div className="list-group" style={{ width: 150 }}>
        <img src="/images/NU_Logo.png"></img>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {linksToIconMap[link]}
            {link}
          </Link>
        ))}
      </div>

  );
}
export default KanbasNavigation;