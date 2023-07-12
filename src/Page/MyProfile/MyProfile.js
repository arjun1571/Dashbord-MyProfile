import React, { useState } from "react";
import profile from "../../asset/image/Ellipse 640.png";
import editImage from "../../asset/image/Vector.png";

const MyProfile = () => {
  const contactDetails = {
    contact: "01875258984",
    name: "Kirk Smith",
    introduction: "About you",
    email: "Kirk@gmail.com",
    username: "Kirk",
    photoGalary: "",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, molestias",
    qualification:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere fugiat iusto et, excepturi quam, voluptatum molestiae labore dolor quod corrupti quibusdam officia molestias expedita culpa quas delectus, sequi accusantium",
  };

//   useState for every input edit
  const [contactInput, setContactInput] = useState(false);
  const [nameInput, setNameInput] = useState(false);
  const [introductionInput, setIntroductionInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [userNameInput, setUserNameInput] = useState(false);
  const [photoInput, setPhotoInput] = useState(false);
  const [aboutInput, setAboutInput] = useState(false);
  const [qualificationInput, setQualificationInput] = useState(false);

//   event handler for every input
  const handleContact = () => {
    setContactInput(true);
  };
  const handleName = () => {
    setNameInput(true);
  };
  const handleIntroduction = () => {
    setIntroductionInput(true);
  };
  const handleEmail = () => {
    setEmailInput(true);
  };
  const handleUserName = () => {
    setUserNameInput(true);
  };
  const handlePhoto = () => {
    setPhotoInput(true);
  };
  const handleAbout = () => {
    setAboutInput(true);
  };
  const handleQualification = () => {
    setQualificationInput(true);
  };



  return (
    <div className="" style={{ height: "1780px" }}>
      <div className="flex items-center mb-4">
        <h1 className="lg:text-4xl text-2xl font-bold">My Profile</h1>
        <p className="ml-12">
          <small>Member since 2023</small>
        </p>
      </div>
      <div className="border rounded-lg p-5 lg:p-10 w-full h-full md:flex ">
        <div className="mt-10">
          <img src={profile} alt="" className="" />
          <p className="lg:mx-12 mx-3 mt-2" style={{ color: "#3F8825" }}>
            EDIT
          </p>
        </div>
        {/* contact details input */}
        <div className="lg:mx-10 mx-3 border rounded-lg p-2 lg:p-5 mt-10 lg:w-[832px]">
          {/* contact */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">Contact Details</h3>
            {!contactInput && (
              <div className="flex items-center justify-between">
                <p>{contactDetails.contact}</p>
                <button
                  onClick={handleContact}
                  className="border-2 rounded-full p-2"
                >
                  <img src={editImage} alt="" />
                </button>
              </div>
            )}
            {contactInput && (
              <div>
                <input
                  type="text"
                  name="contact"
                  value={contactDetails.contact}
                  autoComplete="off"
                  className="pr-2 pl-3 mt-3 py-2 w-[90%] font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                />
                <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* name */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">Name</h3>
            {!nameInput && (
              <div className="flex items-center justify-between">
                <p>{contactDetails.name}</p>
                <button
                  onClick={handleName}
                  className="border-2 rounded-full p-2"
                >
                  <img src={editImage} alt="" />
                </button>
              </div>
            )}
            {nameInput && (
              <div>
                <input
                  type="text"
                  name="name"
                  value={contactDetails.name}
                  autoComplete="off"
                  className="pr-2 pl-3 mt-3 py-2 w-[90%] font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                />
                <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* introduction */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">Introduction</h3>
            {!introductionInput && (
              <div className="flex items-center justify-between">
                <p>{contactDetails.introduction}</p>
                <button
                  onClick={handleIntroduction}
                  className="border-2 rounded-full p-2"
                >
                  <img src={editImage} alt="" />
                </button>
              </div>
            )}
            {introductionInput && (
              <div>
                <input
                  type="text"
                  name="name"
                  value={contactDetails.introduction}
                  autoComplete="off"
                  className="pr-2 pl-3 mt-3 py-2 w-[90%] font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                />
                <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Email Address */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">Email address</h3>
            {!emailInput && (
              <div className="flex items-center justify-between">
                <p>{contactDetails.email}</p>
                <button
                  onClick={handleEmail}
                  className="border-2 rounded-full p-2"
                >
                  <img src={editImage} alt="" />
                </button>
              </div>
            )}
            {emailInput && (
              <div>
                <input
                  type="text"
                  name="name"
                  value={contactDetails.email}
                  autoComplete="off"
                  className="pr-2 pl-3 mt-3 py-2 w-[90%] font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                />
                <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Username */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">Username</h3>
            {!userNameInput && (
              <div className="flex items-center justify-between">
                <p>{contactDetails.username}</p>
                <button
                  onClick={handleUserName}
                  className="border-2 rounded-full p-2"
                >
                  <img src={editImage} alt="" />
                </button>
              </div>
            )}
            {userNameInput && (
              <div>
                <input
                  type="text"
                  name="name"
                  value={contactDetails.username}
                  autoComplete="off"
                  className="pr-2 pl-3 mt-3 py-2 w-[90%] font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                />
                <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* About */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">About</h3>
            {!aboutInput && (
              <div className="flex items-center justify-between">
                <p className="w-[90%]">{contactDetails.about}</p>
                <button
                  onClick={handleAbout}
                  className="border-2 rounded-full p-2"
                >
                  <img src={editImage} alt="" />
                </button>
              </div>
            )}
            {aboutInput && (
              <div>
                <textarea
                  cols="30" rows="5"
                  name="name"
                  value={contactDetails.about}
                  autoComplete="off"
                  className="pr-2 pl-3 mt-3 py-2 w-[90%] font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                />
                <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Qualifications */}
          <div className="my-3">
            <h3 className="text-xl font-semibold">Qualifications</h3>
            {!qualificationInput && (
              <div className="flex items-center justify-between">
                <p className="w-[90%]">{contactDetails.qualification}</p>
                <button
                  onClick={handleQualification}
                  className="border-2 rounded-full p-2"
                >
                  <img src={editImage} alt="" />
                </button>
              </div>
            )}
            {qualificationInput && (
              <div>
                <textarea
                  cols="30" rows="10"
                  name="name"
                  value={contactDetails.qualification}
                  autoComplete="off"
                  className="pr-2 pl-3 mt-3 py-2 w-[90%] font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
                />
                <div className="mt-3">
                  <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Save
                  </button>
                  <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;