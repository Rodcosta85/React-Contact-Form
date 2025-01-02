import React from "react";

const Checkbox = ({ value, checkboxChange, isChecked }) => {

    return (
        <>
            <div className='flex flex-row'>
                <input
                    type="checkbox"
                    className='mr-3 accent-mediumGreen'
                    value={value}
                    onChange={(e) => checkboxChange(e.target.checked) }
                    />
                <p className='text-[14px] text-gray-500 font-medium'>I consent being contacted by the team <span className='text-mediumGreen font-bold'>*</span></p>
            </div>
            <p className={isChecked ? "block text-personalizedRed text-[13px] font-medium mt-2" : 'hidden'}>To submit this form, please consent to being contacted</p>
        </>

    )
}

export default Checkbox;