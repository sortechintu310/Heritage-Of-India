import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function BlogForm() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in first.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          user_id: user.id,
        }),
      });

      if (response.ok) {
        navigate("/profile");
        setFormData({
          title: "",
          content: "",
          image_url: "",
        });
      } else {
        alert("Failed to post blog. Please try again.");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="blog-form min-h-screen flex items-center justify-center bg-gray-900 p-8 text-white">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter blog content"
              className="w-full border border-gray-600 rounded-lg px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}
