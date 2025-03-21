import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heritages from "./pages/Heritages";
import ArtsAndCulture from "./pages/ArtsAndCulture";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import ChatBtn from "./components/ChatBtn";
import HeritageDetails from "./pages/HeritageDetails";
import ArtsCultureDetails from "./pages/ArtsCultureDetails";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Profile from "./pages/Profile";
import BlogForm from "./pages/BlogForm";
import ToursAndPackages from "./pages/ToursAndPackages";
import ToursAndPackageDetails from "./pages/ToursAndPackageDetails";


export default function App() {
  
  return (
    <main className="bg-slate-900 min-h-screen">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heritages" element={<Heritages />} />
        <Route path="/artsandculture" element={<ArtsAndCulture />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/heritage/:id" element={<HeritageDetails />} />
        <Route path="/artsandculture/:id" element={<ArtsCultureDetails />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/blogform" element={<BlogForm/>} />
        <Route path="/toursandpkgs" element={<ToursAndPackages/>} />
        <Route path="/toursandpkgs/:id" element={<ToursAndPackageDetails/>} />
      </Routes>
     {/* <ChatBtn/> */}
     <Footer/>
    </main>
  )
}