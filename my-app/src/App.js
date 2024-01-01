import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Experience from './Component/Experience';

import Experience2 from './Component/Experience2';
import Footer from './Component/Footer';
import Home from './Component/Home';


import Navbar from './Component/Navbar';
import Main from './Component/Particle';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';
import SocialLinks from './Component/SocialLinks';

function App() {
  return (
    <div>
      <Main></Main>
    
        <Navbar></Navbar>
      
      <Home></Home>
     

 <Experience2></Experience2>
      <About></About>
      
      <Skills></Skills>
    
      <Portfolio></Portfolio>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
      <Footer></Footer>
      
      
    </div>
  );
}


export default App;
