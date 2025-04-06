import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          School Management
        </Link>

        <div className="space-x-4">
          {token ? (
            <>
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
              <Link to="/teachers" className="text-white">
                Teachers
              </Link>
              <button
                onClick={handleLogout}
                className="text-white border border-white px-4 py-2 rounded"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
