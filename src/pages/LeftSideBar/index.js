
import React from "react";
import {
    Card,
} from "@material-tailwind/react";

import GridViewIcon from '@mui/icons-material/GridView';
import PhotoIcon from '@mui/icons-material/Photo';
import BookIcon from '@mui/icons-material/Book';

/**
 * this is a left sidebar, here i have used used static menu, here we can use another component and we can render it for given
 * 3 menu options.
 * 
 */

function LeftSideBar() {
    return (
        <Card className="md:block left-0 h-[100vh] w-20 p-2 shadow-xl shadow-indigo-500 bg-gray-200 flex flex-shrink-0 transition-all">
            <div className="flex flex-col items-center flex-1 p-2 space-y-4">
                <div className="p-2 transition-colors rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 text-gray-500 bg-white"> <GridViewIcon className="h-5 " /></div>
                <div className="p-2 transition-colors rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 text-gray-500 bg-white"> <PhotoIcon className="h-5 " /></div>
                <div className="p-2 transition-colors rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 text-gray-500 bg-white"> <BookIcon className="h-5 " /></div>
            </div>
            <div className="absolute bottom-0 flex items-center flex-shrink-0 p-2">
                <div className="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2">
                    <img className="w-8 h-8 rounded-lg shadow-md" src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4" alt="Paras" />
                </div>
            </div >
        </Card>
    );
}

export default LeftSideBar;