import { createSlice } from "@reduxjs/toolkit";
type Assignment = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    assign_to: string;
    dueDate: string;
    availableDate: string;
    availableUntil: string;
    modules: string[];
}

const initialState = {
  assignments:  [] as Assignment[],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload: assignments }: { payload: Assignment[] }) => {
      state.assignments = assignments;
    },
    addAssignment: (state, { payload: assignment }: { payload: Assignment }) => {
      state.assignments = [...state.assignments, assignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }: { payload: Assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;