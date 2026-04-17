import React, { useState } from "react";

const ImgUploader = ({ label, id, onChange, src }) => {
  // State to hold the preview URL of the selected image file
  const [preview, setPreview] = useState(null);

  // Clear preview when src or image is cleared
  React.useEffect(() => {
    if (!src) setPreview(null);
  }, [src]);

  // Also clear preview when file input is reset (image becomes null)
  React.useEffect(() => {
    if (src === null) setPreview(null);
  }, [src]);

  // Handle file input change, update preview and call onChange prop, filleter to only accept image files, [0] get first from file list.
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange(e);
    }
  };
  // Show preview from new file or src prop
  const showPreview = preview || src;
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-base font-medium">{label}</label>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-gray-300 border-dashed rounded-sm cursor-pointer hover:border-blue-500 transition relative overflow-hidden shadow"
      >
        {showPreview ? (
          <img
            src={showPreview}
            alt="preview"
            className="object-cover w-full h-full rounded-sm"
          />
        ) : (
          <p className="text-gray-500 text-sm text-center px-2">
            Click to upload
          </p>
        )}
      </label>
      <input
        type="file"
        id={id}
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default ImgUploader;
