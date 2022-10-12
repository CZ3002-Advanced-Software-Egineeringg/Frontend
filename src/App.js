import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";


//Import Pages
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import About from "./pages/About";
import Home from "./pages/Home";
import Forgotpassword from "./pages/Forgotpassword";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Routes>
              {/* private routes */}

              {/* public routes */}
              <Route exact path="/" element={<Login />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/forgotpassword" element={<Forgotpassword />} />
              <Route exact path="/*" element={<Login />} />          


          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
