import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

export default function LoginForm() {
  const {login} = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      const userdata = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/${formData.email}`);
      const user = await userdata.json();
      if (response.ok) {
        login(user);
        navigate("/profile");
      } else {
        alert(data.message || "Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center pt-[5rem] bg-slate-900 min-h-screen">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
            Login &nbsp;<i className="fa-solid fa-right-to-bracket"></i>
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don't have an account?
            <Link to="/register" className="text-blue-600 hover:underline ml-1">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
