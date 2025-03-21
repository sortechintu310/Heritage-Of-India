import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {useAuth} from "../context/AuthContext.jsx";


export default function ToursAndPackageDetails() {
    const { id } = useParams(); 
    const [tourspkgs, setToursPkgs] = useState(null);
    const [members, setMembers] = useState(1);
    const {user} = useAuth();

    const handleMemberChange = (e) => {
        setMembers(e.target.value);
    }
    const fetchToursPkgs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/toursandpackages/${id}`);
            setToursPkgs(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchToursPkgs();
    }, [id]);

    if (!tourspkgs) return <div>Loading...</div>;

    return (
        <div className="tourpkg-detail h-full min-h-screen p-20 flex flex-col items-start justify-center gap-8 text-white text-lg">
            {user?<>
            <h1 className="text-amber-300 font-bold text-4xl">{tourspkgs[0].package_name}</h1>
            <img src={tourspkgs[0].image_url} alt={tourspkgs[0].package_name} className="h-[60vh] object-contain rounded-md" />
            <p>{tourspkgs[0].description}</p>
            <p>
                <label htmlFor="members">No. Of Members</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="members" id="" placeholder="Enter No. of Members" value={members} onChange={handleMemberChange} className="outline-2 px-4 py-2 outline-blue-500" />
            </p>
            <p>
                <label htmlFor="start_date">Starting Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="date" name="start_date" id="" />
            </p>
            <p className="duration text-amber-200 text-xl">{tourspkgs[0].duration_days} Days</p>
            <p className="price text-2xl text-green-500">Rs {Math.round((tourspkgs[0].price * members) / 1.2)}/-</p>
            <Link to={"/"}>
                <button className="bg-green-800 font-bold px-20 py-2 cursor-pointer">Book</button>
            </Link>
            </>:<>
            <Link to={"/login"}>
                <a className="underline text-red-400 font-semibold px-10 py-2 cursor-pointer"> You are not Registerd User. Please Login or Register to Book</a>
            </Link>
            </>}
        </div>
    );
}
