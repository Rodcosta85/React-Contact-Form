import React from "react";

const Message = ({ value, messageChange, isEmpty }) => {

    const handleChange = (e) => {
        messageChange(e.target.value);
    }

    return (
        <>
            <div className='flex flex-col'>
                <label
                    htmlFor="textarea"
                    className='text-[14px] text-gray-500 font-medium'>
                    Message
                    <span className='text-mediumGreen font-bold'> *</span>
                </label>
                <textarea
                    id="textarea"
                    value={value}
                    className={isEmpty ? 'w-[536px] h-[100px] border-personalizedRed border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-personalizedRed' : 'w-[536px] h-[100px] border-gray-400 border-[0.5px] rounded-[10px] mt-3 mb-5 p-5 focus:outline-mediumGreen focus:bg-green-100'}
                    onChange={handleChange}>
                </textarea>
            </div>
            <p className={isEmpty ? "block text-personalizedRed text-[13px] font-medium mt-2 mb-6" : "hidden"}>This field is required</p>       
        </>
    )
        
}

export default Message;