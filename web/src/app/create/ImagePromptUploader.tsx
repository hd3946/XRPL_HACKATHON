import React from "react";

const ImagePromptUploader = () => {
  return (
    <div className="mb-6">
      <label className="block text-gray-300 mb-2">
        Image Prompt <i className="fas fa-info-circle"></i>
      </label>
      <div className="w-full h-32 flex justify-center items-center bg-gray-700 rounded-md">
        <p className="text-gray-400">
          <i className="fas fa-cloud-upload-alt fa-2x"></i> <br />
          Click or drag an image to upload here
        </p>
      </div>
    </div>
  );
};

export default ImagePromptUploader;
