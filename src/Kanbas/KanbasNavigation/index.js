import { Link, useLocation } from "react-router-dom";
import { BiHelpCircle, BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaNetworkWired } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";

import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];
  const linksToIconMap = {
    Account: <BiUserCircle />,
    Dashboard: <RiDashboard3Fill />,
    Courses: <FaBook />,
    Calendar: <BsFillCalendar2WeekFill />,
    Inbox: <FaInbox />,
    History: <BsClockHistory />,
    Studio: <FaNetworkWired />,
    Help: <BiHelpCircle/>,
  };

  const { pathname } = useLocation();

  return (
    <div className="col-2-nav">
      <ul className="list-group wd-kanbas-navigation" style={{ width: 95, borderRadius: 0 }}>
        <img src="/images/NU_Logo.png"></img>

        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={`/Kanbas/${link}`}
              className={`list-group-item ${pathname.includes(link) && "active"}`}>
              <div className="menu-icon">{linksToIconMap[link]}</div>
              <div>{link}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;