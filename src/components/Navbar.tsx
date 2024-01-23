import React from "react";
import { logo } from "../assets/images";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="w-full font-inter px-8 h-[64px] rounded-full bg-gray-200 flex justify-between items-center">
      <div>
        <img src={logo} alt="LogoImage" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex cursor-pointer justify-center items-center ">
          <h4 className="text-[#667085] text-[18px] font-medium">Products</h4>
          <RiArrowDropDownLine className="text-[#667085] text-[28px]" />
        </div>
        <div className="flex cursor-pointer justify-center items-center ">
          <h4 className="text-[#667085] text-[18px] font-medium">Solutions</h4>
          <RiArrowDropDownLine className="text-[#667085] text-[28px]" />
        </div>
        <div className="flex cursor-pointer justify-center items-center ">
          <h4 className="text-[#667085] text-[18px] font-medium">Resources</h4>
          <RiArrowDropDownLine className="text-[#667085] text-[28px]" />
        </div>
        <div className="flex cursor-pointer justify-center items-center ">
          <h4 className="text-[#667085] text-[18px] font-medium">Pricing</h4>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="h-[42px] rounded-full border border-[#98A2B3] bg-white text-[#101828] font-medium text-[16px] w-[140px]">
          Talk to sales
        </button>
        <button className="h-[42px] rounded-full  bg-[#175CD3] text-[white] font-medium text-[16px] w-[160px]">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
