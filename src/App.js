import Navbar from './Components/Navbar'
import Navbar1_1 from './Components/Navbar1_1'
import Comp1 from './Components/Comp1'
import Comp1_1 from './Components/Comp1_1'
import Comp2 from './Components/Comp2'
import Comp3 from './Components/Comp3'
import Comp4 from './Components/Comp4'
import './App.css';
import Footer from './Components/Footer'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="App">
      
      <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-ride="carousel" data-interval="500" data-pause="false" data-wrap="false" >
        <div class="carousel-inner" >
          <div class="carousel-item active">
              <Navbar1_1 />
              <Comp1_1 />
          </div>
          <div class="carousel-item">
              <Navbar />
              <Comp1 />
          </div>
        </div>
      </div>
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Footer />
    </div>
  );
}

export default App;
