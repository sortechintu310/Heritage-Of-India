import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatText } from "../utils/helper.jsx";

export default function ArtsCultureDetails() {
    const { id } = useParams();
    const [artsculture, setArtsCulture] = useState(null);

    const fetchArtsCultureDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/artandculture/${id}`);
            setArtsCulture(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchArtsCultureDetails();
    }, [id]);

    if (!artsculture) return <div>Loading...</div>;

    return (
        <div className="heritage-detail h-full p-20 flex  flex-col items-start justify-center gap-8 text-white ">
                <h1 className="text-amber-300 font-bold text-4xl">{artsculture.name}</h1>
                <img src={artsculture.image_url} alt={artsculture.name} className="h-[60vh] object-contain rounded-md" />
                <p className="text-xl">{formatText(artsculture.description)}</p>
                <a href={`https://en.wikipedia.org/wiki/${artsculture.name}`} target="_blank" className="underline">Wikipedia link.....</a>
        </div>
    );
}
