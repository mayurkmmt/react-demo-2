
import React from "react";
import { Tooltip } from "@material-tailwind/react";

/** this is a second tooltip on chart, it will show whenever you hover on first tooltip, here data
 * is static, but we can make it dynamic based on the chart information or other data which we may have.
 */

const SecondTooltip = ({ title, children }) => {

    return (
        <>
            <Tooltip
                content={
                    <>
                        <div className="Content p-2 bg-slate-700 rounded-lg flex-col justify-start items-start inline-flex">
                            <div className="TextAndSupportingText h-10 pb-3 flex-col justify-start items-start gap-1 flex">
                                <div className="Text self-stretch h-3.5 text-green-400 text-xs font-medium font-['F37 Bolton'] leading-none capitalize">{title} Change</div>
                                <div className="SupportingText self-stretch text-white text-xs font-normal font-['F37 Bolton'] uppercase">JUN-10-2023 @ 20.43</div>
                            </div>
                        </div>
                        <div className="flex">
                            3 in 1
                            <span className="text-green-400"> Portable </span>
                            Wireless Charging Station for Apple Devices
                        </div>
                    </>
                }
            >
                {children}
            </Tooltip >
        </>

    )

}

export default SecondTooltip;