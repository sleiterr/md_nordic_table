import {
  Navigate,
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import LoginLayout from "./components/Auth/LoginLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/Booking/Confirmation";
import Backoffice from "./pages/Backoffice/Backoffice";
import Booking from "./pages/Booking/Booking";
import Menu from "./pages/Menu/Menu";

function App() {
  // useLocalStorage is a custom hook that allows us to store the token in local storage and keep it in sync with the state
  const [token, setToken] = useLocalStorage("token", null);
  const location = useLocation();
  const navigate = useNavigate();

  // knownRoutes is an array of routes where we want to show the header and footer, we check if the current location is included in this array to conditionally render the header and footer
  const knownRoutes = ["/", "/booking", "/menu", "/confirmation", "/login"];
  const showHeader = knownRoutes.includes(location.pathname);

  // Handle login by setting the token and navigating to the backoffice
  const handleLogin = (newToken) => {
    setToken(newToken);
    navigate("/backoffice");
  };

  // Handle logout by clearing the token and navigating to the login page
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    // localStorage.removeItem("favorites");
    navigate("/login");
  };

  return (
    <>
      {showHeader && <Header token={token} onLogout={handleLogout} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route
            path="/login"
            element={<LoginLayout onLogin={handleLogin} />}
          />
          <Route
            path="/backoffice"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Backoffice token={token} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showHeader && <Footer />}
      <ToastContainer position="top-center" autoClose={2500} />
    </>
  );
}

export default App;
