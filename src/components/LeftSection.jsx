import React from 'react';
import { BsBookmarkFill, BsPeopleFill } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { MdEventNote } from 'react-icons/md';
import { FaSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeftSection = () => {
  const user=useSelector((state) => state.user.user);
  return (
    <div className="w-full lg:w-72 xl:w-80 px-4 lg:px-0 lg:ml-60 mt-5 space-y-3">

    <Link to="/profile">
      <div className="bg-white rounded-xl w-full lg:w-64 xl:w-72 shadow border border-gray-200 object-cover flex flex-col relative">
        <div className="h-20 bg-gradient-to-r from-blue-50 to-blue-100 relative object-cover rounded-t-xl">
            <img 
                src="/bg_image.png" 
                alt="background" 
                className="w-full h-full object-cover opacity-70" 
            />
        </div>

        <div className="flex ml-5 -mt-12 mb-4">
                            <div className="h-20 w-20 rounded-full border-2 border-white shadow-md overflow-hidden bg-white absolute">
                              <img 
                                src={user.photo || "/unknown.jpg"}
                                className="w-full h-full object-cover" 
                                alt="Profile" 
                              />
                            </div>
        </div>

        <div className='mt-12 p-5 flex flex-col'>
            <div className='text-[25px] font-[500]'>{user.firstname} {user.lastname}</div>
            <div className='text-[15px] font-[300] '>{user.Occupation}</div>
            <div className='text-[15px] font-[300] '>{user.desc || 'Creative innovative solutions with React,Next,MERN,FUll Stack'}</div>
            <div className='text-[15px] font-[100] text-gray-400'>{user.Place}</div>
            <div className='flex flex-row mt-2'>
                <div className='flex justify-center items-center'><img src="/Harvard-Logo.png" className='w-10 h-5' alt="" /></div>
                <div className='font-[500]'>Harvard University
                University in Massachusetts</div>
            </div>
        </div>
      </div>
      </Link>

      <div className="bg-white rounded-xl w-full lg:w-64 mt-3 xl:w-72 shadow border border-gray-200 overflow-hidden text-sm relative">
        <div className="px-6 pt-3 pb-0 text-[17px] font-semibold text-gray-600">Connections</div>
        <div className='ml-6 mb-4 text-[15px] font-[400] text-gray-500'>connect with alumni</div>
        <div className='text-blue-500 absolute top-3 font-[600] right-5'>3</div>
      </div>

      <div className="space-y-4">

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 w-full lg:w-64 xl:w-72">
        <p className="text-md text-gray-500 mb-1">Boost your job search with Premium</p>
        <div className="flex items-start space-x-2">
          <FaSquare className="text-yellow-500 mt-1 h-2 w-2" />
          <p className="text-md text-black font-medium leading-tight">
            Try 1 month for ₹0, <br />
            <span className="text-gray-700 font-normal">then save 25%</span>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full lg:w-64 xl:w-72">
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-lg text-gray-800 font-bold">
          <BsBookmarkFill className="mr-3 text-lg" />
          Saved items
        </button>
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-lg text-gray-800 font-bold">
          <BsPeopleFill className="mr-3 text-lg" />
          Groups
        </button>
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-lg text-gray-800 font-bold">
          <HiOutlineNewspaper className="mr-3 text-lg" />
          Newsletters
        </button>
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-lg text-gray-800 font-bold">
          <MdEventNote className="mr-3 text-lg" />
          Events
        </button>
      </div>

    </div>
    </div>
  );
};

export default LeftSection;
