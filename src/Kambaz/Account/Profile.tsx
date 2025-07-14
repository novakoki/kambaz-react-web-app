import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      <Form.Control id="wd-firstname"
             placeholder="First Name"
             className="mb-2"/>
      <Form.Control id="wd-lastname"
             placeholder="Last Name"
             className="mb-2"/>
      <Form.Control id="wd-dob"
             type="date"
             className="mb-2"/>
      <Form.Control id="wd-email"
             type="email"
             className="mb-2"/>
      <Form.Control id="wd-role"
             as="select"
             defaultValue="FACULTY"
             className="mb-2">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Control>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-primary w-100 mb-2">
            Sign out </Link>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
);}
