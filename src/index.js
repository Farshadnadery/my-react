import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import TheTop from "./components/TheTop";
import "./App.css"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <TheTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);