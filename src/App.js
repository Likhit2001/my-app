// import './App.css';

import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Exprience from "./components/Exprience";
import Resume from "./components/Resume";
import Experience1 from "./components/Experience1";

import {
  BrowserRouter as Router,
  Routes ,
  Route,

} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Main/>
        <div className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Experience" element={<Exprience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience1" element={<Experience1/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
