import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Public from "./pages/layouts/Public";
import Home from "./pages/Home";
import HotDishes from "./pages/HotDishes";
import ColdDishes from "./pages/ColdDishes";
import Soup from "./pages/Soup";
import Grill from "./pages/Grill";
import Appetizer from "./pages/Appetizer";
import Dessert from "./pages/Dessert";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="home"  element={<Home/>}>
            <Route index element={<HotDishes/>}/>
            <Route path="hot_dishes" element={<HotDishes/>}/>
            <Route path="cold_dishes" element={<ColdDishes/>}/>
            <Route path="soup" element={<Soup/>}/>
            <Route path="grill" element={<Grill/>}/>
            <Route path="appetizer" element={<Appetizer/>}/>
            <Route path="dessert" element={<Dessert/>}/>
          </Route>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
