
import AppRoutes from "./app/routes";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoaderPage from "./pages/LoaderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loader/:id" element={<LoaderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
