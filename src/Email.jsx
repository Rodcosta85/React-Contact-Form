import React from "react";

const Email = ({ value, emailChange, isValid }) => {

    const handleChange = (e) => {
        emailChange(e.target.value);
    }


    return (
        <>
            <div className='flex flex-col'>
                <label
                    htmlFor="email"
                    className='text-[14px] text-gray-500 font-medium'>Email Address <span className='text-mediumGreen font-bold'>*</span></label>
                <input
                    id="email"
                    type="email"
                    value={value}
                    className={isValid ? 'w-[536px] h-12 border-gray-400 border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-mediumGreen focus:bg-green-100' : 'w-[536px] h-12 border-personalizedRed border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-personalizedRed'}
                    onChange={handleChange}
                />
            </div>
            <p className={isValid ? "hidden" : "block text-personalizedRed text-[13px] font-medium mt-2"}>This field is required</p>
        </>

    )
}

export default Email;