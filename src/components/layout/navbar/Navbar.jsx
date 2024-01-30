import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth()
    console.log(user)
    return (
        <div className=" w-full max-w-[1280px] mx-auto">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
                <div className="flex gap-5">
                    {/* Navbar menu content here */}
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Contact</NavLink>
                    {
                    user?.email ? (<NavLink to="/login" onClick={logOut} className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>logout</NavLink>) :
                        (<NavLink to="/login" className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Login</NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;