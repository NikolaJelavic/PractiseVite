import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/context/books.jsx";
// import { NavigationProvider } from "./context/navigation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        {/* <NavigationProvider> */}
          <App />
        {/* </NavigationProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
