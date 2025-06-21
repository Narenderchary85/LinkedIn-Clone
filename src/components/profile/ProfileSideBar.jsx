import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai';

const ProfileSideBar = () => {
  return (
    <div className="space-y-4 mt-7 mr-20">

    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
        <div>
          <p className="text-md text-gray-500">Profile language</p>
          <p className="text-md text-black font-medium">English</p>
        </div>
        <AiOutlineEdit className="text-gray-600 cursor-pointer hover:text-black" />
      </div>

      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <p className="text-md text-gray-500">Public profile & URL</p>
          <p className="text-md text-blue-600 break-words">
            www.linkedin.com
          </p>
        </div>
        <AiOutlineEdit className="text-gray-600 cursor-pointer hover:text-black" />
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <div className="relative">
        <img
          src="./unknown.jpg"
          alt="Promoted"
          className="h-8 mb-2"
        />
        <span className="absolute top-0 right-0 bg-gray-200 text-xs text-gray-600 px-2 py-0.5 rounded-full">
          Promoted
        </span>
      </div>
      <h3 className="font-medium text-black text-lg mb-1">Maruti Suzuki Innovation</h3>
      <p className="text-md text-gray-700 mb-2">
        Narender, partner with Maruti Suzuki Innovation
      </p>
      <p className="text-md text-gray-500 mb-3">
        Get the latest startup programs and cohorts updates
      </p>
      <button className="w-full border border-blue-600 text-blue-600 py-1 rounded-full text-md font-medium hover:bg-blue-50">
        Follow
      </button>
    </div>

    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <h4 className="text-lg text-gray-800 font-semibold mb-3">Explore Premium profiles</h4>
      <div className="flex items-center space-x-3">
        <img
          src="./unknown.jpg"
          alt="Nithin Allagari"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h5 className="text-md font-semibold text-gray-900">Nithin Allagari <span className="inline-block ml-1 text-yellow-600">🔶</span></h5>
          <p className="text-xs text-gray-600">Student at Jain (Deemed-to-be University)/ Research Scholar</p>
          <button className="mt-2 border border-gray-400 text-gray-700 py-1 px-4 rounded-full text-sm font-medium hover:bg-gray-50">
            + Connect
          </button>
        </div>
      </div>
    </div>
  </div>
);

}

export default ProfileSideBar
