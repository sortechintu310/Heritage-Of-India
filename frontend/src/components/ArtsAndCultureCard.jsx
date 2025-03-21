export default function ArtsAndCultureCard({ img, name, desc, className }) {
    return (
        <div className={`heritage-card h-[40vh] bg-white overflow-hidden flex flex-col justify-end items-center bg-cover text-white transform transition-transform duration-500 perspective-1000 rounded-br-[8rem] border-4 border-red-500 shadow-md px-6 pb-8 rounded-lg hover:scale-110  ${className} `}
            style={{ backgroundImage:  `linear-gradient(to top, black, transparent),url('${img}')`}}>

            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-slate-200 text-center text-sm">{desc.length > 120 ? `${desc.slice(0, 120)}...` : desc}</p>
            <a className="text-slate-400 underline underline-offset-2 cursor-pointer">Learn More...</a>

        </div>
    )
}