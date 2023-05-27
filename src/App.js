import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Footer from './components/Footer';



function App() {
  return (
    
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <section id="about">
        <AboutMe />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <Footer />
    </div>
  );
}

export default App;
