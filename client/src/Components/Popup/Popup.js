import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  const overlayStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className={`fixed  top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`} style={overlayStyle} onClick={onClose}>
      <div className="absolute rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className='flex justify-end'>
        <button className="mt-4 hidden px-4 py-2 bg-black text-white rounded-full" onClick={onClose}>
          Submit
        </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
