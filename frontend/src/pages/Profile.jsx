import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const [userBlogs, setUserBlogs] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/")
    alert("You have been logged out.");
  };

  const fetchUserBlogs = async () => {
    if (!user) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/blogs/user/${user.id}`);
      if (!response.ok) throw new Error("Failed to fetch blogs");

      const data = await response.json();

      const blogs = Array.isArray(data) ? data : [data];
      setUserBlogs(blogs);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
    }
  };

  const handleBlogDelete = async (blogId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${blogId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) throw new Error("Failed to delete blog");

      setUserBlogs(userBlogs.filter(blog => blog.id !== blogId));
      navigate("/profile");

    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    }
  };

  useEffect(() => {
    fetchUserBlogs();
  }, [user]);

  return (
    <div className="profile min-h-screen flex flex-col items-center justify-center text-white p-10 gap-5">
      {user ? (
        <>
          <h1 className="text-3xl font-semibold">Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          <h3 className="text-3xl text-left font-semibold text-amber-300">Your Blogs</h3>
          <div className="user-blogs grid grid-cols-2 gap-4 mt-6">
            {userBlogs.length > 0 ? (
              userBlogs.map((blog, index) => (
                <Link to={`/blogs/${blog.id}`} key={index}>
                <div
                  key={index}
                  className="blog bg-cover bg-center p-4 rounded-lg text-white shadow-md h-[30vh] flex flex-col justify-end items-end"
                  style={{
                    backgroundImage: `linear-gradient(to top, black, transparent), url(${blog.image_url || ''})`,
                  }}
                >
                  <h2 className="text-xl font-bold">{blog.title}</h2>
                  <p className="text-sm text-slate-300">{new Date(blog.created_at).toLocaleString()}</p>
                  <button 
                    className="bg-red-800 px-2 mt-2 rounded-sm cursor-pointer"
                    onClick={() => handleBlogDelete(blog.id)}
                  >
                    <i className="fa-solid fa-trash"></i>&nbsp;
                  </button>
                </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400">No blogs found.</p>
            )}
          </div>
          <Link to="/blogform">
            <button className="bg-blue-600 py-2 px-4 font-semibold rounded-md my-10 text-white"> <i className="fa-solid fa-pencil"></i>&nbsp; Write A Blog</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-800 px-4 py-2 mt-6 rounded-md font-semibold cursor-pointer fixed top-20 right-20"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </>
      ) : (
        <p>Please log in first.</p>
      )}
    </div>
  );
}
