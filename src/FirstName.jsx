import React from "react";

const FirstName = ({ value, firstChange, isEmpty }) => {

  const handleChange = (e) => {
    firstChange(e.target.value);
  }


  return (
    <div className="h-min">
      <div className='mr-4 '>
        <label
          htmlFor="first-name"
          className='text-[14px] text-gray-500 font-medium'>First Name <span className='text-mediumGreen font-bold'>*</span></label>
        <input
          id="first-name"
          type="text"
          value={value}
          className={isEmpty ? 'w-[260px] h-12 border-personalizedRed border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-personalizedRed' : 'w-[260px] h-12 border-gray-400 border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-mediumGreen focus:bg-green-100'}
          onChange={handleChange}
        />
      </div>
      <p className={isEmpty ? "block text-personalizedRed text-[13px] font-medium mt-2" : "hidden"}>This field is required</p>
    </div>

  )
}

export default FirstName;