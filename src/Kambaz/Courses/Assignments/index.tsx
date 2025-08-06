import { ListGroup, Button, InputGroup, Form } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { useDispatch } from "react-redux";
import * as assignmentsClient from "./client";
import { useEffect } from "react";
export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const navigate = useNavigate();

  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.fetchAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

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
            <Button variant="secondary" size="lg" id="wd-add-assignment" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/Editor`)}>
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
              {assignments.map((assignment: any) => (
                <ListGroup.Item key={assignment._id} className="wd-assignment-list-item p-3 ps-1 border-left-green">
                  <div className="d-flex justify-content-between align-items-start">
                    <BsGripVertical className="me-2 fs-3 text-muted" />
                    <div className="flex-grow-1">
                      <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link text-decoration-none fw-bold">
                        {assignment.title}
                      </a>
                      <div className="text-muted small mt-1">
                        {assignment.modules.length > 1 ? "Multiple Modules" : assignment.modules[0]} | <strong>Not available until</strong> {assignment.availableDate} | <strong>Due</strong> {assignment.dueDate} | {assignment.points}pts
                      </div>
                    </div>
                    <GreenCheckmark />
                    <FaTrash className="text-danger me-2 mb-1" onClick={() => removeAssignment(assignment._id)}/>
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
}
  