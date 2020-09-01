import { SIDEBAR_TOGGLE } from "../Type";

const INITIAL = {
  isOpen: false,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE: {
      const { isOpen } = action.data;
      return { ...state, isOpen };
    }

    default:
      return state;
  }
};
