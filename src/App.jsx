import { Routes, Route, Navigate } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PartiesKeepsakes from "./pages/PartiesKeepsakes";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/parties-and-keepsakes" element={<PartiesKeepsakes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
