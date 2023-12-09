import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/**
 * ⚠️ I've added jsconfig.json file at the root level now you can import from src/ folder level directly
 * //////////////////////////////////////////
 * 👇 THERE IS NOTHING RIGHT OR WRONG IN THESE CHANGES BUT MOST DEVELOPERS IN REACT COMMUNITY DOING THIS SO WE WILL FOLLOW !!!
 * components/forms should be Capitalized
 * Services folder should be lower case as the rest of src/* folders
 * Services files should be Capitalized as most developers do
 * src/ui folder has 2 characters so you can capitalize it like this "UI" or change its name like "core-ui" or "views"
 * //////////////////////////////////////////
 * 🔃 REFACTORING
 * ui/Spinner and ui/SpinnerMini - you have created 2 simillar components but you have to make them as one dynamic component with differente size variations
 *
 * 🔴 BUGs
 * You are not using your custom input component in login form
 *
 * You have to link your input with the label by id and htmlFor so that I can select the input by label in testing environment
 * LoginForm is not perfect in small screens, you can enhance it by using min() in scss on padding
 *
 * Login page is submitting even if the inputs are empty or invalid
 *
 * If I clicked on the Login button and the loading spinner is displayed, I still can click on the button and do API calls while the spinner is there
 *
 * In signup form when you submit the form it adds a spinner overall the page but in Login you add the spinner inside the button, You have to follow one design decision of one topic, its better to add it inside the button on all forms submission
 *
 * If you signed up with a duplicate username in the database it returns an error which is fine, but it shouldn't navigate me or even do any signup-post functionalities unless everything is valid in the form
 *
 * If you signed up the system will navigate you to the login page but if you didn't logged it explicitly and refresh the page on the login page the system will log you in implicitly, you have to make the user auto-login after the signup to solve this
 *
 * You have to add caching layer by using react-query package so that you can reduce redundant API calls
 */
