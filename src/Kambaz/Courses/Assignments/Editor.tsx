import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import { useState } from 'react';

export default function AssignmentEditor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { aid, cid } = useParams();
    const assignment = assignments.find((assignment: any) => assignment._id === aid);
    const [assignmentName, setAssignmentName] = useState(assignment?.title);
    const [assignmentDescription, setAssignmentDescription] = useState(assignment?.description);
    const [assignmentPoints, setAssignmentPoints] = useState(assignment?.points);
    const [assignmentDisplayGradeAs, setAssignmentDisplayGradeAs] = useState(assignment?.displayGradeAs);
    const [assignmentSubmissionType, setAssignmentSubmissionType] = useState(assignment?.submissionType);
    const [assignmentAssignTo, setAssignmentAssignTo] = useState(assignment?.assign_to);
    const [assignmentDueDate, setAssignmentDueDate] = useState(assignment?.dueDate);
    const [assignmentAvailableDate, setAssignmentAvailableDate] = useState(assignment?.availableDate);
    const [assignmentAvailableUntil, setAssignmentAvailableUntil] = useState(assignment?.availableUntil);
    const handleSave = () => {
      if (assignment) {
        dispatch(updateAssignment({ ...assignment, title: assignmentName, description: assignmentDescription, points: assignmentPoints, assign_to: assignmentAssignTo, dueDate: assignmentDueDate, availableDate: assignmentAvailableDate, availableUntil: assignmentAvailableUntil }));
      } else {
        dispatch(addAssignment({...assignment , course: cid as string, modules: [], title: assignmentName, description: assignmentDescription, points: assignmentPoints, assign_to: assignmentAssignTo, dueDate: assignmentDueDate, availableDate: assignmentAvailableDate, availableUntil: assignmentAvailableUntil }));
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
      <Container className="mt-4">
        <div id="wd-assignments-editor">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
              <Form.Control 
                id="wd-name" 
                type="text" 
                defaultValue={assignmentName}
                onChange={(e) => setAssignmentName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-description">Description</Form.Label>
              <Form.Control 
                id="wd-description" 
                as="textarea" 
                rows={3}
                defaultValue={assignmentDescription}
                onChange={(e) => setAssignmentDescription(e.target.value)}
              />
            </Form.Group>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="wd-points">Points</Form.Label>
                  <Form.Control 
                    id="wd-points" 
                    type="number" 
                    defaultValue={assignmentPoints} 
                    onChange={(e) => setAssignmentPoints(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
                  <Form.Select id="wd-group" defaultValue="Group 1">
                    <option value="Group 1">Group 1</option>
                    <option value="Group 2">Group 2</option>
                    <option value="Group 3">Group 3</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="wd-display-grade-as">Display Grade As</Form.Label>
                  <Form.Select id="wd-display-grade-as" defaultValue={assignmentDisplayGradeAs} onChange={(e) => setAssignmentDisplayGradeAs(e.target.value)}>
                    <option value="Letter">Letter</option>
                    <option value="Percentage">Percentage</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
                  <Form.Select id="wd-submission-type" defaultValue={assignmentSubmissionType} onChange={(e) => setAssignmentSubmissionType(e.target.value)}>
                    <option value="Online URL">Online URL</option>
                    <option value="File Upload">File Upload</option>
                    <option value="Text Entry">Text Entry</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Online Entry Options</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Check 
                  type="checkbox" 
                  id="wd-text-entry" 
                  label="Text Entry" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-website-url" 
                  label="Website URL" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-media-recordings" 
                  label="Media Recordings" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-student-annotation" 
                  label="Student Annotation" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-file-upload" 
                  label="File Upload" 
                    className="mb-2"
                  />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Assign</Form.Label>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="wd-assign-to">Assign To</Form.Label>
                  <Form.Control 
                    id="wd-assign-to" 
                    type="text" 
                    defaultValue={assignmentAssignTo} 
                    onChange={(e) => setAssignmentAssignTo(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
                  <Form.Control 
                    type="date" 
                    id="wd-due-date" 
                    defaultValue={assignmentDueDate} 
                    onChange={(e) => setAssignmentDueDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Available</Form.Label>
              </Col>
              <Col md={9}>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
                      <Form.Control 
                        type="date" 
                        id="wd-available-from" 
                        defaultValue={assignmentAvailableDate} 
                        onChange={(e) => setAssignmentAvailableDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
                      <Form.Control 
                        type="date" 
                        id="wd-available-until" 
                        defaultValue={assignmentAvailableUntil} 
                        onChange={(e) => setAssignmentAvailableUntil(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}></Col>
              <Col md={9}>
                <div className="d-flex gap-2 justify-content-end">
                  <Button variant="secondary" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>Cancel</Button>
                  <Button variant="primary" onClick={handleSave}>Save</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    );
}
  