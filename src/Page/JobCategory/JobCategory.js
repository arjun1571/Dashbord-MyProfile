import React from 'react';
import image from '../../asset/image/plus (11) 59.png'

const JobCategory = (props) => {

    const {title} = props.category;

    return (
        <div>
        <button className='py-2 px-3 mb-5 mr-3 rounded-xl bg-[#E6EBE3] hover:bg-[#3F8825] focus:bg-[#3F8825]'> {props.job}<img className='inline ml-2 mr-2' src={image} alt="icon" />{title}</button>
    </div>
    );
};

export default JobCategory;