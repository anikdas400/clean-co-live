import { Outlet } from "react-router-dom";


const Adminlayout = () => {
    return (
        <div className="flex">
            <div className="bg-emerald-300 h-screen flex-[1]">
                <h2 className="text-3xl font-semibold pl-5">sidebar</h2>
            </div>
            <div className="bg-cyan-300 flex-[3]">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Adminlayout;