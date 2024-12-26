import { CreateStore } from "redux";
import todoReducer from "./reducer/todoReducer";

const store = CreateStore(todoReducer);

export default store;
