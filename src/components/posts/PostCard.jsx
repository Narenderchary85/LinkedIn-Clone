import React, { useState } from 'react';
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { RxLoop } from "react-icons/rx";
import { motion } from 'framer-motion';


const samplePosts = [
  {
    id: 1,
    user: "Rishi Kumar",
    role: "Full Stack Developer",
    time: "1d ago",
    content: "Check out my new portfolio website built with React and Tailwind!",
    image: "/unknown.jpg",
    likes: 5,
    comments: [],
    followed: false,
    liked: false,
  },
  {
    id: 2,
    user: "Harvard University",
    role: "UI/UX Designer",
    time: "2d ago",
    content: "Designing minimal interfaces is always fun!",
    image: "/Harvard-Logo.png",
    likes: 3,
    comments: [],
    followed: true,
    liked: false,
  },
  {
    id: 3,
    user: "Asha Reddy",
    role: "AI/ML Researcher",
    time: "3d ago",
    content: "Training a model to detect skin cancer using CNNs.",
    image: "/unknown.jpg",
    likes: 12,
    comments: [],
    followed: false,
    liked: false,
  },
  {
    id: 4,
    user: "Ramesh",
    role: "AI/ML Researcher",
    time: "3d ago",
    content: "Training a model to detect skin cancer using CNNs.",
    image: "/Google-logo.png",
    likes: 12,
    comments: [],
    followed: false,
    liked: false,
  },
];

const PostList = () => {
  const [posts, setPosts] = useState(samplePosts);

  const handleLike = (id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleFollow = (id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, followed: !post.followed } : post
      )
    );
  };

  const handleComment = (id, text) => {
    if (!text.trim()) return;
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, comments: [...post.comments, text] }
          : post
      )
    );
  };

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <motion.div
          key={post.id}
          className="w-full max-w-4xl bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center p-4">
            <img
              src={post.image}
              alt="User"
              className="w-15 h-15 rounded-full object-cover border-2 border-blue-100"
            />
            <div className="ml-3 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{post.user}</h3>
              <p className="text-md text-gray-500">{post.role}</p>
              <p className="text-xs text-gray-400">{post.time}</p>
            </div>
            <button
              className="flex items-center text-blue-500 font-semibold text-xl cursor-pointer hover:text-blue-600"
              onClick={() => handleFollow(post.id)}
            >
              <FaPlus className="mr-1 text-xl" />
              {post.followed ? 'Following' : 'Follow'}
            </button>
          </div>

          <div className="px-4 pb-2">
            <p className="text-gray-800 mb-4">{post.content}</p>
          </div>

          <div className="w-full bg-gray-50 flex justify-center">
            <img
              src={post.image}
              alt="Post"
              className="max-h-96 w-auto object-contain"
            />
          </div>

          <div className="px-4 py-2 border-t border-gray-100 flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">👍</div>
              </div>
              <span className="ml-2">{post.likes} likes</span>
            </div>
            <div>
              <span>{post.comments.length} comments</span>
            </div>
          </div>

          <div className="px-4 py-2 border-t border-gray-100 grid grid-cols-4 text-sm">
            <motion.button
              className={`flex items-center justify-center space-x-2 py-2 rounded-lg font-medium ${
                post.liked ? 'text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => handleLike(post.id)}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillLike className="text-xl" />
              <span>Like</span>
            </motion.button>

            <motion.button whileHover={{ scale: 1.05 }} 
            className='flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium'>
                    <AiOutlineComment className='text-xl' />
                    <span>Comment</span>
            </motion.button>

            <motion.button
              className="flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <RxLoop className="text-xl" />
              <span>Repost</span>
            </motion.button>

            <motion.button
              className="flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <PiShareFat className="text-xl" />
              <span>Share</span>
            </motion.button>
          </div>

          {post.comments.length > 0 && (
            <div className="px-4 pb-4 space-y-2 text-sm text-gray-700">
              {post.comments.map((c, i) => (
                <p key={i} className="bg-gray-100 px-3 py-1 rounded-md">{c}</p>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};


export default PostList;
