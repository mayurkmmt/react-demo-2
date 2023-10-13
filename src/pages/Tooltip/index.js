import { useEffect, useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import ChartContext from "../../context/chartContext";
import PropTypes from 'prop-types';

const generateTooltipId = (chartId) =>
    `highcharts-custom-tooltip-${chartId}`;

/** this is for tooltip, it show tooltip whenever we hover over on any data point in graph. */

export const ChartTooltip = ({ children }) => {
    const { chartRef } = useContext(ChartContext);
    const isInit = useRef(false);
    const [context, setContext] = useState(null);
    const chart = chartRef.current?.chart;


    /** this is for set id for the chart */
    useEffect(() => {
        if (chart) {
            const formatter = function () {
                if (!isInit.current) {
                    isInit.current = true;
                    chart.tooltip.refresh.apply(chart.tooltip, [this.point]);
                    chart.tooltip.hide(0);
                }

                setContext(this);

                return `<div id="${generateTooltipId(chart.index)}"></div>`;
            };

            chart.update({
                tooltip: {
                    formatter,
                    useHTML: true
                }
            });
        }
    }, [chart]);

    const node = chart && document.getElementById(generateTooltipId(chart.index));

    return node && context
        ? ReactDOM.createPortal(children(context), node)
        : null;
};

ChartTooltip.propTypes = {
    children: PropTypes.node
};
