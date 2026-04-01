import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Features from "./components/Features.jsx";
import FeaturesDetails from "./components/FeaturesDetails.jsx";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <div className="main-gradient">
        <Landing />
        <Features />
        <FeaturesDetails />
      </div>
     
    </>
  );
}

export default App;