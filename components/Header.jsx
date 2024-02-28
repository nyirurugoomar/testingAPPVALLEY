import React from "react";
// import { FaSearch, FaBars, FaDownload } from "-icons/fa";

function Header() {
  return (
    <div className="flex flex-row sm:flex-row items-center mt-6 bg-white border-gray-300 border-b pb-4 md:w-full sm:w-auto ">
      <div className="flex justify-center items-center w-full  mb-4 sm:mb-0">
        <h1 className="text-[#00d089] text-[23px] font-bold mr-4">
          TestValley
        </h1>
        {/* <FaBars color="#00d089" size={13} className="hidden sm:block" /> */}
        <h1 className="text-[#00d089] ml-2 hidden sm:block ">카테고리</h1>
      </div>
      <div className="relative flex justify-center w-full mb-4 sm:mb-0">
        {/* Conditionally render input field or search icon based on screen size */}
        <div className="w-full max-w-md px-4 py-2 border rounded-md pl-10">
          <input
            className="md:w-full focus:outline-none"
            type="text"
            placeholder="찾다..."
          />
          {/* Search icon */}
          <div className="sm:hidden absolute inset-y-3 left-0 items-center pl-3 pointer-events-none">
            {/* <FaSearch /> */}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center w-full gap-2">
        {/* <FaDownload /> */}
        <h1>로그인 / 회원가입</h1>
      </div>
    </div>
  );
}

export default Header;
