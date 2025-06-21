import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSend, FiImage, FiMic, FiSmile, 
  FiPaperclip, FiVideo, FiCheck, FiClock 
} from 'react-icons/fi';
import { BsThreeDotsVertical, BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Chat = () => {
  const user=useSelector((state) => state.user.user);
  const [messages, setMessages] = useState([
    {
      _id: 1,
      senderId: 'user1',
      message: 'Hey there! How are you?',
      time: '10:30 AM',
      status: 'read'
    },
    {
      _id: 2,
      senderId: 'user2',
      message: 'I’m good! Working on the React project.',
      time: '10:32 AM'
    }
  ]);
  const currentUserId = 'user1'; 
  const [newMessage, setNewMessage] = useState('');
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [isTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const newMsg = {
      _id: messages.length + 1,
      senderId: currentUserId,
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex h-2/3 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 lg:w-full mt-10 lg:ml-10"
    >
      <div className="flex-1 flex flex-col">
        <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center">
            <button className="lg:hidden mr-2 p-1 rounded-full hover:bg-gray-100">
              <BsArrowLeft className="text-gray-600" />
            </button>
            <div className="relative mr-3">
              <img
                src={user.photo || "./unknown.jpg"}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-medium">{user.firstname} {user.lastname}</h3>
              <p className="text-xs text-gray-500">{user.Occupation || "frontend developer"}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-blue-50 text-gray-600">
              <FiVideo className="text-blue-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-50 text-gray-600">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-blue-50">
          {messages.map((msg) => (
            <motion.div
              key={msg._id}
              initial={{ opacity: 0, y: msg.senderId === currentUserId ? 10 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex mb-4 ${msg.senderId === currentUserId ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.senderId === currentUserId ? 'bg-blue-500 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm'}`}>
                <p>{msg.message}</p>
                <div className="flex items-center justify-end mt-1 text-xs">
                  <span>{msg.time}</span>
                  {msg.senderId === currentUserId && (
                    <span className="ml-1">{msg.status === 'read' ? <FiCheck /> : <FiClock />}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex mb-4 justify-start">
              <div className="bg-white px-4 py-2 rounded-lg rounded-tl-none shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full hover:bg-blue-50 text-gray-600 mr-2"
              onClick={() => setShowAttachmentMenu(prev => !prev)}
            >
              <FiPaperclip />
            </button>
            <AnimatePresence>
              {showAttachmentMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-16 left-4 bg-white shadow-lg rounded-lg p-2 flex space-x-2"
                >
                  <button className="p-2 rounded-full hover:bg-blue-50 text-blue-500"><FiImage /></button>
                  <button className="p-2 rounded-full hover:bg-blue-50 text-blue-500"><FiMic /></button>
                  <button className="p-2 rounded-full hover:bg-blue-50 text-blue-500"><FiVideo /></button>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex-1 relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full border border-gray-200 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                rows={1}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-blue-50 text-gray-500">
                <FiSmile />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`ml-2 p-2 rounded-full ${!newMessage.trim() ? 'text-gray-400' : 'text-blue-500 hover:bg-blue-50'}`}
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Chat;
