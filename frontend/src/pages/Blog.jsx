import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatText } from "../utils/helper.jsx";

export default function Blog() {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`);
            setBlog(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    return (
        <div className="blog h-full p-20 flex flex-col items-start justify-center gap-8 text-white ">
                <h1 className="text-amber-300 font-bold text-4xl">{blog.title}</h1>
                <img src={blog.image_url} alt={blog.title} className="h-[60vh] object-contain rounded-md" />
                <p className="text-xl">{formatText(blog.content)}</p>
                <p className="text-xl text-slate-400">{new Date(blog.created_at).toLocaleString()}</p>
        </div>
    );
}
