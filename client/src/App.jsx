import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Intake from "./pages/Intake";
import Farmers from "./pages/Farmers";
import Payout from "./pages/Payout";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/payout" element={<Payout />} />
      </Routes>
    </BrowserRouter>
  );
}
