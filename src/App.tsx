import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Components */
import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";
/* Pages */
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NewProject } from "./pages/NewProject";

import GlobalStyle from "./styles/GlobalStyles";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Routes of app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      {/* <Footer /> */}
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
