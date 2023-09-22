import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReviewProvider } from "./context/ReviewContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </ThemeProvider>
  </>
);
