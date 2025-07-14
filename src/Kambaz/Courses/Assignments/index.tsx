import { ListGroup, Button, InputGroup, Form } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="flex-grow-1 me-3">
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search for Assignments" 
                id="wd-search-assignment"
              />
            </InputGroup>
          </div>
          <div className="d-flex">
            <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
              <FaPlus className="me-2" />
              Group
            </Button>
            <Button variant="secondary" size="lg" id="wd-add-assignment">
              <FaPlus className="me-2" />
              Assignment
            </Button>
          </div>
        </div>
        
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" /> 
                ASSIGNMENTS
              </div>
              <div>
              <span className="text-muted border border-2 rounded-pill px-2 py-1">40% of Total</span>
              <Button variant="secondary" size="sm">
                <FaPlus />
              </Button>
              <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 border-left-green">
                <div className="d-flex justify-content-between align-items-start">
                <BsGripVertical className="me-2 fs-3 text-muted" />
                  <div className="flex-grow-1">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-decoration-none fw-bold"
                    >
                      A1 - ENV + HTML
                    </a>
                    <div className="text-muted small mt-1">
                      Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pts
                    </div>
                  </div>
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </ListGroup.Item>
              
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 border-left-green">
                <div className="d-flex justify-content-between align-items-start">
                <BsGripVertical className="me-2 fs-3 text-muted" />
                  <div className="flex-grow-1">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/124"
                      className="wd-assignment-link text-decoration-none fw-bold"
                    >
                      A2 - CSS + Bootstrap
                    </a>
                    <div className="text-muted small mt-1">
                      Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100pts
                    </div>
                  </div>
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </ListGroup.Item>
              
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 border-left-green">
                <div className="d-flex justify-content-between align-items-start">
                <BsGripVertical className="me-2 fs-3 text-muted" />
                  <div className="flex-grow-1">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/125"
                      className="wd-assignment-link text-decoration-none fw-bold"
                    >
                      A3 - JavaScript + React
                    </a>
                    <div className="text-muted small mt-1">
                      Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100pts
                    </div>
                  </div>
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
}
  