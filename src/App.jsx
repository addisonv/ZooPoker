import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Roadmap from "./components/roadmap/Roadmap";
import Faq from "./components/faq/Faq";
import Team from "./components/team/Team";
import "./app.scss";
import { useState } from 'react';
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Roadmap/>
        <div className="faq">
          <Faq/>
        </div>
        <Team/>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
