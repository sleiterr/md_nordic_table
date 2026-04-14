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
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Menu from "./pages/Menu/Menu";

function App() {
  // useLocalStorage is a custom hook that allows us to store the token in local storage and keep it in sync with the state
  const [token, setToken] = useLocalStorage("token", null);
  const location = useLocation();
  const navigate = useNavigate();

  // Define routes where the header should be hidden
  const hideHeaderRoutes = ["/contact-confirmation", "/login", "/backoffice"];
  // Determine if the header should be shown based on the current location
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
