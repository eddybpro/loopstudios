import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PhotosCard from "./components/PhotosCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <Card />
        <PhotosCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
