import React from "react";
import { appStore, logo, playStore } from "../assets/images";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-20 font-inter">
      <div className="w-full px-20 flex justify-start items-start gap-20">
        <div className="w-[30%]">
          <img src={logo} alt="" className="cursor-pointer" />
          <h4 className="mt-4 text-[16px] text-[#475467]">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </h4>
        </div>
        <div className="w-[70%] grid grid-cols-5 items-start gap-4">
          <div className="grid grid-cols-1 gap-4">
            <h4 className="text-[14px] text-[#667085] font-semibold">
              Product
            </h4>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Overview
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Features
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Solutions
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Tutorials
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Pricing
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h4 className="text-[14px] text-[#667085] font-semibold">
              Company
            </h4>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              About Us
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Careers
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Press
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              News
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Contact
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h4 className="text-[14px] text-[#667085] font-semibold">
              Resources
            </h4>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Blog
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Events
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Help Center
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Tutorials
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Support
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h4 className="text-[14px] text-[#667085] font-semibold">Legal</h4>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Terms
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Privacy
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Cookies
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Licenses
            </a>
            <a href="#" className="text-[15px] text-[#667085] font-semibold">
              Contact
            </a>
          </div>
          <div className="grid grid-cols-1 items-start  gap-4">
            <h4 className="text-[14px] text-[#004EEB] font-semibold">
              Get the app
            </h4>
            <img src={appStore} alt="" className="cursor-pointer" />
            <img src={playStore} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full px-20 h-[90px] mt-16 justify-between flex items-center bg-[#F9FAFB]">
        <p className="text-[14px]  font-medium text-[#667085]">
          © 2023 ClearLink. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <FaLinkedin className="text-[20px] cursor-pointer text-[#98A2B3]" />
          <FaTwitter className="text-[20px] cursor-pointer text-[#98A2B3]" />
          <FaFacebook className="text-[20px] cursor-pointer text-[#98A2B3]" />
          <FaInstagram className="text-[20px] cursor-pointer text-[#98A2B3]" />
          <FaGithub className="text-[20px] cursor-pointer text-[#98A2B3]" />
          <FaYoutube className="text-[20px] cursor-pointer text-[#98A2B3]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
