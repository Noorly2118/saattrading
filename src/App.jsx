import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import ScrollToTop from "./components/scrolltotop";

import Home from './pages/Home';
import RequestQuote from './pages/Requestquote';
import MaterialResolver from "./pages/MaterialOverview/MaterialResolver";
import SupplyCapability from "./pages/SupplyCapability";
import NotFound  from './pages/notfoundpage';
import Company from './pages/Company';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/materials/:slug" element={<MaterialResolver />} />
        <Route path="/Supply-capability" element={<SupplyCapability/>}/>
        <Route path="/Company" element={<Company/>}/>
                <Route path="/Contact" element={<Contact/>}/>


        {/* Add more routes later */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;