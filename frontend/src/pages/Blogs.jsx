import ImageFader from "../components/ImageFader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
    const images = [
        "/images/tajmahal.jpg",
        "/images/artandculture3.jpg",
        "/images/artandculture.jpg",
       "/images/gadsisarlake.jpg",
     ];
     const text = "Blogs";

    const [blogs, setBlogs] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6); 
    
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs`);
            setBlogs(response.data);
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <>
            <div className="blogs h-full">
                <ImageFader images={images} text={text} className={"pb-10"} />
                <div className="blogs-cards h-fit w-full px-20 py-10 grid grid-cols-2 gap-8">
                    {blogs.slice(0, visibleCount).map((blog, index) => (
                        <Link key={index} to={`/blogs/${blog.id}`}>
                            <BlogCard key={index} title={blog.title} author={""} date={new Date(blog.created_at).toLocaleString()} content={blog.content} imageUrl={blog.image_url} />
                        </Link>
                    ))}
                </div>
                {visibleCount < blogs.length && (
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={handleLoadMore}
                            className="px-4 py-2 underline text-lg text-white font-semibold rounded-lg cursor-pointer"
                        >
                            Load More...
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
