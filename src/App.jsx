import {Home} from "./components/pages/home"
import {VinoTeca} from "./components/pages/vinoteca"
import {About} from "./components/pages/about"
import {Details} from "./components/pages/details"
import {NotFound} from "./components/pages/notFound"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="bg-base-200">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vinoteca" element={<VinoTeca />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/detalles" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
    </div>
  )
}

export default App
