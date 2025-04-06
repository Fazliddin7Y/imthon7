import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Users, UserPlus, FileText, LayoutDashboard, Settings, CreditCard, Star } from "lucide-react";
import logo from "../assets/logo.png";

const TeacherDetails = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setTeacher(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teacher details", error);
      });
  }, [id]);

  if (!teacher) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
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

      <div className="flex-1 p-10 bg-white overflow-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">{teacher.name}'s Details</h2>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex mb-6">
            <img
              src={`https://i.pravatar.cc/150?img=${teacher.id}`}
              alt={teacher.name}
              className="w-32 h-32 rounded-full mr-6"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              <p className="text-sm text-gray-600">{teacher.email}</p>
              <p className="text-sm text-gray-600">{teacher.phone}</p>
              <p className="text-sm text-gray-600">{teacher.website}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Details</h4>
            <p><strong>Company:</strong> {teacher.company.name}</p>
            <p><strong>Address:</strong> {teacher.address.street}, {teacher.address.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
