import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    navigate("/login");
  };

  return (
    <div className="max-w-sm mx-auto p-6 border border-gray-300 rounded-xl text-center mt-24">
      <h2 className="text-2xl font-semibold mb-6">Royxatdan otish</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Ismingiz"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md text-lg"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md text-lg"
        />
        <input
          type="password"
          placeholder="Parol"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md text-lg"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm">
        Akkountingiz bormi? <Link to="/login" className="text-blue-600 hover:text-blue-700">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
