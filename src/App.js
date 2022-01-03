import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Verifier from "./pages/Verifier";
import Modifier from "./pages/Modifier";
import User from "./pages/User";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/user" element={<User />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/verifier" element={<Verifier />}></Route>
        <Route exact path="/modifier" element={<Modifier />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
