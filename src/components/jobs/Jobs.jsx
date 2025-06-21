import React,{useRef} from 'react';
import { FiX } from 'react-icons/fi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import amazon from '../../assets/amazon-logo.png'; 
import google from '../../assets/Google-logo.png';
import atlassian from '../../assets/atlassian.webp';
import gen from '../../assets/gen-pact.png';
import sap from '../../assets/sap.jpg';
import {motion} from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Jobs = () => {
    const jobData = [
        {
          id: 1,
          title: "Frontend Developer Intern",
          company: "Lead India",
          location: "India (Remote)",
          promoted: true,
          proimge:amazon,
        },
        {
          id: 2,
          title: "Backend Intern",
          company: "Karta",
          location: "Bengaluru, Karnataka, India (On-site)",
          promoted: true,
          activelyReviewing: true,
          easyApply: true,
          proimge:google,  
        },
        {
          id: 3,
          title: "Web Developer",
          company: "Startupvisors",
          location: "India (Remote)",
          promoted: true,
          proimge:atlassian,
        },
      ];

      const companies = [
        {
          id: 1,
          name: 'Genpact',
          location: 'New York, United States',
          employees: '10,001+ employees',
          image: gen,
        },
        {
          id: 2,
          name: 'Amazon',
          location: 'Pune, India',
          employees: '10,001+ employees',
          image: amazon,
        },
        {
          id: 3,
          name: 'SAP',
          location: 'Walldorf, Germany',
          employees: '10,001+ employees',
          image: sap,
        },
        {
            id: 4,
            name: 'Google',
            location: 'Walldorf, Germany',
            employees: '10,001+ employees',
            image: google,
          },
          {
            id: 5,
            name: 'Atlassian',
            location: 'Walldorf, Germany',
            employees: '10,001+ employees',
            image: atlassian,
          },
      ];
      const scrollRef = useRef(null);

      const scroll = (direction) => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: direction === 'right' ? 300 : -300,
            behavior: 'smooth',
          });
        }
      };
    
  return (
    <div className='flex flex-col'>
    <motion.div 
    whileHover={{ y: -5 }}
    className="w-full lg:w-4xl mt-6 h-auto bg-white border border-gray-200 rounded-xl shadow-sm ">

      <div className="px-5 py-4 ">
        <h2 className="font-semibold text-[25px]">Top job picks for you</h2>
        <p className="text-lg text-gray-500">Based on your profile, preferences, and activity like applies, searches, and saves</p>
      </div>

      {jobData.map((job, index) => (
        <div key={job.id} className={`flex justify-between items-start px-5 py-4 ${index < jobData.length - 1 ? '' : ''}`}>
         <motion.div
         whileHover={{ y: -5 }}
         className='flex flex-row'>
            <img src={job.proimge} className='w-12 rounded-full h-12 mr-5' alt="" />
         <div className="flex flex-col space-y-1">
            <a href="#" className="text-blue-700 text-lg font-semibold hover:underline">{job.title}</a>
            <p className="text-md text-gray-700">{job.company} · {job.location}</p>
            <div className="flex items-center space-x-2 mt-1">
              {job.activelyReviewing && (
                <div className="flex items-center space-x-1 text-green-600 text-md font-medium">
                  <BsCheckCircleFill className="text-base" />
                  <span>Actively reviewing applicants</span>
                </div>
              )}
              {job.promoted && (
                <span className="text-gray-400 text-xs">Promoted</span>
              )}
              {job.easyApply && (
                <div className="flex items-center text-xs text-gray-500 space-x-1">
                  <FaLinkedin className="text-blue-700 text-sm" />
                  <span>Easy Apply</span>
                </div>
              )}
            </div>
          </div>
         </motion.div>
          <FiX className="text-gray-500 cursor-pointer hover:text-gray-700 mt-1" />
        </div>
      ))}

      <div className="px-5 py-3 bg-gray-50 text-md text-blue-700 font-medium text-center cursor-pointer hover:underline">
        Show all →
      </div>
    </motion.div>
   

    <div className="w-full lg:w-4xl bg-white rounded-xl border border-gray-200 shadow-sm p-4 mt-5">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[25px] font-semibold">Show your interest in these companies</h2>
          <p className="text-lg text-gray-500">Privately share your profile with recruiters • Promoted</p>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaChevronLeft />
          </button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide"
      >
        {companies.map((company) => (
          <motion.div
          whileHover={{ y: -5 }}
            key={company.id}
            className="min-w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex-shrink-0"
          >
            <img src={company.image} alt={company.name} className="w-full h-20 object-cover rounded mb-2" />
            <h3 className="font-semibold">{company.name}</h3>
            <p className="text-sm text-gray-500">{company.employees} · {company.location}</p>
            <p className="text-green-600 text-sm mt-1">✔ Actively recruiting</p>
            <button className="w-full mt-2 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
              I'm interested
            </button>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="w-full lg:w-4xl mt-7 h-auto bg-white border border-gray-200 rounded-xl shadow-sm ">
      <div className="px-5 py-4 ">
        <h2 className="font-semibold text-[25px]">Recent job searches</h2>
      </div>

      {jobData.map((job, index) => (
        <div key={job.id} className={`flex justify-between items-start px-5 py-4 ${index < jobData.length - 1 ? '' : ''}`}>
          <div className="flex flex-col space-y-1">
            <a href="#" className="text-black text-lg font-semibold hover:underline">{job.title}</a>
            <p className="text-lg text-gray-700">{job.company} · {job.location}</p>
            <div className="flex items-center space-x-2 mt-1">
              {job.activelyReviewing && (
                <div className="flex items-center space-x-1 text-green-600 text-xs font-medium">
                  <BsCheckCircleFill className="text-base" />
                  <span>Actively reviewing applicants</span>
                </div>
              )}
              {job.promoted && (
                <span className="text-gray-400 text-xs">Promoted</span>
              )}
              {job.easyApply && (
                <div className="flex items-center text-xs text-gray-500 space-x-1">
                  <FaLinkedin className="text-blue-700 text-sm" />
                  <span>Easy Apply</span>
                </div>
              )}
            </div>
          </div>
          <FiX className="text-gray-500 cursor-pointer hover:text-gray-700 mt-1" />
        </div>
      ))}

      <div className="px-5 py-3 bg-gray-50 text-sm text-blue-700 font-medium text-center cursor-pointer hover:underline">
        Show all →
      </div>
    </div>
    </div>
  )
}

export default Jobs;
