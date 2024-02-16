import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Services />
      <Features/>
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
