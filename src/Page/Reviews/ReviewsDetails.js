import React from 'react';

const ReviewsDetails = ({data}) => {
    const {name,service,date,rating,des}=data
    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold' style={{color:"#3F8825"}}>{service}</h1>
            <h3>{name}</h3>
            <h3 className='mt-2'>{date}</h3>
            <p className='mt-2'>"{des}</p>
            <div className='mb-4 flex items-center mt-4'>
                <h1 className='font-bold rounded-full border bg-indigo-600 w-12 h-12 p-2' style={{color:"#3F8825",backgroundColor:"#E6EBE3"}}>{rating}</h1>
                <p className='mx-3 '>Rating</p>
            </div>
            <hr />
        </div>
    );
};

export default ReviewsDetails;