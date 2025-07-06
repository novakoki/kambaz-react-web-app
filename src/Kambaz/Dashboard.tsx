import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
         <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/1.jpeg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link" >
                <img src="/images/2.jpeg" width={200} />
                <div>
                    <h5> CS1235 HTML </h5>
                    <p className="wd-dashboard-course-title">
                        HTML is a programming language  </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link" >
                <img src="/images/3.jpeg" width={200} />
                <div>
                    <h5> CS1236 CSS </h5>
                    <p className="wd-dashboard-course-title">
                        CSS is a programming language  </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
                <img src="/images/4.jpeg" width={200} />
                <div>
                    <h5> CS1237 JavaScript </h5>
                    <p className="wd-dashboard-course-title">
                        JavaScript is a programming language  </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link" >
                <img src="/images/5.jpeg" width={200} />
                <div>
                    <h5> CS1238 Python </h5>
                    <p className="wd-dashboard-course-title">
                        Python is a programming language  </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link" >
                <img src="/images/6.jpeg" width={200} />
                <div>
                    <h5> CS1239 Java </h5>
                    <p className="wd-dashboard-course-title">
                        Java is a programming language  </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link" >
                <img src="/images/7.jpeg" width={200} />
                <div>
                    <h5> CS1240 C++ </h5>
                    <p className="wd-dashboard-course-title">
                        C++ is a programming language  </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
);}
