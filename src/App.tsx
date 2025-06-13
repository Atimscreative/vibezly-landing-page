import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./page/Homepage";
import NotFound from "./page/NotFound";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
