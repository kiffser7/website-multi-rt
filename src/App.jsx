import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";
import Tentangpage from "./pages/Tentangpage";
import Pembicara from "./pages/Pembicara";
import Kontakpage from "./pages/Kontakpage";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* Contact */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tentang-event" element={<Tentangpage />} />
        <Route path="/pembicara-event" element={<Pembicara />} />
        <Route path="/kontak-event" element={<Kontakpage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
