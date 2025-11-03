import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="AppHeader">
          <div className="AppBrand">
            <span className="AppBrand-highlight">Custom Photo Collage</span>
          </div>
          <nav className="AppNav">
            <Link to="/custom-photo-collage/terms">Terms of Use</Link>
            <Link to="/custom-photo-collage/privacy">Privacy Policy</Link>
            <Link to="/custom-photo-collage/support">Support</Link>
          </nav>
        </header>

        <main className="AppContent">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/custom-photo-collage/terms" replace />}
            />
            <Route
              path="/custom-photo-collage/terms"
              element={<TermsOfUse />}
            />
            <Route
              path="/custom-photo-collage/privacy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/custom-photo-collage/support"
              element={<Support />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
