import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// Enable Redux DevTools for debugging (if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with middleware
// - rootReducer: Handles state updates
// - thunk: Enables async actions
// - Redux DevTools: For debugging in development
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;