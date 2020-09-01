import { get } from "./Api";

export const getTutors = () => {
  return get("/users/tutors");
};
export const getPlans = () => {
  return get("/plans");
};

export const getJobs = () => {
  return get("/jobs");
};
export const getConnections = () => {
  return get("/connections");
};

export const getLevels = () => {
  return get("/levels");
};

export const getSubjects = (level_id = 1) => {
  return get(`/subjects?level_id=${level_id}`);
};

export const getSchools = () => {
  return get("/schools");
};

export const getProfile = () => {
  return get("/users/profile");
};

export const getBlogListing = () => {
  return get("/blogs/listing");
};
