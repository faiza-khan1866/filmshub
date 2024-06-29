import { GET_IMG_BASE_URL } from "../actionTypes/actionTypes";

const initialState = {
  url: "",
};

const imgUrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMG_BASE_URL:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

export default imgUrlReducer;
