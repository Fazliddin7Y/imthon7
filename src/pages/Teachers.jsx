import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogOut, Users, UserPlus, Book, LayoutDashboard, Settings, CreditCard, FileText, Star } from "lucide-react";
import logo from "../assets/logo.png";
import koala from "../assets/koala.png";
import { useGetTeachersQuery } from "../redux/api";

const Teachers = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: teachers, error, isLoading } = useGetTeachersQuery();

  const results = teachers?.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    setShowModal(true);
    localStorage.clear();
    console.log("Logged out");
    setTimeout(() => {
      setShowModal(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen relative">
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

      <div className="flex-1 p-10 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Teachers</h2>
          <Link
            to="/teacher/add"
            className="bg-[#4299e1] text-white px-4 py-2 rounded hover:bg-[#3182ce]"
          >
            Add Teachers
          </Link>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a teacher by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded bg-[#fefcfc] border border-gray-200"
          />
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : results?.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-20">
            <img src={koala} alt="no teachers" className="w-64 mb-4" />
            <h3 className="text-xl font-semibold">No Teachers at this time</h3>
            <p className="text-sm mt-1">
              Teachers will appear here after they enroll in your school.
            </p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-3">Name</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Class</th>
                <th className="p-3">Email address</th>
                <th className="p-3">Gender</th>
              </tr>
            </thead>
            <tbody>
              {results.map((teacher, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={teacher.avatar || "https://i.pravatar.cc/40"}
                      alt={teacher.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{teacher.name}</span>
                  </td>
                  <td className="p-3">{teacher.subject}</td>
                  <td className="p-3">{teacher.class}</td>
                  <td className="p-3">{teacher.email}</td>
                  <td className="p-3">{teacher.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          <div className="p-4 rounded shadow text-center text-lg w-full max-w-xs">
            Logging out...
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
