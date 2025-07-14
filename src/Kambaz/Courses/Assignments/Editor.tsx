import { Form, Button, Row, Col, Container } from 'react-bootstrap';

export default function AssignmentEditor() {
    return (
      <Container className="mt-4">
        <div id="wd-assignments-editor">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
              <Form.Control 
                id="wd-name" 
                type="text" 
                defaultValue="A1 - ENV + HTML" 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-description">Description</Form.Label>
              <Form.Control 
                id="wd-description" 
                as="textarea" 
                rows={3}
                defaultValue="The assignment is available online. Submit a link to the landing page of your website."
              />
            </Form.Group>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="wd-points">Points</Form.Label>
                  <Form.Control 
                    id="wd-points" 
                    type="number" 
                    defaultValue={100} 
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
                  <Form.Select id="wd-display-grade-as" defaultValue="Letter">
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
                  <Form.Select id="wd-submission-type" defaultValue="Online URL">
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
                    defaultValue="All Students" 
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
                    defaultValue="2025-01-01" 
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
                        defaultValue="2025-01-01" 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
                      <Form.Control 
                        type="date" 
                        id="wd-available-until" 
                        defaultValue="2025-01-01" 
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
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="primary">Save</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    );
}
  