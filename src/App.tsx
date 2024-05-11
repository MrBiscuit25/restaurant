import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Public from "./pages/layouts/Public";

const App = () => {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
