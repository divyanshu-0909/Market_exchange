"use client";
import React, { useEffect, useState } from 'react';

const ProgressBar = ({progress=1}:{progress:Number}) => {
  return (
    <div className="w-full bg-gray-200 mx-4 rounded-full h-4 overflow-hidden">
      <div
        id="progress-bar"
        className="bg-blue-600 h-4 rounded-full transition-all ease-in-out duration-700"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;