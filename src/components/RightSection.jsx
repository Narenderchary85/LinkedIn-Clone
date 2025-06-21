import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const RightSection = () => {
    const news = [
        { title: "Amazon to invest ₹2,000 crore in India", time: "18h ago", readers: "2,918" },
        { title: "Bollywood losing its stardust", time: "16h ago", readers: "685" },
        { title: "Flexible work gains ground in IT", time: "15h ago", readers: "481" },
        { title: "Rider crunch hits q-commerce", time: "15h ago", readers: "344" },
        { title: "Power generation hits new high", time: "14h ago", readers: "283" },
      ];
    
  return (
    <div className='w-full lg:w-150 xl:w-170 px-4 lg:px-0 mt-5 space-y-3'>
       <div className="bg-white w-full lg:w-100 xl:w-100 lg:mr-30 lg:ml-10 rounded-xl shadow-sm border border-gray-200 p-4 space-y-3 text-sm">

      <div className="flex items-center justify-between text-[25px]">
        <h2 className="font-semibold text-gray-800">LinkedIn News</h2>
        <FaInfoCircle className="text-gray-400 text-xs" />
      </div>

      <div className="space-y-3">
        <p className="text-lg text-gray-500 font-medium">Top stories</p>
        {news.map((item, index) => (
          <div key={index}>
            <p className="font-medium text-gray-800 hover:underline cursor-pointer text-lg">
              {item.title}
            </p>
            <p className="text-[15px] text-gray-500">{item.time} • {item.readers} readers</p>
          </div>
        ))}
        <p className="text-sm text-blue-700 font-medium hover:underline cursor-pointer mt-1">Show more ⌄</p>
      </div>

      <div className="border-t border-gray-200 pt-3">
        <h3 className="text-[25px] text-gray-500 font-semibold mb-2">Trending Skills</h3>
        <ul className="list-disc ml-5 space-y-1 text-gray-700 text-lg">
          <li>AI & Machine Learning</li>
          <li>Cloud Computing</li>
          <li>Data Analytics</li>
          <li>Project Management</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default RightSection
