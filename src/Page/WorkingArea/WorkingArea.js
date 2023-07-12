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
            <div className='flex items-center mb-4'>
                <h1 className='lg:text-4xl text-2xl font-bold'>Working area</h1>
                <p className='mx-5'><small>Member since 2023</small></p>
            </div>
            <div className='border rounded-lg p-5 lg:p-10 w-full h-full flex '>
                <div className='mt-10'>
                    <img src={profile} alt=""  className=''/>
                    <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
                </div>
                <div className='lg:mx-10 mx-3 border rounded-lg p-2 justify-between lg:p-10 flex mt-10 lg:w-[832px]'>
                    <div>
                        <h1>Working area postcode</h1>
                        <p>B3 2Nh</p>
                    </div>
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