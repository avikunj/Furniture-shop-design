import Home from "./component/home/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ViewProduct from "./component/viewProduct/viewProduct";
import ViewProduct1 from "./component/viewProduct/viewProduct1";
import ViewProduct2 from "./component/viewProduct/viewProduct2";

function App() {
  return (
    <div className="FurnitureDesignHomePage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewProduct" element={<ViewProduct />} />
          <Route path="/viewProduct1" element={<ViewProduct1 />} />
          <Route path="/viewProduct2" element={<ViewProduct2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
