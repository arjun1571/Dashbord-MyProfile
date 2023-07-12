import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"
import ReviewsDetails from './ReviewsDetails';
const Reviews = () => {
    const datas = [
        {   
            id:"1",
            service:"Clean my bathroom ",
            name:"Josh Smith",
            date:"20 Feb,2023",
            des:"Absolutely thrilled with the impeccable bathroom cleaning service provided! The team went above and beyond to transform my bathroom into a sparkling oasis. From the spotless shower tiles to the glistening faucets, every corner was meticulously cleaned.",
            rating:"9.75"
        },
        {
            id:"2",
            service:"Clean my bathroom ",
            name:"Josh Smith",
            date:"20 Feb,2023",
            des:"Absolutely thrilled with the impeccable bathroom cleaning service provided! The team went above and beyond to transform my bathroom into a sparkling oasis. From the spotless shower tiles to the glistening faucets, every corner was meticulously cleaned.",
            rating:"9.75"
        },
        {
            id:"3",
            service:"Clean my bathroom ",
            name:"Josh Smith",
            date:"20 Feb,2023",
            des:"Absolutely thrilled with the impeccable bathroom cleaning service provided! The team went above and beyond to transform my bathroom into a sparkling oasis. From the spotless shower tiles to the glistening faucets, every corner was meticulously cleaned.",
            rating:"9.75"
        }
    ]
    return (
        <div className=''>
            {/* heding line */}
            <div className='flex mb-4 items-center'>
                <h1 className='lg:text-4xl text-2xl font-bold'>Reviews ({datas.length}) </h1>
                <p className='mx-5'><small>Member since 2023</small></p>
            </div>
            {/* main content  */}
            <div className='border rounded-lg p-5 lg:p-10 w-full h-full md:flex '>
                {/* left side profile section */}
                <div className='mt-10'>
                    <div className='text-center '>
                        <img src={profile} alt=""  className=' mx-auto w-34'/>
                        <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
                    </div>
                </div>
                {/* create demo data and using map create on reviews section  */}
                <div className='lg:mx-10 mx-3 border rounded-lg p-2 lg:p-5 mt-10 lg:w-[832px]'>
                    {
                        datas?.map((data)=> <ReviewsDetails key={data.id} data={data}></ReviewsDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;