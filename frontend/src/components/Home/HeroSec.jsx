import { Link } from "react-router-dom";

export default function HeroSec(){
    return(
        <div className="hero-sec text-white">
                <div className="bg-video">
                    <video id="video" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
                        <source type="video/mp4" src="video/HOI_video.mp4" />
                    </video>
                </div>
                <div className="home-container relative z-10 flex flex-col gap-5 items-center justify-center h-[90vh]">
                    <h1 className="text-5xl font-bold">"Discover The Timeless <span className="text-blue-500">Heritage</span> <span className="text-green-500">Of India</span>"</h1>
                    <h6 className="text-xl font-semibold"> Explore cultural wonders, book tours, and plan your journey to India's heritage treasures.</h6>
                    <button className="bg-amber-700 px-4 py-2 text-xl hover:scale-[1.1] transition delay-75 ease-in-out"><Link to={"/heritages"}><i className="fa-solid fa-magnifying-glass"></i>&nbsp; Explore</Link></button>
                </div>
            </div>
    )
}