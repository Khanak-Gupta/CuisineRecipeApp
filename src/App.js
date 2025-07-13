import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import bgImage from './img.jpg'; // ✅ Make sure this path is correct

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
      className="text-white font-sans"
    >
      <div className="min-h-screen flex flex-col bg-black bg-opacity-70">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </main>
        <footer className="text-center p-4 text-sm text-gray-300">
          © 2025 MyRecipeApp. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
