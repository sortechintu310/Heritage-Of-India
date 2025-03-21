import ImageFader from "../components/ImageFader";
import HeritageCard from "../components/HeritageCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Heritages() {
    const images = [
        "/images/tajmahal.jpg",
        "/images/kolkata.jpg",
        "/images/redfort.webp",
        "/images/tomb.jpg",
        "/images/hawamahal.jpg"
    ];
    const text = "Heritage Sites";

    const [heritages, setHeritages] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);

    const fetchHeritages = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/heritages`);
            setHeritages(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchHeritages();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <>
            <div className="heritage h-full">
                <ImageFader images={images} text={text} className={"pb-10"} />
                <div className="heritage-cards h-fit w-full px-20 py-10 grid grid-cols-3 gap-8">
                    {heritages.slice(0, visibleCount).map((heritage, index) => (
                        <Link key={index} to={`/heritage/${heritage.id}`}>
                            <HeritageCard key={index} img={heritage.image_url} name={heritage.name} location={heritage.location} category={heritage.category} />
                        </Link>
                    ))}
                </div>
                {visibleCount < heritages.length && (
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
