import { Routes, Route, Navigate }
  from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
export default function Kambaz() {
  const [myCourses, setMyCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const myCourses = await userClient.findMyCourses();
      setMyCourses(myCourses);
      const allCourses = await courseClient.fetchAllCourses();
      setAllCourses(allCourses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setAllCourses([ ...allCourses, newCourse ]);
  };
  const deleteCourse = async (id: string) => {
    await courseClient.deleteCourse(id);
    setAllCourses(allCourses.filter((course) => course._id !== id));
  };

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setAllCourses(allCourses.map((c) => c._id === course._id ? course : c));
  };

  return (
    <Session>
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard myCourses={myCourses} allCourses={allCourses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} refreshCourses={fetchCourses} /></ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={allCourses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
    </Session>
);}

