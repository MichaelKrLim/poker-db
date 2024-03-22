import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Navbar.tsx";

export const Layout = () => {
    return (
        <div className="layoutDiv">
            <Navbar />
            <main className="contentWindow">
                <Outlet />
            </main>
        </div>
    );
}