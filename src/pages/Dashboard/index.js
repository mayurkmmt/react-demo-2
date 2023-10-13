import React, { useState, useRef } from "react";
import { Typography } from "@material-tailwind/react";
import InfoIcon from '@mui/icons-material/Info';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Product from "../Product";
import Chart from "../Chart";
import ChartContext from "../../context/chartContext";
import productData from "../../jsondata/products";

/**
 * this is main dashboard component which contain the graph and asins information
 */

const Dashboard = () => {
    const chartRef = useRef(null);
    const [products, setProducts] = useState(productData);

    /** default event list */
    const [eventList, setEventList] = useState([{
        "title": "Price",
        "value": "price"
    }, {
        "title": "Title",
        "value": "title"
    }])

    /** this is a default options of charts */
    const [chartOption, setChartOption] = useState({
        chart: {
            zoomType: 'x', // zoom-in and zoom-out in graph
        },
        title: {
            text: ""
        },
        series: productData, // this is a data of series, which might be we get from API
        tooltip: {
            style: {
                pointerEvents: "auto"
            }
        },
        navigator: {
            enabled: true, // Enable the navigator
        },
        rangeSelector: {
            enabled: true, // Enable the range selector
        },
        xAxis: {
            title: {
                text: 'June-2023', // Add a label to the X-axis
            },
        },
        yAxis: {
            title: {
                text: 'BSR LARGE CATEGORY', // Add a label to the X-axis
            },
        },
        legend: {
            enabled: false, // Hide the legend
        },

    });

    const toggleShow = (index) => {

        /** update product data */
        const updatedProducts = [...products]; // Create a copy of the array
        updatedProducts[index].show = !updatedProducts[index].show; // Toggle the "show" property
        setProducts(updatedProducts); // Update the state with the modified array

        /**
         * remove all series of chart from graph and added only those which has show enable and render graph again
         */
        const chart = chartRef.current.chart;
        while (chart.series.length > 0) {
            chart.series[0].remove(false);
        }
        updatedProducts.forEach((product_info) => {
            if (product_info.show) {
                chart.addSeries(product_info, false);
            }
        });
        chart.redraw();
    }

    return (<>
        <ChartContext.Provider value={{ chartOption, setChartOption, chartRef, eventList, setEventList }}>
            <div>
                {/* this is header section, we can make this as a component as well */}
                <div className="grid grid-cols-4 gap-4 p-5">
                    <div className="col-span-12">
                        <Typography
                            variant="h1"
                            className="flex items-center text-[20px] border-b-[#a6adb6] border-b border-solid pb-[20px]"
                        >
                            Performance Tracker
                            <VideoCameraBackIcon className="h-5" />
                        </Typography>
                    </div>
                </div>
                {/* this is for show dropdown of group */}
                <div className="px-5">
                    <Typography
                        variant="h5"
                        className="text-[#079455] flex items-center justify-between"
                    >
                        <div>
                            <span className="mr-2">Group</span>
                            <InfoIcon className="h-5"></InfoIcon>
                        </div>
                    </Typography>
                    <div className="relative h-10 max-w-[500px] flex items-center mt-[20px]">
                        <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500   focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                            <option value="brazil">Cell Phones Charging Stations</option>
                            <option value="bucharest">Car Charging Station</option>
                            <option value="gas">Gas Station</option>
                        </select>
                        <button className="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            <AddCircleIcon />
                        </button>

                    </div>
                </div>
                <div className="flex flex-row justify-between bg-white">
                    {/* this is for show ASINs, and based on it selection show data on chart */}
                    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                        <div className="border-b-2 py-4 px-2">
                            <Typography
                                variant="h5"
                                className="text-[#079455] flex items-center"
                            ><span className="mr-2">ASINs</span></Typography>
                        </div>
                        {products.map((product_info, index) => (
                            <Product key={product_info.id} info={product_info} index={index} toggleShow={toggleShow} />
                        ))}
                    </div>
                    {/* this is for show chart based on ASINs selection */}
                    <div className="w-full px-5 flex flex-col justify-between">
                        <Chart />
                    </div>
                </div>
            </div>
        </ChartContext.Provider>
    </>)
}

export default Dashboard;