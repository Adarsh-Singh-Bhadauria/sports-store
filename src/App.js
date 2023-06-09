import Category from "./components/Category";
import Objects from "./components/Objects";
import Footer from "./components/Footer";
import Tiles from "./components/Tiles";
import Head from "./components/Head";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar/>
      <Head/>
      <Tiles/>
      <Objects/>
      <Category/>
      <Footer/>
    </>
  );
}

export default App;
