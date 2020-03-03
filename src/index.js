import React from "react";
import ReactDOM from "react-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store/store";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
