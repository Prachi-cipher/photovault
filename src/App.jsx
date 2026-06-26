import "./App.css";
import { useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import CategoryFilter from "./components/CategoryFilter";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedImage, setSelectedImage] =
  useState(null);

  const [selectedCategory, setSelectedCategory] =
  useState("All");

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);



  return (
    <div className={darkMode ? "app dark" : "app "}>
      <Navbar 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <Hero />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

      <Gallery
               searchTerm={searchTerm}
               selectedCategory={selectedCategory}
               setSelectedImage={setSelectedImage}
  />
  <About />
  <Contact />
      <Lightbox
  selectedImage={selectedImage}
  setSelectedImage={setSelectedImage}
/>

<Footer />
    </div>
  );
}


export default App;

