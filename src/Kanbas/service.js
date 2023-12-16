import axios from "axios";
const MODULES_URL = "https://kanbas-node-server-app-cs1234-sp23.onrender.com/api/modules";

export const fetchCourses = async () => {
  const response = await axios.get("http://localhost:4000/api/courses");
  return response.data;
};

export const deleteCourse = async (course) => {
  const response = await axios.delete(
    `http://localhost:4000/api/courses/${course._id}`
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    "http://localhost:4000/api/courses",
    course
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `http://localhost:4000/api/courses/${course._id}`,
    course
  );
  return response.data;
};

export const fetchCourseById = async (courseId) => {
  const response = await axios.get(
    `http://localhost:4000/api/courses/${courseId}`
  );
  return response.data;
};