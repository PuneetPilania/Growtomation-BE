import { combineReducers } from "redux-immutable";

import HomeReducer from "./Home/reducer";

const reducers = combineReducers({
  home: HomeReducer,
});

export default reducers;
