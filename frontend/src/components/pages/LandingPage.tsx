import React from 'react';
import { FaUpload } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white relative text-black font-[DM Sans]">
      {/* Top-left logo */}
      <div className="absolute top-6 left-6">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
      </div>

      {/* Centered content wrapper */}
      <div className="w-full max-w-lg flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[3.25rem] font-normal mb-4 leading-tight tracking-tight">
          SyncSyllabus
        </h1>

        <p className="text-base text-gray-700 font-light mb-2">
          The Fastest Way to Sync Course Dates to Your Calendar
        </p>

        <p className="text-sm text-gray-500 font-light mb-6">
          Drag & Drop Your <code>.pdf</code>, <code>.docx</code>, or <code>.txt</code> File To Begin
        </p>

        <FaUpload className="text-2xl text-gray-800" />
      </div>

      {/* Footer - always centered */}
      <div className="absolute bottom-6 w-full text-center text-xs text-gray-400 font-light">
        Powered by Google and Notion
      </div>
    </div>
  );
};

export default LandingPage;
