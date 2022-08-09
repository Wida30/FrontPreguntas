import "./App.scss";
import Navigator from "./core/Navigator";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Jugar from "./pages/Jugar";
import Contact from "./pages/Contact";
import { SWContextProvider } from "./context/context";


function App() {
  return (
    <>
      <SWContextProvider>
        <Router>
          <Navigator />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/jugar" element={<Jugar />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
      
        </Router>
      </SWContextProvider>
    </>
  );
}

export default App;
