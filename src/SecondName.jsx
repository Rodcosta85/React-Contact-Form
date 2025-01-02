import React from "react";

const SecondName = ({ value, lastChange, isEmpty }) => {
    const handleChange = (e) => {
        lastChange(e.target.value);
    }

    return (
        <div className="h-min">
            <div>
                <label
                    htmlFor="second-name"
                    className='text-[14px] text-gray-500 font-medium'>Second Name <span className='text-mediumGreen font-bold'>*</span></label>
                <input
                    id="second-name"
                    type="text"
                    value={value}
                    className={isEmpty ? 'w-[260px] h-12 border-personalizedRed border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-personalizedRed' : 'w-[260px] h-12 border-gray-400 border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-mediumGreen focus:bg-green-100'}                    onChange={handleChange}
                />
            </div>
            <p className={isEmpty ? "block text-personalizedRed text-[13px] font-medium mt-2" : "hidden"}>This field is required</p>
        </div>

    )
}

export default SecondName;