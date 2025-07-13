import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="bg-black/40 backdrop-blur-md w-full text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <h2 className="text-3xl font-bold tracking-wide">
          <NavLink to="/" className="hover:text-red-300 transition duration-300">
            FoodRecipe
          </NavLink>
        </h2>

        {/* Search */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder="Enter items..."
            className="w-full px-5 py-2.5 rounded-full bg-white/20 text-white placeholder-white backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:drop-shadow-glow transition"
          />
        </form>

        {/* Links */}
        <ul className="flex gap-6 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-red-300 font-semibold" : "text-white"
                } hover:text-red-300 hover:drop-shadow-glow`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-red-300 font-semibold" : "text-white"
                } hover:text-red-300 hover:drop-shadow-glow`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
