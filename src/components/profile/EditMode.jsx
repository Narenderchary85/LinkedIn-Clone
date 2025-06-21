import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EditMode = ({ user, onClose, onSave }) => {
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [place, setplace] = useState(user.Place);
  const [headline, setHeadline] = useState(user.Occupation);
  const [photo, setPhoto] = useState(user.photo || '');
  const [desc,setDesc]=useState(user.desc || '');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedData = {
      firstname: firstName,
      lastname: lastName,
      Occupation: headline,
      Place: place,
      photo: photo,
      desc: desc
    };
    onSave(updatedData);
  };

  return (

    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">

      <motion.div
    className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative z-10"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 50, opacity: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    onClick={(e) => e.stopPropagation()} 
  >

      <motion.div
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >

        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Edit intro</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl cursor-pointer">×</button>
        </div>

        <div className="p-6 overflow-y-auto" style={{ maxHeight: '80vh' }}>
          <div className="space-y-6">
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Photo*</label>
            <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-1 block w-full text-sm border px-3 py-2 border-gray-300 text-gray-600"
            />
            {photo && (
                <img
                src={photo}
                alt="Preview"
                className="mt-2 w-24 h-24 rounded-full  object-cover border border-gray-300"
                />
            )}
            </div>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name*</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="lastName" 
              className="block text-sm font-medium text-gray-700">Last name*</label>
              <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
              <input type="text" id="place" value={place} onChange={(e) => setplace(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
            <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
              <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="headline" className="block text-sm font-medium text-gray-700">Occupation</label>
              <input type="text" id="headline" value={headline} onChange={(e) => setHeadline(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-end p-4 bg-gray-50 border-t cursor-pointer">
          <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white cursor-pointer font-semibold rounded-full hover:bg-blue-700">Save</button>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default EditMode;