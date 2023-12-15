import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {
        title: "New Assignment",
        description: "New Description",
        dueDate: new Date().getTime().toString(),
        availableFromDate: new Date().getTime().toString(),
        availableUntilDate: new Date().getTime().toString(),
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];         
          
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        resetAssignment: (state, action) => {
            state.assignment = {
                ...initialState.assignment,
            }
        }
    },
});

export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment, resetAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;