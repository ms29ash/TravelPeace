import './App.css';
import Home from './Page/Home';
import { Routes, Route } from "react-router-dom";
import Places from './Page/Places';
import ScrollTop from './Components/ScrollTop';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/places' element={<Places />} />

      </Routes>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;
