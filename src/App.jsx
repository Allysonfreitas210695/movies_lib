import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
