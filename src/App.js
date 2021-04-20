import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header3 from "./components/Header3/Header3";
import Header4 from "./components/Header4/Header4";

function App() {
  return (
    <div className="App">
      <Header4 />
      <Header3 />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
