import { GET_IMG_BASE_URL } from "../actionTypes/actionTypes";

const getImgUrl = (payload) => {
  return {
    type: GET_IMG_BASE_URL,
    payload: payload,
  };
};

export { getImgUrl };
