import Home from "./pages/Home";
import Login from "./pages/Login";
import PorductList from "./pages/PorductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart"
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector(state => state);
  return(
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/products/:category" element={<PorductList/>} />
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={ user ? <Navigate replace to="/"/> : <Login/>} />
      <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register/>}/>
    </Routes>
  )
};

export default App;