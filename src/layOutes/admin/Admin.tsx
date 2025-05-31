import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SkillsSidebar from "./components/skillsSidebar/SkillsSidebar";

export default function Admin() {
    return (
        <div>
            <Navbar />
            <SkillsSidebar />
            <Outlet />
        </div>
    )
}
