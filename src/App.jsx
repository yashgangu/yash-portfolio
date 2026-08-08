import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TrainingCertifications from "./components/TrainingCertifications";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <TrainingCertifications />
            <Education />
             <Projects />
            <Contact />
            <Footer /> 
        </>
    );
}

export default App;