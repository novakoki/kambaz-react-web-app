import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kambaz/Courses/${cid}/${link}`} id={`wd-course-${link}-link`}
          className={`list-group-item ${pathname.includes(link) ? "active" : "text-danger"} border border-0`}> {link} </Link>
      ))}      
    </div>
);}
