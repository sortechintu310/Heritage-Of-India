export default function Footer(){
    return (
        <footer className="bg-slate-950 w-full text-white text-center flex justify-between items-center px-10 py-4">
            <p className="font-bold">&copy; {new Date().getFullYear().toString()} - <span className="text-green-500">Heritage</span> <span className="text-blue-500"> Of India</span></p>
            <div className="links">
                <p>Email: support@hoi.com</p>
                <p>+91 11458798561</p>
            </div>
        </footer>
    )
}