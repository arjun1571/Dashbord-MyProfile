import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"
import mapLogo from "../../asset/image/Screenshot 2023-06-26 at 13.09 1.png"


const WorkingPostCode = () => {
    const milesData = [
        {
            id:'1',
            mile:"5 miles"
        },
        {
            id:'2',
            mile:"10 miles"
        },
        {
            id:'3',
            mile:"20 miles"
        },
        {
            id:'4',
            mile:"25 miles"
        },
        {
            id:'5',
            mile:"30 miles"
        },
        {
            id:'6',
            mile:"35 miles"
        },
        {
            id:'7',
            mile:"40 miles"
        },
        {
            id:'8',
            mile:"45 miles"
        },
        {
            id:'9',
            mile:"50 miles"
        },
        {
            id:'10',
            mile:"75 miles"
        }
    ]
    return (
        <div className='' style={{height:"1780px"}}>
            <div className='flex mb-4'>
                <h1 className='lg:text-4xl text-2xl font-bold'>Trades</h1>
                <p className='mx-3'><small>Member since 2023</small></p>
            </div>
            <div className='border rounded-lg p-5 lg:p-10 w-full h-full flex '>
                <div className='mt-10'>
                    <img src={profile} alt=""  className=''/>
                    <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
                </div>
                <div className='lg:mx-10 mx-3 border rounded-lg p-2 lg:p-10 mt-10 lg:w-[832px]'>
                    <h1 className='text-2xl font-bold'>Working area postcode </h1>
                    <input type="text" name="contact" autoComplete="off" placeholder='B3 2NH' className="pr-2 pl-3 mt-3 py-2 w-1/2 font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"/>
                    <p style={{color:"#3F8825"}} className='mt-2' >Enter address manually</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 '>
                        {
                            milesData?.map(data =>
                                <div className=' bg-stone-200 rounded-lg'>
                                    <p className='text-xl  hover:bg-green-700 hover:rounded-lg' style={{color:"#3F8825"}}>
                                        <div className='text-black hover:text-white flex justify-between p-2'>
                                            <p >{data.mile}</p> 
                                            <p >+</p>
                                        </div>                
                                    </p>
                                    
                                </div>
                             )
                        }      
                    </div>
                    <img className='mt-7' src={mapLogo} alt="" />

                    <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingPostCode;