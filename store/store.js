import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
// import { reduxFirestore, getFirestore } from "redux-firestore";
// import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
// import config from "../firebase";

const store = createStore(
  rootReducer
  //   compose(
  //   applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }))
  //   reduxFirestore(config),
  //   reactReduxFirebase(config)
  //   )
);

export default store;
