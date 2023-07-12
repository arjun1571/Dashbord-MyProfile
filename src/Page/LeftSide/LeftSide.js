import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    return (
        <div className='lg:p-14 p-2 '>
            <Link to={"/my-profile"} ><button style={{color:"#3F8825"}} className='mb-4'>My profile</button></Link>
            <br />
            <Link to={"/trades"} ><button style={{color:"#3F8825"}} className='mb-2'>Trades</button></Link>
            <br/>
            <Link to={"/Working-area"} ><button style={{color:"#3F8825"}} className='mb-2'>Working area</button></Link>
            <br />
            <Link to={"/Reviews"} ><button style={{color:"#3F8825"}} className='mb-2'>Reviews</button></Link>
           
        </div>
    );
};

export default LeftSide;