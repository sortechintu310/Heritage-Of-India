export default function TourAndPkgCard({tourpkg}) {
    return (
        <div className="tourpkg-card flex flex-col gap-3 bg-white rounded-lg shadow-lg p-10 z-20">
            <div className="tourpkg-image">
                <img src={tourpkg.image_url} alt={tourpkg.package_name} />
            </div>
            <div className="tourpkg-info flex flex-col gap-2">
                <h2 className="tourpkg-name font-bold text-3xl text-slate-700">{tourpkg.package_name}</h2>
                <p className="tourpkg-desc text-slate-500">{tourpkg.description}</p>
                <p className="tourpkg-price text-xl font-semibold text-green-600">Rs {tourpkg.price}/-</p>
                <p className="tourpkg-duration font-bold text-amber-700">{tourpkg.duration_days} Days</p>
            </div>
        </div>
    )
}