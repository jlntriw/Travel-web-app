import Carousel from "./component/Carousel";
import Destination from "./component/Destination";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import Select from "./component/Select";


function App() {
  return (
    <div>
     <Navbar /> 
     <Hero />
     <Destination />
     <Search />
     <Select />
     <Carousel />
     <Footer />
    </div>
  );
}

export default App;
