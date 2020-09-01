import {
  GET_CONNECTIONS,
  GET_CONNECTIONS_SUCCESS,
  GET_CONNECTIONS_FAIL,
  GET_TUTORS_FAIL,
  GET_TUTORS,
  GET_TUTORS_SUCCESS,
  GET_PLANS,
  GET_PLANS_SUCCESS,
  GET_PLANS_FAIL,
  GET_LEVELS,
  GET_LEVELS_SUCCESS,
  GET_LEVELS_FAIL,
  GET_SUBJECTS,
  GET_SUBJECTS_FAIL,
  GET_SUBJECTS_SUCCESS,
  GET_SCHOOLS,
  GET_SCHOOLS_FAIL,
  GET_SCHOOLS_SUCCESS,
  GET_BLOG_LIST,
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  INIT_APP,
} from "../Type";
import {
  getConnections,
  getTutors,
  getPlans,
  getLevels,
  getSubjects,
  getSchools,
  getProfile,
  getBlogListing,
} from "../../Api/Core";

export const getConnectionAction = () => async (dispatch) => {
  dispatch({ type: GET_CONNECTIONS });
  const res = await getConnections();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_CONNECTIONS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_CONNECTIONS_FAIL, payload: res.data });
  }
};

export const getTutorAction = () => async (dispatch) => {
  dispatch({ type: GET_TUTORS });
  const res = await getTutors();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_TUTORS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_TUTORS_FAIL, payload: res.data });
  }
};

export const getPlanAction = () => async (dispatch) => {
  dispatch({ type: GET_PLANS });
  const res = await getPlans();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_PLANS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_PLANS_FAIL, payload: res.data });
  }
};

export const getLevelAction = () => async (dispatch) => {
  dispatch({ type: GET_LEVELS });
  const res = await getLevels();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_LEVELS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_LEVELS_FAIL, payload: res.data });
  }
};
export const getSubjectAction = (level_id) => async (dispatch) => {
  dispatch({ type: GET_SUBJECTS });
  const res = await getSubjects(level_id);
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_SUBJECTS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_SUBJECTS_FAIL, payload: res.data });
  }
};
export const getSchoolAction = () => async (dispatch) => {
  dispatch({ type: GET_SCHOOLS });
  const res = await getSchools();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_SCHOOLS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_SCHOOLS_FAIL, payload: res.data });
  }
};

export const getProfileAction = () => async (dispatch) => {
  dispatch({ type: GET_SUBJECTS });
  const res = await getSubjects();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_SUBJECTS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_SUBJECTS_FAIL, payload: res.data });
  }
};

export const initAppAction = () => (dispatch) => {
  dispatch({ type: INIT_APP });
};

export const getBlogListingAction = () => async (dispatch) => {
  dispatch({ type: GET_BLOG_LIST });
  const res = await getBlogListing();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_BLOG_LIST_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_BLOG_LIST_FAIL, payload: res.data });
  }
};
