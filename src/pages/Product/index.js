import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import propTypes from 'prop-types';

/** this component is for show ASIn product information, here i have passed info from parent component and showing it into 
 * box along with click event on eye icon to show/hide product in chart.
 */
const Product = ({ info, toggleShow, index }) => {
    return (
        <>
            <div className={`relative apax-chart border p-2 rounded-[20px] border-solid bg-[#f9fafb] flex w-full flex-col mt-[20px] rounded-xl bg-clip-border text-gray-700 shadow-none ${!info.show && 'opacity-25'}`}>
                <div className="relative mx-0 mt-1 flex gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-2 text-gray-700 shadow-none">
                    <img
                        src={info.product_image}
                        alt="paras"
                        className={`border-solid border-[3px] border-${info.color}-500 relative inline-block h-[60px] w-[100px] rounded-[10px] object-cover object-center`}
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div>
                            <h5 className="block font-sans text-[12px] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {info.name}
                            </h5>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-[11px] flex">
                                    USD <span className="text-[16px] font-bold">{info.price}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div onClick={() => toggleShow(index)} className='hover:cursor-pointer'>
                            {info.show ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                        </div>
                        <img
                            src="https://picsum.photos/id/637/300/300"
                            alt="tania andrew"
                            className="relative inline-blockh-[25px] w-10 rounded-[50%] object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

Product.propTypes = {
    info: propTypes.object,
    index: propTypes.number,
    toggleShow: propTypes.bool
};

export default Product;