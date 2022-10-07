import Home from "./pages/Home";
import Login from "./pages/Login";
import PorductList from "./pages/PorductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state);
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route index element={<Home user={user} />} />
      <Route path="/products/:category" element={<PorductList user={user} />} />
      <Route path="/product/:id" element={<Product user={user} />} />
      <Route path="/cart" element={<Cart user={user} />} />
      <Route
        path="/login"
        element={user ? <Navigate replace to="/" /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate replace to="/" /> : <Register />}
      />
    </Routes>
  );
};

export default App;
