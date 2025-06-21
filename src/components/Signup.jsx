import React,{useState,useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { SiLoop } from 'react-icons/si';
import { useDispatch } from 'react-redux';
import { signUpUser } from './store/userSlice';

const Signup = () => {
    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: '',
        Place: '',
        Occupation: '',
        desc: '',
        photo:''
      });
      const [signed, setSigned] = useState(false);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const dispatch = useDispatch();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
      
        setTimeout(() => {
          dispatch(signUpUser(signupData));
          setSigned(true);
          setLoading(false);
        }, 1000); 
      };
    
      if (signed) {
        return <Navigate to="/home" />;
      }
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen bg-custom-gray to-white flex items-center justify-center p-4 relative"
  >
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center md:text-left mb-8 md:mb-0"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="flex items-center mb-4">
           
            <div className="text-5xl font-bold bg-[#1E90FF]  bg-clip-text text-transparent">
              LinkedIn
            </div>
          </div>
          <p className="text-[#1E90FF] text-lg max-w-md">
          Connect the world's professionals to make them more productive and successful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 hidden md:block flex items-center justify-center"
        >
         <img src="./linkedIn-Logos.JPG" className='w-50 h-50' alt="" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1E90FF] mb-2">Create Account</h2>
          <p className="text-gray-500">Join LinkedIn today</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={submitHandler} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="firstname" className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                id="firstname"
                name="firstname"
                type="text"
                value={signupData.firstname}
                onChange={handleChange}
                required
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="First name"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="lastname" className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={signupData.lastname}
                onChange={handleChange}
                required
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="Place" className="text-sm font-medium text-gray-700">
              Place
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                id="Place"
                name="Place"
                type="text"
                value={signupData.Place}
                onChange={handleChange}
                required
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Choose your Place"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="Occupation" className="text-sm font-medium text-gray-700">
              Occupation
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                id="Occupation"
                name="Occupation"
                type="Occupation"
                value={signupData.Occupation}
                onChange={handleChange}
                required
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="your Occupation"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg font-medium cursor-pointer text-white ${
              loading ? 'bg-[#1E90FF]' : 'bg-[#1E90FF] hover:bg-blue-700'
            } transition flex items-center justify-center`}
          >
            {loading ? (
              <>
                Signing up...
              </>
            ) : (
              'Sign Up'
            )}
          </motion.button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Already have an account?</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="mt-6 p-4 border border-yellow-300 bg-yellow-50 text-yellow-800 rounded-md text-sm flex items-start gap-3 absolute bottom-0 lg:bottom-8 left-1/2 transform -translate-x-1/2">

            <p>
                <strong className="font-medium">Note:</strong> Your details won’t be stored in any database — they’re just used to improve your experience on the platform. Please provide all the requested information to get the most out of your interaction.
            </p>
    </div>
  </motion.div>
  )
}

export default Signup
