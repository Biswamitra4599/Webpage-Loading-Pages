import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import LoaderPage from "./pages/LoaderPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/loader/:id" element={<LoaderPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
