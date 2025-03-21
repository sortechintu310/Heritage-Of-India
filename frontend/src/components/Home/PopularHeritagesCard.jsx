export default function PopularHeritagesCard({ img, name, desc, className }) {
    return (
        <div className={`heritage-card h-[40vh] bg-white overflow-hidden flex flex-col justify-end items-center bg-cover text-white  ${className} `}
            style={{ backgroundImage:  `linear-gradient(to top, black, transparent),url('${img}')`}}>

            <h1 className="text-3xl font-bold text-center">{name}</h1>
            <a className="text-slate-400 underline underline-offset-2 cursor-pointer">Learn More...</a>

        </div>
    )
}