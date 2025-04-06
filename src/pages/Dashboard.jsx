import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogOut, Users, UserPlus, Book, LayoutDashboard, Settings, CreditCard, FileText, Star } from "lucide-react";
import logo from "../assets/logo.png"; 

function Dashboard() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    setShowModal(true);
    setTimeout(() => {
      localStorage.removeItem("user");
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-64 bg-[#0A1F44] text-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-col items-center justify-center mb-10">
                  <img src={logo} alt="Logo" className="w-12 h-12 mb-2" />
                  <span className="text-sm text-center">Udemy Inter. school</span>
                </div>
      
                <nav className="space-y-4">
                  <Link
                    to="/dashboard"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                      location.pathname === "/dashboard" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <LayoutDashboard size={18} /> Dashboard
                  </Link>
                  <Link
                    to="/teachers"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                      location.pathname === "/teachers" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <Users size={18} /> Teachers
                  </Link>
                  <Link
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                      location.pathname === "/students" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <UserPlus size={18} /> Students
                  </Link>
                  <Link
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                      location.pathname === "/billing" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <CreditCard size={18} /> Billing
                  </Link>
                  <Link
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                      location.pathname === "/settings" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <Settings size={18} /> Settings and profile
                  </Link>
                  <Link
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                      location.pathname === "/exams" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <FileText size={18} /> Exams
                  </Link>
                  <Link
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                      location.pathname === "/features" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <Star size={18} /> Features
                  </Link>
                </nav>
              </div>
      
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg mt-6"
              >
                <LogOut size={18} /> Log out
              </button>
      </div>

      <div className="flex-1 p-10">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-600">Learn how to launch faster</p>
          <p className="text-xs text-gray-500">watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-2">
          Welcome to your dashboard Udemy school
        </h2>
        <p className="text-center text-gray-600 mb-8">{user?.email}</p>

        <div className="space-y-6 max-w-2xl mx-auto">
          <Link to="/admins" className="flex items-start gap-4 border rounded-lg p-4 hover:bg-gray-50">
            <Users size={32} className="text-blue-600" />
            <div>
              <p className="text-lg font-medium">Add other admins</p>
              <p className="text-sm text-gray-600">
                Create rich course content and coaching products for your students.
                When you give them a pricing plan they'll appear on your site!
              </p>
            </div>
          </Link>

          <Link to="/classes" className="flex items-start gap-4 border rounded-lg p-4 hover:bg-gray-50">
            <Book size={32} className="text-blue-600" />
            <div>
              <p className="text-lg font-medium">Add classes</p>
              <p className="text-sm text-gray-600">
                Create rich course content and coaching products for your students.
                When you give them a pricing plan, they'll appear on your site!
              </p>
            </div>
          </Link>

          <Link to="/students" className="flex items-start gap-4 border rounded-lg p-4 hover:bg-gray-50">
            <UserPlus size={32} className="text-blue-600" />
            <div>
              <p className="text-lg font-medium">Add students</p>
              <p className="text-sm text-gray-600">
                Create rich course content and coaching products for your students.
                When you give them a pricing plan, they'll appear on your site!
              </p>
            </div>
          </Link>
        </div>

        {showModal && (
          <div className="mt-8 flex justify-center">
            <div className="p-4 rounded shadow text-center text-lg">
              Logging out...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
