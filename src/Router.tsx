import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Home/App";
import Repos from "./pages/Repos";
import ReposStarred from "./pages/ReposStarred";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/:user/repos" element={<Repos />} />
        <Route path="/:user/starred" element={<ReposStarred />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
