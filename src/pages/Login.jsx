import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("/dashboard");
    } else {
      alert("Email yoki parol xato");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
        />
        <input
          type="password"
          placeholder="Parol"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Akkount yoqmi?{" "}
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          Royxatdan otish
        </Link>
      </p>
    </div>
  );
}

export default Login;
