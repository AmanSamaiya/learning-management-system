import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
  courseList: [],
};

export const getAllCourses = createAsyncThunk(
  "/course/getAllCourses",
  async (data) => {
    try {
      const response = await axiosInstance.get("/courses", data);
      console.log(response);
      toast.promise(response, {
        loading: "Wait! , Fetching all courses",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to load courses",
      });
      return (await response).data.courses;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action?.payload) {
        state.courseList = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;