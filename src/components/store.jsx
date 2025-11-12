import { createStore } from "redux";

const savedImage = localStorage.getItem("profileImage") || "";
const initialState = {
  user: {
    name: "",
    email: "",
    image: savedImage,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_IMAGE":
      localStorage.setItem("profileImage", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          image: action.payload, 
        },
      };

    case "DELETE_USER_IMAGE":
      return {
        ...state,
        user: {
          ...state.user,
          image: "", 
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
