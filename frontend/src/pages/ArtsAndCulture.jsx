import ArtsAndCultureCard from "../components/ArtsAndCultureCard";
import ImageFader from "../components/ImageFader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function ArtsAndCulture() {
    const images = [
        "/images/artandculture.jpg",
        "/images/artandculture2.jpg",
        "/images/artandculture3.jpg",
        "/images/artandculture4.jpg",
    ];
    const text = "Arts & Culture";


    const [artsculture, setArtsCulture] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6); 

    const fetchArtsCulture = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/artandculture`);
            setArtsCulture(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchArtsCulture();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <>
            <div className="artandculture h-full">
                <ImageFader images={images} text={text} className={"pb-10"} />
                <div className="artandculture-cards h-fit w-full px-20 py-10 grid grid-cols-3 gap-8">
                    {artsculture.slice(0, visibleCount).map((artculture, index) => (
                        <Link key={index} to={`/artsandculture/${artculture.id}`}>
                            <ArtsAndCultureCard key={index} name={artculture.name} desc={artculture.description} img={artculture.image_url} />
                        </Link>
                    ))}
                </div>
                {visibleCount < artsculture.length && (
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
