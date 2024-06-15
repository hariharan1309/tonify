'use client'
// import { title } from 'process';

import React, { useState } from 'react';

interface MultipleFileUploadProps {
  accept?: string;
  maxSize?: number; // Max size in bytes
  title:string;
}

const MultipleFileUpload: React.FC<MultipleFileUploadProps> = ({ accept, maxSize,title }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const validFiles = selectedFiles.filter(
      (file) =>
        file.size <= (maxSize || 2 * 1024 * 1024) && file.type.startsWith('image/')
    );

    if (validFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      setPreviews((prevPreviews) => [
        ...prevPreviews,
        ...validFiles.map((file) => URL.createObjectURL(file)),
      ]);
    } else {
      alert('Please select an image file below 2MB.');
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...files];
    const newPreviews = [...previews];

    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);

    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  const humanFileSize = (size: number): string => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      Number((size / Math.pow(1024, i)).toFixed(2)) * 1 +
      ' ' +
      ['B', 'kB', 'MB', 'GB', 'TB'][i]
    );
  };

  return (
    <div className="relative flex flex-col text-gray-400 rounded gap-2">
      <label htmlFor={title} className="block text-sm font-medium text-gray-700 dark:text-gray-400 py-1 "> {title} </label>
      <div className="relative flex flex-col text-gray-400  border-gray-200 border-2 rounded cursor-pointer">
        <input
          accept={accept || 'image/*'}
          type="file"
          multiple
          onChange={handleFileChange}
          className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
          title={title}
          id={title}
        />
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <svg className="w-6 h-6 mb-4 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="m-0 text-sm"><span className="text-blue-500">Drag</span> your image here or click in this area.</p>
          </div>
      </div>
      <div className="flex flex-col">
        {previews.map((preview, index) => (
          <div
            key={index}
            className="flex relative flex-row items-center group justify-between p-2 text-center shadow-md rounded-md hover:scale-105 duration-200"
          >
            <img src={preview} alt="Preview" className="w-32 h-20 rounded-md object-cover" />
            <p className="m-0 text-sm">{files[index].name}</p>
            <button onClick={()=>handleRemoveFile(index)} className=" text-xs cursor-pointer group-hover:scale-110 duration-200">
                <svg className="w-5 h-5 fill-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
                </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleFileUpload;