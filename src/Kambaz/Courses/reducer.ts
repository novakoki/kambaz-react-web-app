import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";

type Course = {
  _id: string;
  name: string;
  description: string;
}

const initialState = {
  courses: courses as Course[],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
        state.courses = [...state.courses, course];
    },
    deleteCourse: (state, { payload: courseId }) => {
        state.courses = state.courses.filter((course) => course._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
        state.courses = state.courses.map((c) => c._id === course._id ? course : c);
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
