import React from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl max-h-[90vh] mt-16 sm:mt-8">
        <button
          className="absolute top-3 right-3 z-20 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200"
          onClick={onClose}
        >
          &times;
        </button>
        
        <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <video
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-contain"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;