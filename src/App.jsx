import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./components/SiteLayout";
import BuyRentPage from "./pages/BuyRentPage";
import ContactPage from "./pages/ContactPage";
import GroupPage from "./pages/GroupPage";
import HomePage from "./pages/HomePage";
import InvestmentsPage from "./pages/InvestmentsPage";
import ServicesPage from "./pages/Services.jsx";
import RealEstatePage from "./pages/RealEstatePage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/buy-rent" element={<BuyRentPage />} />
          <Route path="/amanat-group" element={<GroupPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
