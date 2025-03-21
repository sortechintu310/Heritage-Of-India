import { useEffect, useState } from "react";
import HeroSec from "../components/Home/HeroSec";
import PopularHeritagesCard from "../components/Home/PopularHeritagesCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [heritages, setHeritages] = useState([]);
    const [artsCulture, setArtsCulture] = useState([]);
    const [toursPkgs, setToursPkgs] = useState([]);

    const heritageIds = [1, 2, 3, 4]; 
    const artsCultureIds = [1, 2, 3, 4]; 
    const tourspkgsIds = [1, 2, 3, 4]; 

    const fetchSelectedHeritages = async () => {
        try {
            const heritageData = [];
            for (const id of heritageIds) {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/heritages/${id}`);
                heritageData.push(response.data);
            }
            setHeritages(heritageData);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchSelectedArtsCulture = async () => {
        try {
            const artsCultureData = [];
            for (const id of artsCultureIds) {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/artandculture/${id}`);
                artsCultureData.push(response.data);
            }
            setArtsCulture(artsCultureData);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchSelectedTourPkgs = async () => {
        try {
            const tourspkgsdata = [];
            for (const id of tourspkgsIds) {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/toursandpackages/${id}`);
                tourspkgsdata.push(response.data);
            }
            setToursPkgs(tourspkgsdata);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchSelectedHeritages();
        fetchSelectedArtsCulture();
        fetchSelectedTourPkgs();
    }, []);

    return (
        <>
            <div className="home">
                <HeroSec />
                <div className="sec2 h-fit px-20 py-10 grid gap-[5rem]">
                    <h1 className="text-4xl text-white font-bold text-center">Popular Heritage Sites</h1>
                    <div className="grid grid-cols-4 gap-8">
                        {heritages.map((heritage, index) => (
                            <Link key={index} to={`/heritage/${heritage.id}`}>
                                <PopularHeritagesCard key={index} img={heritage.image_url} name={heritage.name} className={"rounded-full shadow-lg px-4 pb-6"} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="sec3 h-fit px-20 py-10 grid gap-[5rem] bg-slate-800">
                    <h1 className="text-4xl text-white font-bold text-center">Popular Arts and Cultures</h1>
                    <div className="grid grid-cols-4 gap-8">
                        {artsCulture.map((artculture, index) => (
                            <Link key={index} to={`/artsandculture/${artculture.id}`}>
                                <PopularHeritagesCard key={index} img={artculture.image_url} name={artculture.name} className={"rounded-lg shadow-lg px-4 pb-6"} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="sec4 h-fit px-20 py-10 grid gap-[5rem]">
                    <h1 className="text-4xl text-white font-bold text-center">Popular Tours And Packages</h1>
                    <div className="grid grid-cols-4 gap-8">
                        {toursPkgs.map((tourpkg, index) => (
                            <Link key={index} to={`/toursandpkgs/${tourpkg[0].id}`}>
                                <PopularHeritagesCard key={index} img={tourpkg[0].image_url} name={tourpkg[0].package_name} className={"rounded-bl-[4rem] shadow-lg px-4 pb-6"} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}