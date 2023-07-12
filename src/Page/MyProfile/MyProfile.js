import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"


const MyProfile = () => {
    return (
        <div className='' style={{height:"1780px"}}>
            <div className='flex items-center mb-4'>
                <h1 className='lg:text-4xl text-2xl font-bold'>My Profile</h1>
                <p className='mx-5'><small>Member since 2023</small></p>
            </div>
            <div className='border rounded-lg p-5 lg:p-10 w-full h-full flex '>
                <div className='mt-10'>
                    <img src={profile} alt=""  className=''/>
                    <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
                </div>
                <div className='lg:mx-10 mx-3 border rounded-lg p-2 lg:p-5 flex mt-10 lg:w-[832px]'>
                    
                    <h1>hello..........................</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;