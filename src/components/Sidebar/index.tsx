import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const Sidebar: React.FunctionComponent = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    );
};

export default Sidebar;
