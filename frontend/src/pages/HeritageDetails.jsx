import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatText } from "../utils/helper.jsx";

export default function HeritageDetails() {
    const { id } = useParams(); 
    const [heritage, setHeritage] = useState(null);

    const fetchHeritageDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/heritages/${id}`);
            setHeritage(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchHeritageDetails();
    }, [id]);

    if (!heritage) return <div>Loading...</div>;

    return (
        <div className="heritage-detail h-full p-20 flex flex-col items-start justify-center gap-8 text-white text-lg">
            <h1 className="text-amber-300 font-bold text-4xl">{heritage.name}</h1>
            <img src={heritage.image_url} alt={heritage.name} className="h-[60vh] object-contain rounded-md" />
            <p><strong><i className="fa-solid fa-location-dot"></i></strong>&nbsp; {heritage.location}</p>
            <p><strong>Category:</strong> {heritage.category}</p>
            <p>{formatText(heritage.description)}</p>
            <a href={`https://en.wikipedia.org/wiki/${heritage.name}`} target="_blank" className="underline">Wikipedia link.....</a>
        </div>
    );
}
