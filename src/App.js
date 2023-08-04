import './App.css';
import Home from './Pages/Home';
import { FetchData } from './components/FetchData';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/science" element = {<FetchData cat = "science" />} />
          <Route exact path = "/technology" element = {<FetchData cat = "technology" />} />
          <Route exact path = "/health" element = {<FetchData cat = "health" />} />
          <Route exact path = "/entertainment" element = {<FetchData cat = "entertainment" />} />
          <Route exact path = "/business" element = {<FetchData cat = "business" />} />
          <Route exact path = "/politics" element = {<FetchData cat = "politics" />} />
          <Route exact path = "/sports" element = {<FetchData cat = "sports" />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
