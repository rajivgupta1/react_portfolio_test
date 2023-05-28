import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Navigation} from './Components/Navigation';
import { AboutMe } from './Components/AboutMe';
import { ContactMe } from './Components/ContactMe';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { Hero } from './Components/Hero';
import { Footer } from './Components/Footer';
import { MenuItem } from './Components/MenuItem';

function App() {
  return (
    <div >
      {/* <Navigation/> */}
      <Hero/>
      <Skills/>
      <Projects/>
      <AboutMe/>
      <ContactMe/>
      <Footer/>
      <MenuItem/>
    </div>
  );
}

export default App;
