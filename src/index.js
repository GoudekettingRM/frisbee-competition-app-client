import React from "react";
import ReactDOM from "react-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store/store";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
