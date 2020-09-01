import {
  GET_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
  GET_PLANS,
  GET_PLANS_FAIL,
  GET_PLANS_SUCCESS,
  GET_CONNECTIONS,
  GET_CONNECTIONS_SUCCESS,
  GET_CONNECTIONS_FAIL,
  GET_TUTORS,
  GET_TUTORS_SUCCESS,
  GET_TUTORS_FAIL,
  GET_SUBJECTS,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
  GET_SCHOOLS,
  GET_SCHOOLS_SUCCESS,
  GET_SCHOOLS_FAIL,
  GET_LEVELS_FAIL,
  GET_LEVELS_SUCCESS,
  GET_LEVELS,
  INIT_APP,
  GET_BLOG_LIST_SUCCESS,
} from "../Type";

const INITIAL = {
  tutors: null,
  connections: null,
  subjects: null,
  levels: null,
  plans: null,
  schools: null,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    // JOB
    case GET_JOBS:
      return { ...state, JOBS: null };
    case GET_JOBS_SUCCESS:
      return { ...state, JOBS: action.payload };
    case GET_JOBS_FAIL:
      return { ...state, JOBS: null };

    // PLANS
    case GET_PLANS:
      return { ...state, plans: null };
    case GET_PLANS_SUCCESS:
      return { ...state, plans: action.payload };
    case GET_PLANS_FAIL:
      return { ...state, plans: null };

    // CONNECTIONS
    case GET_CONNECTIONS:
      return { ...state, connections: null };
    case GET_CONNECTIONS_SUCCESS:
      return { ...state, connections: action.payload };
    case GET_CONNECTIONS_FAIL:
      return { ...state, connections: null };

    // TUTORS
    case GET_TUTORS:
      return { ...state, tutors: null };
    case GET_TUTORS_SUCCESS:
      return { ...state, tutors: action.payload };
    case GET_TUTORS_FAIL:
      return { ...state, tutors: null };

    // LEVELS
    case GET_LEVELS:
      return { ...state, levels: null };
    case GET_LEVELS_SUCCESS:
      return { ...state, levels: action.payload };
    case GET_LEVELS_FAIL:
      return { ...state, levels: null };

    // SUBJECTS
    case GET_SUBJECTS:
      return { ...state, subjects: null };
    case GET_SUBJECTS_SUCCESS:
      return { ...state, subjects: action.payload };
    case GET_SUBJECTS_FAIL:
      return { ...state, subjects: null };

    // SCHOOLS
    case GET_SCHOOLS:
      return { ...state, schools: null };
    case GET_SCHOOLS_SUCCESS:
      return { ...state, schools: action.payload };
    case GET_SCHOOLS_FAIL:
      return { ...state, schools: null };

    case GET_BLOG_LIST_SUCCESS:
      return { ...state, bloglist: action.payload };
    default:
      return state;
  }
};
