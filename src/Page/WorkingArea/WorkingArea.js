import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"
import editLogo from "../../asset/image/Vector (1).png"
import { useNavigate } from "react-router-dom";

const WorkingArea = () => {
    const navigate = useNavigate();
    const handleClick=()=> {
        console.log("hello")
        navigate("/working-postcode");
    }
    return (
        <div className='' style={{height:"1780px"}}>
            {/* heding line */}
            <div className='flex items-center mb-4'>
                <h1 className='lg:text-4xl text-2xl font-bold'>Working area</h1>
                <p className='mx-5'><small>Member since 2023</small></p>
            </div>
            {/* main content */}
            <div className='border rounded-lg p-5 lg:p-10 w-full h-full md:flex '>
                {/* left side profile section */}
                <div className='mt-10'>
                    <div className='text-center '>
                        <img src={profile} alt=""  className=' mx-auto w-34'/>
                        <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
                    </div>
                    
                </div>
                {/* working area post content */}
                <div className='lg:mx-10 mx-3 border rounded-lg p-2 justify-between lg:p-10 flex mt-10 lg:w-[832px]'>
                    {/* left side main content  */}
                    <div>
                        <h1>Working area postcode</h1>
                        <p>B3 2Nh</p>
                    </div>
                    {/* write side edit logo  */}
                    <div>
                        <button onClick={handleClick} className="border-2 border-lime-500 rounded-full p-2">
                            <img src={editLogo} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingArea;