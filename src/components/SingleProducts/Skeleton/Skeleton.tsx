import React from 'react';

export default function SkeletonSingleProduct() {
  return (
    <div className="container mx-auto font-sahel animate-pulse">
      <div className="grid grid-cols-[30%,70%] items-start gap-5">
        <div className="bg-white p-6 flex justify-center">
          <div className="w-[28rem] h-[28rem] bg-gray-200 " />
        </div>

        <div className="flex flex-col gap-4 text-right pt-11 ml-20 mb-10">
          <div className="h-6 bg-gray-200 rounded w-1/2 -mt-4" />
          <div className="h-5 bg-gray-200 rounded w-1/3 mt-1" />
          <div className="h-4 bg-gray-200 rounded w-2/3 mt-1" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-1" />
          <div className="h-4 bg-gray-200 rounded w-1/4 mt-1" />
          <div className="h-4 bg-gray-200 rounded w-1/6 mt-1" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mt-1" />
          <div className="h-20 bg-gray-200 rounded w-full mt-1" />
          <div className="h-4 bg-gray-200 rounded w-1/6 mt-1" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mt-1" />

          <div className="flex gap-4 mt-6">
            <div className="w-52 h-12 bg-gray-300 rounded" />
            <div className="w-52 h-12 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
