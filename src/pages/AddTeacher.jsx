import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeachers = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    subject: "",
    class: "",
    avatar: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://nt-devconnector.onrender.com/create-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to add teacher");
      }

      const result = await response.json();
      console.log("Added:", result);
      navigate("/teachers");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-8 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Add New Teacher</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter teacher name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter email address"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="e.g. Math"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Class
              </label>
              <input
                type="text"
                name="class"
                value={form.class}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="e.g. 8A"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Avatar URL
              </label>
              <input
                type="text"
                name="avatar"
                value={form.avatar}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Optional image URL"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded mt-4 font-medium"
          >
            Add Teacher
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeachers;
