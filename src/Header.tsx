import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-4 bg-gray-200 shadow-md">
      <div className="flex justify-around">
        {/* Clothes Section */}
        <div className="text-center">
          <Link to="/Clothes" className="text-xl font-bold block">
            Clothes
          </Link>
          <div className="mt-1 space-x-2 text-sm">
            <Link to="/Clothes/Tshirt" className="hover:underline">
              Tshirt
            </Link>
            <Link to="/Clothes/Pants" className="hover:underline">
              Pants
            </Link>
            <Link to="/Clothes/Jacket" className="hover:underline">
              Jacket
            </Link>
          </div>
        </div>

        {/* GolfClubs Section */}
        <div className="text-center">
          <Link to="/GolfClubs" className="text-xl font-bold block">
            GolfClubs
          </Link>
          <div className="mt-1 space-x-2 text-sm">
            <Link to="/GolfClubs/Driver" className="hover:underline">
              Driver
            </Link>
            <Link to="/GolfClubs/Wooder" className="hover:underline">
              Wooder
            </Link>
            <Link to="/GolfClubs/Hybrid" className="hover:underline">
              Hybrid
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
