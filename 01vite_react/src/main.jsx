import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

/* const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
}; */

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google"
);

createRoot(document.getElementById("root")).render(
  <App/>
);

/* createRoot(document.getElementById("root")).render(

    reactElement 
   
 
); */

/* createRoot(document.getElementById("root")).render(
  {anotherElement}
  {
  *if used without braces plain-text will be rendered because we
    are using jsx and in jsx everything inside jsx must be a valid react
    element.Otherwise anotherElement will be treated a text node and rendered as
    a text
}
); */
