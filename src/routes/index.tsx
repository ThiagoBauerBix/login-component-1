import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
