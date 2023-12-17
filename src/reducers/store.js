import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./index";

/**
 * Configure Dev tool
 */
const composeEnhancers = composeWithDevTools({
  name: "ImageRecognition",
});

/**
 * Prepare the Redux Store
 */
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
