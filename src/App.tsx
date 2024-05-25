import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Public from "./pages/layouts/Public";
import Dashboard from "./pages/Dashboard";
import HotDishes from "./pages/HotDishes";
import ColdDishes from "./pages/ColdDishes";

const App = () => {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="dashboard"  element={<Dashboard/>}>
            <Route index element={<HotDishes/>}/>
            <Route path="hot_dishes" element={<HotDishes/>}/>
            <Route path="cold_dishes" element={<ColdDishes/>}/>
          </Route>
          {/* <Route path='/dashboard' element={<Dashboard/>}> */}
          {/*   <Route path='hot_dishes' element={<HotDishes/>}/> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
