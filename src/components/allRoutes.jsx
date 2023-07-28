import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from ".././pages/home";
import Recipe from "../pages/recipe";
import Plans from ".././pages/plans";
import Market from ".././pages/market";
import Wine from ".././pages/wine";
import Gift from ".././pages/gifts";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Pagenotfound from ".././pages/pagenotfound";

function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/market" element={<Market />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/gifts" element={<Gift />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AllRoutes;
