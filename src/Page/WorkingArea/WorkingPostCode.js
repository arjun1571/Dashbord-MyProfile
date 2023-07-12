import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"
import mapLogo from "../../asset/image/Screenshot 2023-06-26 at 13.09 1.png"
import { SearchIcon } from "@heroicons/react/outline";


const WorkingPostCode = () => {
    // demo data 
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
            {/* heading line  */}
            <div className='flex items-center mb-4'>
                <h1 className='lg:text-4xl text-2xl font-bold'>Trades</h1>
                <p className='mx-5'><small>Member since 2023</small></p>
            </div>
            {/* main area  */}
            <div className='border rounded-lg p-5 lg:p-10 w-full h-full md:flex '>
                {/* left side profile section */}
                <div className='mt-10'>
                    <div className='text-center '>
                        <img src={profile} alt=""  className=' mx-auto w-34'/>
                        <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
                    </div>
                    
                </div>
                {/* working postcode section area  */}
                <div className='lg:mx-10 mx-3 border rounded-lg p-2 lg:p-10 mt-10 lg:w-[832px]'>
                    <h1 className='text-2xl font-bold'>Working area postcode </h1>
                    {/* search input  */}
                    <form action="" className="mx-auto w-full  mt-3">
                        <div className="relative flex items-center">
                        <SearchIcon className="w-5 h-6 text-[#081D03] absolute ml-3 pointer-events-none"></SearchIcon>
                        <input
                            type="text"
                            placeholder='B3 2NH'
                            name="search"
                            autoComplete="off"
                            className="pr-3 pl-10 py-2 w-full font-semibold text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                        />
                        </div>
                    </form>
                    <p style={{color:"#3F8825"}} className='mt-2' >Enter address manually</p>
                    {/* miles button dynamic data pass  and design using map  */}
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
                    {/* use map imag  */}
                    <img className='mt-7' src={mapLogo} alt="" />
                    {/* button section  */}
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