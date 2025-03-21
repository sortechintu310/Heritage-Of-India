import ImageFader from "../components/ImageFader";
import TourAndPkgCard from "../components/TourAndPkgCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ToursAndPackages() {
    const images = [
        "/images/kolkata.jpg",
        "/images/hawamahal.jpg",
        "/images/gadisisarlake.jpg",
        "/images/artandculture2.jpg",
        "/images/redfort.webp",
        "/images/tomb.jpg",
    ];
    const text = "Tours and Packages";

    const [tourpkgs, setToursPkgs] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6); 
    
    const fetchToursPkgs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/toursandpackages`);
            setToursPkgs(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchToursPkgs();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <>
            <div className="tours-pkgs h-full">
                <ImageFader images={images} text={text} className={"pb-10"} />
                <div className="tours-pkgs-cards h-fit w-full px-20 py-10 grid grid-cols-3 gap-8">
                    {tourpkgs.slice(0, visibleCount).map((tourpkg, index) => (
                        <Link key={index} to={`/toursandpkgs/${tourpkg.id}`}>
                            <TourAndPkgCard key={index} tourpkg={tourpkg}/>
                        </Link>
                    ))}
                </div>
                {visibleCount < tourpkgs.length && (
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
