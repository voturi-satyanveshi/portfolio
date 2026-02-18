import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Domain from "./pages/Domain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/domain/:type" element={<Domain />} />
      </Routes>
    </Router>
  );
}

export default App;
