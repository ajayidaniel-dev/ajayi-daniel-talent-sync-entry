import React from "react";
import { screen } from "../assets/images";

import { FaRegCheckCircle } from "react-icons/fa";
const Screen = () => {
  return (
    <div className="font-inter w-full gap-10 pl-20 pt-10 pb-10 bg-white flex justify-between items-start">
      <div className="w-[46%]">
        <h2 className="text-[#1D2939] font-semibold text-[36px]">
          Ready to clear the path to perfect communication?
        </h2>
        <div className="flex ml-4  justify-start gap-2 mt-6 text-[#475467] text-[16px] items-center">
          <FaRegCheckCircle className="text-[#175CD3] text-[18px]" />
          30 days free trial
        </div>
        <div className="flex  ml-4 justify-start gap-2 mt-4 text-[#475467] text-[16px] items-center">
          <FaRegCheckCircle className="text-[#175CD3] text-[18px]" />
          Cancel at any time
        </div>
        <div className="flex  ml-4 justify-start gap-2 mt-4 text-[#475467] text-[16px] items-center">
          <FaRegCheckCircle className="text-[#175CD3] text-[18px]" />
          Access to all features
        </div>
        <div className="flex  ml-4 justify-start gap-2 mt-4 text-[#475467] text-[16px] items-center">
          <FaRegCheckCircle className="text-[#175CD3] text-[18px]" />
          Peronalized onboarding
        </div>

        <div className="flex items-center mt-12 gap-4">
          <button className="h-[45px] rounded-full border border-[#98A2B3] bg-white text-[#101828] font-medium text-[16px] w-[140px]">
            Talk to sales
          </button>
          <button className="h-[45px] rounded-full  bg-[#175CD3] text-[white] font-medium text-[16px] w-[180px]">
            Start your free trial
          </button>
        </div>
      </div>
      <div className="w-[54%]">
        <img src={screen} alt="" />
      </div>
    </div>
  );
};

export default Screen;
