import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Header({ className }) {
    const { user } = useAuth();
    return (
        <div className={`header sticky top-2 w-[90vw] z-20  flex justify-between items-center px-5 py-4 bg-black/20 backdrop-blur-md rounded-lg shadow-lg mx-auto ${className}`}>
            <div className="title">
                <Link to={'/'}>
                    <h1 className="text-xl font-bold"><span className="text-blue-500">Heritage</span> <span className="text-green-500">Of India</span></h1>
                </Link>
            </div>
            <div className="nav-links flex gap-5  list-none text-white">
                <li className="hover:scale-[1.05] transition-all"><Link to={'/heritages'}>Heritage Sites</Link></li>
                <li className="hover:scale-[1.05] transition-all"><Link to={'/artsandculture'}>Arts & Culture</Link></li>
                <li className="hover:scale-[1.05] transition-all"><Link to={'/blogs'}>Blogs</Link></li>
                <li className="hover:scale-[1.05] transition-all"><Link to={'/toursandpkgs'}>Tours & Packages</Link></li>
                {user ? <li className="hover:scale-[1.05] transition-all text-green-500 font-bold"><Link to={'/profile'}>&nbsp;<i className="fa-solid fa-user"></i></Link></li> :
                    <li className="hover:scale-[1.05] transition-all"><Link to={'/login'}><i className="fa-solid fa-right-to-bracket"></i> | </Link> <Link to={'/register'}><i className="fa-solid fa-user"></i> </Link></li>}
            </div>
        </div>
    )
}