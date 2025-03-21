export default function HeritageCard({ img, name,location,category, className }) {
    return (
        <div className={`heritage-card h-[40vh] bg-white overflow-hidden flex flex-col justify-end items-center bg-cover text-white transform transition-transform duration-500 perspective-1000 rounded-md pb-4 text-center px-6 ${className} `}
            style={{ backgroundImage:  `linear-gradient(to top, black, transparent),url('${img}')`}}>

            <h1 className="text-3xl font-bold text-amber-50">{name}</h1>
            <p className="location text-amber-300 text-sm font-semibold"><strong><i className="fa-solid fa-location-dot"></i></strong>&nbsp;{location}</p>
            <p className="category text-amber-200 text-sm font-semibold">{category}</p>
            <a className="text-slate-400 underline underline-offset-2 cursor-pointer">Learn More...</a>

        </div>
    )
}