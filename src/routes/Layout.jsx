import { SideBar } from "../layouts/SideBar";
import { Header } from "../layouts/Header";
import { cn } from '../utils/cn';
import { Outlet } from "react-router-dom";
const Layout = () => {
    return <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-900">
        <SideBar />
        <div className={cn("transition-[margin] duration-300")}>
            <Header />
            <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                <Outlet />
            </div>
        </div>
    
    </div>;
}
 
export default Layout;