import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: db.enrollments,
  showAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments", 
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollInCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const newEnrollment = {
        _id: uuidv4(),
        user: userId,
        course: courseId,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollFromCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
    setShowAllCourses: (state, action) => {
      state.showAllCourses = action.payload;
    },
  },
});

export const { setEnrollments, enrollInCourse, unenrollFromCourse, setShowAllCourses } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer; 