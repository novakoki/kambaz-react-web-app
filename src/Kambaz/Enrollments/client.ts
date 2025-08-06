import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const getAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};