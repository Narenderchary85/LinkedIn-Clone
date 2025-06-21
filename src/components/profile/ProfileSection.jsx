import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineBarChart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../store/userSlice';
import EditMode from './EditMode';
import { AnimatePresence } from 'framer-motion';
import { FaPen } from "react-icons/fa";
import UserCard from '../posts/UserCard';

const ProfileSection = () => {
  const user=useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSaveProfile = (updatedData) => {
    dispatch(updateUserProfile(updatedData));
    setIsEditModalOpen(false);
  };

  const openEditModal = () => {
    console.log("Opening edit modal...");
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    console.log("Closing edit modal...");
    setIsEditModalOpen(false);
  };

  useEffect(() => {
  
  }, [dispatch]);
  return (
    <div className="w-5xl mx-auto bg-custom-gray rounded-xl  overflow-hidden mt-7">

      <div className="relative bg-white rounded-xl border border-gray-200">
        <div className="h-50 w-max-3xl bg-gradient-to-r from-blue-500 to-blue-600">
            <img src="/bg_image.png" className='w-full h-full' alt="" />
        </div>

        <div className="absolute top-26 left-8 flex items-center space-x-4 flex flex-col">
       
          <div className="w-40 h-40 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
            
            <img
              src={user.photo || "/unknown.jpg"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
      
        </div>
          <div className='ml-10 mt-18 flex'>
            <div className="text-[35px] font-[500]">{user.firstname} {user.lastname}</div>
            <div className="text-[15px] text-blue-500 border-blue-500 flex justify-center items-center px-3 rounded-full ml-5 border-1 ">
                Add Verification Badge
            </div>
            <div className=''>
            <button 
              onClick={openEditModal} 
              className="ml-4 text-gray-500 hover:text-gray-800 p-2 bg-blue-500 text-white p-1 rounded-full hover:bg-gray-100 cursor-pointer"
              aria-label="Edit intro"
            >
              <FaPen className='w-5 h-5'/>
            </button>
            </div>
            <div className='flex ml-20'>
            <div className='flex justify-center items-center py-1'><img src="/Harvard-Logo.png" className='w-15 h-10' alt="" /></div>
                <div className='font-[500] flex justify-center items-center '>Harvard University
                University </div>
            </div>
          </div>
          <div className=''>
            <div className='text-[20px]  ml-10 font-[400] text-gray-600 mt-0'>{user.Occupation}</div>
            <div className='text-[20px]  ml-10 font-[400] text-gray-600 mt-0'>{user.desc || 'Creative innovative solutions with React,Next,MERN,FUll Stack'}</div>
            <div className='text-[20px] ml-10 font-[400] text-gray-400 mt-1'>{user.Place}</div>
            <div className='text-[20px] ml-10 font-[600] text-blue-500 mt-'>3 Connections</div>
            <div className='flex flex-col lg:flex-row ml-10 mt-3 gap-5 py-6'>
                <button className='text-lg text-white bg-blue-500 py-2 px-5 rounded-full font-bold border-2 hover:border-3'>Open to</button>
                <button className='text-lg text-blue-500 bg-white py-2 px-5 rounded-full font-bold border-2 border-blue-500 hover:border-3'>Add profile section</button>
                <button className='text-lg bg-white text-blue-500 py-2 px-5 rounded-full font-bold border-2 border-blue-500 hover:border-3'>Enhance Profile</button>
                <button className='text-lg text-gray-500 bg-white py-2 px-5 rounded-full font-bold border-2 border-gray-500 hover:border-3'>Resources</button>
            </div>
          </div>
      </div>

     
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mt-5">
        <h3 className="font-semibold text-[25px]">Suggested for you</h3>
        <p className="text-md text-gray-500 flex items-center mt-1">
            <AiOutlineEye className="mr-1" /> Private to you
        </p>

        <div className="relative bg-gray-50 border border-gray-300 rounded-lg p-4 mt-4">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-black">
            <AiOutlineClose />
            </button>

            <h4 className="font-semibold mb-1 text-lg">Stand out and build your credibility</h4>
            <p className="text-md text-gray-600 mb-3">
            Enhance your profile with personalized AI tips and stand out for up to 2x as many opportunities.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-1.5 rounded-full text-md">
            Try Premium for ₹0
            </button>
            <p className="text-lg text-gray-500 mt-1">
            1-month free with 24/7 support. Cancel anytime. We'll remind you 7 days before your trial ends.
            </p>
        </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mt-5">
        <h3 className="font-semibold text-[25px]">Analytics</h3>
        <p className="text-md text-gray-500 flex items-center mt-1">
            <AiOutlineEye className="mr-1" /> Private to you
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
            <div className="flex items-center text-lg font-semibold">
                <FaUserFriends className="text-gray-600 mr-2" />
                2 profile views
            </div>
            <p className="text-md text-gray-500">Discover who's viewed your profile.</p>
            </div>
            <div>
            <div className="flex items-center text-lg font-semibold">
                <MdOutlineBarChart className="text-gray-600 mr-2" />
                0 post impressions
            </div>
            <p className="text-md text-gray-500">
                Start a post to increase engagement.
                <br />
                <span className="text-sm">Past 7 days</span>
            </p>
            </div>
        </div>

        <div className="pt-4 border-t border-gray-100 ">
            <button className="text-md text-blue-600 font-medium hover:underline">
            Show all analytics →
            </button>
        </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative mt-5">
        <h3 className="font-semibold text-[25px] flex items-center justify-between">
            About
            <AiOutlineEdit className="text-gray-600 hover:text-black cursor-pointer" />
        </h3>

        <p className="text-md text-gray-700 mt-3">
            I am a highly motivated full stack developer with a strong foundation in modern web technologies and a growing interest in machine learning. While I may be a fresher, I have been actively working on projects that demonstrate my ability to build scalable, responsive, and user-friendly applications.
            <span className="text-blue-600 cursor-pointer ml-1">...see more</span>
        </p>
        </div>
        <div className='mt-5 w-full'>
          <UserCard/>
        </div>
        <AnimatePresence>
        {isEditModalOpen && (
          <EditMode
            user={user}
            onClose={closeEditModal}
            onSave={handleSaveProfile}
          />
        )}
      </AnimatePresence>
        </div>
  );
};

export default ProfileSection;
