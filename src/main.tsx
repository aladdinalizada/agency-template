import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// Import the font
import "@fontsource/poppins";

createRoot(document.getElementById("root")!).render(<App />);
