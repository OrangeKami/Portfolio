import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import SideLinks from "./components/SideLinks/SideLinks.jsx";
import SideMail from "./components/SideEmail/SideMail.jsx";
import About from "./components/About/About.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <About />
        <SideLinks />
        <SideMail />
      </div>
      <Footer />
    </>
  );
}

export default App;
