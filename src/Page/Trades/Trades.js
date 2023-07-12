import React, { useState } from "react";
import profile from "../../asset/image/Ellipse 640.png";
import img from "../../asset/image/plus (11) 59.png";
import JobCategory from "../JobCategory/JobCategory";
import editImage from "../../asset/image/Vector.png";


const Trades = () => {
  const [tradeInput, setTradeInput] = useState(false);

  const tradeInputHandler = () => {
    setTradeInput(true);
  };

  const selectedJobs = [
    {
      title: "Architectural services",
      image: img,
    },
    {
      title: "Bathroom fitting",
      image: img,
    },
    {
      title: "Bricklaying & Repointing",
      image: img,
    },
  ];

  // job Category array of objects
  const jobCategories = [
    {
      title: "Architectural services",
      image: img,
    },
    {
      title: "Bathroom fitting",
      image: img,
    },
    {
      title: "Bricklaying & Repointing",
      image: img,
    },
    {
      title: "Carpentry & Joinery",
      image: img,
    },
    {
      title: "Carpets, Lino & Flooring",
      image: img,
    },
    {
      title: "Central heating",
      image: img,
    },
    {
      title: "Chimney & Fireplace",
      image: img,
    },
    {
      title: "Conservatories",
      image: img,
    },
    {
      title: "Conversions",
      image: img,
    },
    {
      title: "Damp Proofing",
      image: img,
    },
    {
      title: "Demolition & Clearance ",
      image: img,
    },
    {
      title: "Driveways & Paving",
      image: img,
    },
    {
      title: "Electrical",
      image: img,
    },
    {
      title: "Extensions",
      image: img,
    },
    {
      title: "Fascias, Soffits & Guttering",
      image: img,
    },
    {
      title: "Fencing",
      image: img,
    },
    {
      title: "Gardening & Landscaping",
      image: img,
    },
    {
      title: "Gas work",
      image: img,
    },
    {
      title: "Groundwork & Foundations",
      image: img,
    },
    {
      title: "Handyman",
      image: img,
    },
    {
      title: "Insulation",
      image: img,
    },
    {
      title: "Kitchen Fitting",
      image: img,
    },
    {
      title: "Extensions",
      image: img,
    },
    {
      title: "Extensions",
      image: img,
    },
  ];

  return (
    <div className="">
      <div className="flex items-center mb-4">
        <h1 className="lg:text-4xl text-2xl font-bold">Trades</h1>
        <p className="ml-12">
          <small>Member since 2023</small>
        </p>
      </div>
      <div className="border rounded-lg p-5 lg:p-10 w-full h-full md:flex ">
      <div className='mt-10'>
            <div className='text-center '>
                <img src={profile} alt=""  className=' mx-auto w-34'/>
                <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
            </div>    
        </div>
        {/* contact details input */}
        <div className="lg:mx-10 mx-3 border rounded-lg p-2 lg:p-5 mt-10 lg:w-[832px]">
          {/* contact */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">Trades</h3>
            {/* trades data */}
            <div className="w-full md:text-right mt-3">
              <button
                onClick={tradeInputHandler}
                className="border-2 rounded-full p-2 mr-6"
              >
                <img src={editImage} alt="" />
              </button>
            </div>
            {/* selected trades items */}
            <div className="flex flex-wrap sm:mt-3 lg:mt-0 mx-auto w-full">
              {selectedJobs.map((category, index) => (
                <JobCategory key={index} category={category}></JobCategory>
              ))}
            </div>
          </div>
          {/* trade items list to select */}
          <div className="my-3">
            <div>
              <p className="text-[#616D57] text-xl mt-3 mb-8">
                Select all the trades to suit your business.
              </p>
              <div className="flex flex-wrap sm:mt-3 lg:mt-0 mx-auto w-full">
                {jobCategories.map((category, index) => (
                  <JobCategory key={index} category={category}></JobCategory>
                ))}
              </div>
            </div>
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
    </div>
  );
};

export default Trades;