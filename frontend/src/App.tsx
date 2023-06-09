/* MODULES */
import { BrowserRouter } from "react-router-dom";

/* STYLES */
import "./assets/css/App.css";

/* COMPONENTS */
import AdminSpace from "./pages/admin/AdminSpace";

function App() {
  return (
    <BrowserRouter>
      <AdminSpace />
    </BrowserRouter>
  );
}

export default App;
