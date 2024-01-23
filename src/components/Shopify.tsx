import React from "react";
import { sarah, shopify, team } from "../assets/images";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Shopify = () => {
  return (
    <div className="font-inter w-full px-20 pt-10 pb-10 bg-[#F9FAFB] flex justify-between items-start">
      <div className="w-1/2">
        <img src={shopify} alt="" className="" />
        <div className="flex justify-start gap-1 mt-10 items-center">
          <FaStar className="text-[#FDB022] text-[20px]" />
          <FaStar className="text-[#FDB022] text-[20px]" />
          <FaStar className="text-[#FDB022] text-[20px]" />
          <FaStar className="text-[#FDB022] text-[20px]" />
          <FaStar className="text-[#FDB022] text-[20px]" />
        </div>
        <h2 className="text-[#101828] text-left mt-8 font-medium text-[30px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h2>
        <div className="mt-10 w-full flex justify-between items-center">
          <div className="flex justify-start gap-4 items-center">
            <img src={sarah} alt="" />
            <div>
              <h4 className="text-[#101828] text-left  font-semibold text-[20px]">
                Sarah Thompson
              </h4>
              <h4 className="text-[#475467] text-left mt-1  font-medium text-[16px]">
                Project Manager, Shopify
              </h4>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
              <IoMdArrowRoundBack className="text-[#175CD3]" />
            </div>
            <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
              <IoMdArrowRoundForward className="text-[#175CD3]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={team} alt="" />
      </div>
    </div>
  );
};
export default Shopify;
