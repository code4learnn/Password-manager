import React from "react";
const Footer=()=>{
    return(
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center ">
            <div className="logo font-bold  text-white text-2xl">
        <span className='text-green-700'>/&lt;</span>
            Pass
            <span className='text-green-700'>OP/&lt;</span>
            
            </div>
            <div className="flex justify-right items-right  ">
            Made by <img  className=" w-7 mx-2  " src="icons/heart.png" alt="" /> by code4learnn
            </div>
        </div>
    )
}
export default Footer