import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import store from "./Redux/redux-store"
import reportWebVitals from "./reportWebVitals"

// var iframe = document.createElement("iframe")
// document.getElementsByTagName("widget-by-bookinglane")[0].appendChild(iframe),
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("widget-by-bookinglane")
)

reportWebVitals()
