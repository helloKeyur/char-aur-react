import React from 'react'
import { useState } from 'react';

export default function BGChanger() {

    let [bgColor, setBgColor] = useState("olive");

    const BTN_COLORS = ["red", "blue", "green", "gray", "yellow", "indigo", "purple", "pink"];
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return (
        <div className='w-full h-screen duration-300' style={{backgroundColor: bgColor}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    {BTN_COLORS.map((color, index) => (
                        <button key={index} 
                            onClick={()=> setBgColor(color)}
                            className={`outline-none px-4 py-1 rounded-full text-white shadow-lg bg-${color}-500`}>
                            {capitalizeFirstLetter(color)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
