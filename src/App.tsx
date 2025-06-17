import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./page/Homepage";
import NotFound from "./page/NotFound";
import AppLayout from "./components/AppLayout";
import About from "./page/About";
import Utilities from "./page/Utilities";
import AIPersonas from "./page/AIPersonas";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/personas" element={<AIPersonas />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
