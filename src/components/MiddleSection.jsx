import React, { useState } from 'react';
import { MdSmartDisplay } from "react-icons/md";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { PiArticleNyTimesBold } from "react-icons/pi";
import PostCard from './posts/PostCard';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPost } from './store/userSlice';
import UserCard from './posts/UserCard';

const MiddleSection = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);
  const [postImage, setPostImage] = useState('');
  const user=useSelector((state) => state.user.user);
  
  
const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => setPostImage(reader.result);
    reader.readAsDataURL(file);
  }
};

const dispatch = useDispatch();

const handlePost = () => {
  if (postText.trim() === '') return;

  const post = {
    id: Date.now(),
    text: postText,
    image: postImage,
    author: user,
    createdAt: new Date().toISOString(),
  };

  dispatch(addPost(post));
  setPostText('');
  setPostImage('');
  setShowModal(false);
};


  return (
    <div className="w-full lg:w-2/3 xl:w-500 bg-custom-gray lg:ml-6 mt-0 rounded-xl mt-5">
      <div className='w-full bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-100'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className='w-15 h-15 rounded-full border-2 border-blue-200 overflow-hidden'>
            <img 
              src={user.photo || "/unknown.jpg"}
              className='w-full h-full object-cover'
              alt="Profile"
            />
          </div>
          
          <input 
            type="text" 
            onClick={() => setShowModal(true)}
            placeholder="What's on your mind?"
            className='flex-1 bg-gray-50 rounded-full px-4 py-2 cursor-pointer h-15 text-gray-700 border-1 focus:ring-1 focus:ring-gray-500 focus:outline-none text-lg'
          />
        </div>
        
        <hr className='border-gray-100 my-2' />
        
        <div className='flex justify-between px-2'>
          <button 
          onClick={() => setShowModal(true)}
          className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium cursor-pointer'>
            <MdSmartDisplay className='text-green-700 text-[30px]' />
            <span className='text-[25px] md:text-base'>Video</span>
          </button>
          
          <button 
          onClick={() => setShowModal(true)}
          className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium cursor-pointer'>
            <MdPhotoSizeSelectActual  className='text-blue-500 text-[30px]' />
            <span className='text-[25px] md:text-base'>Photo</span>
          </button>
          
          <button
          onClick={() => setShowModal(true)}
          className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium cursor-pointer'>
            <PiArticleNyTimesBold className='text-red-500 text-[30px]' />
            <span className='text-[20px] md:text-base'>Write articles</span>
          </button>
        </div>
      </div>

      <div className='space-y-4'>
        <UserCard/>
        <PostCard />
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
          <div className="bg-white rounded-lg w-full h-auto max-w-3xl p-6 relative">
            <div className='flex'>
              <div className='w-20 h-20 rounded-full border-2 border-blue-200 overflow-hidden'>
                <img 
                  src={user.photo ||"/unknown.jpg"}
                  className='w-full h-full object-cover'
                  alt="Profile"
                />
              </div>
              <div className='flex flex-col'>
              <span className='ml-3 mt-2 text-[25px] font-semibold'>{user.firstname} {user.lastname}</span>
              <div className='text-[15px] ml-3 text-gray-400'>Post anything</div>
              </div>
            </div>
            <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer" onClick={() => setShowModal(false)}>
              <AiOutlineClose size={20} />
            </button>

            <textarea
              rows="5"
              className="w-full p-3  rounded resize-none focus:outline-none mt-3"
              placeholder="Write your thoughts..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
             <div className="mt-4">
             <MdPhotoSizeSelectActual  className='text-blue-500 text-[30px]' />
                <input type="file" accept="image/*" onChange={handleImageChange} />
                {postImage && (
                  <img src={postImage} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded border" />
                )}
              </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-200 text-black  px-5 py-2 rounded-full hover:bg-blue-700 cursor-pointer"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MiddleSection;