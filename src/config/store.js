import { createStore } from "redux";
import movieReducer from "../store/reducers/movie";

export const store = createStore(movieReducer);
