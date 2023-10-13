import React, { useContext, useCallback } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";
import ChartContext from "../../context/chartContext";
import { ChartTooltip } from "../Tooltip";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SecondTooltip from "../Tooltip/SecondTooltip";
import { Slider } from "@material-tailwind/react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { setEvents } from '../../store/slices/eventSlice';

/** this is for show chart into the dashboard, here it use data from context api. */

const Chart = () => {
    const dispatch = useDispatch();
    const { chartOption, chartRef, eventList } = useContext(ChartContext);
    // eslint-disable-next-line
    const [chart, setChart] = useState(null);
    const selectedEvent = useSelector(store => store.events.eventOption);

    const callback = useCallback((chart) => {
        setChart(chart);
    }, []);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250
            }
        },
        getContentAnchorEl: null,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "center"
        },
        variant: "menu"
    };

    const handleChange = (event) => {
        const value = event.target.value;
        dispatch(setEvents(value));
    };

    return (
        <>
            <div className="flex ">
                {/* this is a event dropdown list, based on this event change, it show tooltip on chart */}
                <div>
                    <Select
                        labelId="mutiple-select-label"
                        multiple
                        value={selectedEvent}
                        onChange={handleChange}
                        renderValue={(selectedEvent) => selectedEvent.join(", ")}
                        MenuProps={MenuProps}
                    >
                        {eventList.map((event_info) => (
                            <MenuItem key={event_info.value} value={event_info.value}>
                                <ListItemIcon>
                                    <Checkbox checked={selectedEvent.indexOf(event_info.value) > -1} />
                                </ListItemIcon>
                                <ListItemText primary={event_info.value} />
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                {/* this is for range, it is static now, as i have added zoom option for graph which do the same functionality */}
                <div className="flex w-96 flex-col gap-2">
                    <span>Range</span>
                    <Slider size="md" defaultValue={50} />
                </div>
            </div>
            {/* this is highchart, which i have used as a chart library */}
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOption}
                ref={chartRef}
                callback={callback}
            />
            {/* this is dynamic tooltip for chart */}
            <ChartTooltip>
                {() => {
                    return (
                        <>
                            <div className="w-50 h-10 bg-green-500 flex items-center justify-between">
                                {selectedEvent.map((event, index) => (
                                    <SecondTooltip key={index} title={event}>
                                        {event === 'price' ? <CurrencyExchangeIcon className="material-icons mx-1 text-white opacity-75 white" /> : <TextFieldsIcon className="material-icons mx-1 text-white opacity-75 white" />}
                                    </SecondTooltip>
                                ))}
                            </div >

                        </>
                    );
                }}
            </ChartTooltip >
        </>
    )
}

export default Chart;