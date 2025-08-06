import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { enrollInCourse, unenrollFromCourse, setShowAllCourses, setEnrollments } from "./Enrollments/reducer";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./Enrollments/client";
import { useEffect } from "react";
export default function Dashboard({ myCourses, allCourses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, refreshCourses }: {
  myCourses: any[]; allCourses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; refreshCourses: () => void; }) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentsReducer);

    const fetchEnrollments = async () => {
      const enrollments = await enrollmentsClient.getAllEnrollments();
      dispatch(setEnrollments(enrollments));
    };

    useEffect(() => {
      fetchEnrollments();
    }, []);

    const handleEnroll = async (courseId: string) => {
      await userClient.enrollInCourse(courseId);
      dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
      refreshCourses();
    };

    const handleUnenroll = async (courseId: string) => {
      await userClient.unenrollFromCourse(courseId);
      dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
      refreshCourses();
    };

    const isEnrolled = (courseId: string) => {
      return enrollments.some(
        (enrollment: any) => 
          enrollment.user === currentUser._id && enrollment.course === courseId
      );
    };

    const getCoursesToDisplay = () => {
      if (showAllCourses) {
        return allCourses;
      }
      return myCourses;
    };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        {currentUser?.role === "FACULTY" ? "New Course" : "Course Management"}
        <button
          className="btn btn-info float-end"
          onClick={() => dispatch(setShowAllCourses(!showAllCourses))}
        >
          {showAllCourses ? "Show Enrolled" : "Enrollments"}
        </button>
        {currentUser?.role === "FACULTY" && (
          <>
            <button
              className="btn btn-primary float-end me-2"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </>
        )}
      </h5>
      <hr />
      {currentUser?.role === "FACULTY" && (
        <>
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}
      <h2 id="wd-dashboard-published">
        {showAllCourses ? `All Courses (${allCourses.length})` : `Published Courses (${getCoursesToDisplay().length})`}
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {getCoursesToDisplay().map((course, index) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src={`/images/${index + 1}.jpeg`}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}{" "}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}{" "}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>
                    
                    {isEnrolled(course._id) ? (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          handleUnenroll(course._id);
                        }}
                        className="btn btn-danger float-end ms-1"
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          handleEnroll(course._id);
                        }}
                        className="btn btn-success float-end ms-1"
                      >
                        Enroll
                      </button>
                    )}
                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end ms-1"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning float-end ms-1"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
