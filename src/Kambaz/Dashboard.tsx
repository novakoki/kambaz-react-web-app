import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
         <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/1.jpeg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/2.jpeg" width="100%" height={160} />
                <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1235 HTML </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        HTML is a programming language  </Card.Text>
                    <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/3.jpeg" width="100%" height={160} />
                <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1236 CSS </Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        CSS is a programming language  </Card.Text>
                    <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/4.jpeg" width="100%" height={160} />
                <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1237 JavaScript </Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        JavaScript is a programming language  </Card.Text>
                    <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/5.jpeg" width="100%" height={160} />
                <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1238 Python </Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Python is a programming language  </Card.Text>
                    <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/6.jpeg" width="100%" height={160} />
                <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1239 Java </Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Java is a programming language  </Card.Text>
                    <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/7.jpeg" width="100%" height={160} />
                <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1240 C++ </Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        C++ is a programming language  </Card.Text>
                    <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
        </Card>
        </Col>
        </Row>
      </div>
    </div>
);}
