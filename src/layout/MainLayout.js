import React from 'react';
import { Outlet } from "react-router-dom";
import LeftSideBar from "../pages/LeftSideBar";

/** 
 * this is MainLayout component, where it render the left side bar and in mainlayout it will render right hand box,
 * where we can render more componenet based on path change.
*/

const MainLayout = () => {
    return (
        <>
            <div className="flex">
                <div className="sidebar">
                    <LeftSideBar />
                </div>
                <div className="mainlayout">
                    <Outlet />
                </div>
            </div >

        </>
    )
}

export default MainLayout;