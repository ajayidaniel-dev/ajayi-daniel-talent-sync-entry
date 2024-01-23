import React from "react";
import Navbar from "../components/Navbar";
import {
  arrow,
  auto,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatarG,
  calendar,
  coinbase,
  dropbox,
  intercom,
  lock,
  marvel,
  noise,
  people,
  robot,
  shopify,
} from "../assets/images";
import { FaStar } from "react-icons/fa";
import Shopify from "../components/Shopify";
import FAQs from "../components/FAQs";
import Screen from "../components/Screen";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full   ">
      <div className="w-full bg-cover bg-hero pb-20 pt-8 font-inter px-20">
        <div>
          <Navbar />
        </div>
        <div className="w-full mt-32   flex items-start justify-center">
          <div className="w-[55%]">
            <h2 className="text-[#1D2939] font-semibold text-[48px]">
              Uniting the world,
              <br />
              one video call at a time
            </h2>
            <h4 className="mt-2 text-[16px] text-[#667085]">
              Experience the future of communication with ClearLink –<br />
              where crystal-clear video conferencing meets
              <br />
              unparalleled simplicity.
            </h4>
            <div className="flex justify-start mt-12 items-center gap-6">
              <button className="h-[48px] rounded-full  bg-[#175CD3] text-[white] font-medium text-[16px] w-[180px]">
                Start your free trial
              </button>
              <button className="flex justify-start items-center gap-2 text-[#175CD3]  font-semibold text-[16px] ">
                <img src={robot} alt="" />
                Discover AI assistant
              </button>
            </div>
            <div className="flex justify-start mt-12 items-center gap-6">
              <img src={avatarG} alt="" />
              <div className="">
                <div className="flex justify-start gap-1 items-center">
                  <FaStar className="text-[#FDB022] text-[20px]" />
                  <FaStar className="text-[#FDB022] text-[20px]" />
                  <FaStar className="text-[#FDB022] text-[20px]" />
                  <FaStar className="text-[#FDB022] text-[20px]" />
                  <FaStar className="text-[#FDB022] text-[20px]" />
                  <h4 className="text-[15px] ml-2 text-[#344054] font-semibold">
                    5.0
                  </h4>
                </div>
                <h4 className="text-[13px] mt-1 text-[#475467]">
                  from 3,000+ reviews
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[45%] pb-8 rounded-xl bg-[#EFF8FF] shadow-sm pt-6 px-6">
            <div className="w-full grid grid-cols-3 gap-4">
              <div className="bg-[#ff9c66] rounded-xl overflow-hidden">
                <img
                  src={avatar1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#D6BBFD] rounded-xl overflow-hidden">
                <img
                  src={avatar2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" bg-[#ACDC79]  rounded-xl overflow-hidden">
                <img
                  src={avatar3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" bg-[#B3B8D8]  rounded-xl overflow-hidden">
                <img
                  src={avatar4}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" bg-[#FEC84B]  rounded-xl overflow-hidden">
                <img
                  src={avatar5}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" bg-[#FEA3B4]  rounded-xl">
                <img src={avatar6} alt="" className="" />
              </div>
            </div>
            <div className="w-full mt-8 mb-4 flex justify-center gap-4 items-center">
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.8334 8.33332V9.99999C15.8334 13.2217 13.2217 15.8333 10 15.8333M4.16669 8.33332V9.99999C4.16669 13.2217 6.77836 15.8333 10 15.8333M10 15.8333V18.3333M6.66669 18.3333H13.3334M10 12.5C8.61931 12.5 7.50002 11.3807 7.50002 9.99999V4.16666C7.50002 2.78594 8.61931 1.66666 10 1.66666C11.3807 1.66666 12.5 2.78594 12.5 4.16666V9.99999C12.5 11.3807 11.3807 12.5 10 12.5Z"
                    stroke="#175CD3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3334 7.4428C18.3334 6.93795 18.3334 6.68553 18.2335 6.56864C18.1469 6.46722 18.017 6.4134 17.884 6.42386C17.7308 6.43592 17.5523 6.61441 17.1953 6.97139L14.1667 9.99999L17.1953 13.0286C17.5523 13.3856 17.7308 13.5641 17.884 13.5761C18.017 13.5866 18.1469 13.5328 18.2335 13.4313C18.3334 13.3145 18.3334 13.062 18.3334 12.5572V7.4428Z"
                    stroke="#175CD3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.66669 8.16666C1.66669 6.76653 1.66669 6.06646 1.93917 5.53168C2.17885 5.06128 2.56131 4.67882 3.03171 4.43914C3.56649 4.16666 4.26656 4.16666 5.66669 4.16666H10.1667C11.5668 4.16666 12.2669 4.16666 12.8017 4.43914C13.2721 4.67882 13.6545 5.06128 13.8942 5.53168C14.1667 6.06646 14.1667 6.76653 14.1667 8.16666V11.8333C14.1667 13.2335 14.1667 13.9335 13.8942 14.4683C13.6545 14.9387 13.2721 15.3212 12.8017 15.5608C12.2669 15.8333 11.5668 15.8333 10.1667 15.8333H5.66669C4.26656 15.8333 3.56649 15.8333 3.03171 15.5608C2.56131 15.3212 2.17885 14.9387 1.93917 14.4683C1.66669 13.9335 1.66669 13.2335 1.66669 11.8333V8.16666Z"
                    stroke="#175CD3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.66669 17.5H13.3334M10 14.1667V17.5M5.66669 14.1667H14.3334C15.7335 14.1667 16.4336 14.1667 16.9683 13.8942C17.4387 13.6545 17.8212 13.272 18.0609 12.8016C18.3334 12.2669 18.3334 11.5668 18.3334 10.1667V6.5C18.3334 5.09987 18.3334 4.3998 18.0609 3.86502C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4336 2.5 15.7335 2.5 14.3334 2.5H5.66669C4.26656 2.5 3.56649 2.5 3.03171 2.77248C2.56131 3.01217 2.17885 3.39462 1.93917 3.86502C1.66669 4.3998 1.66669 5.09987 1.66669 6.5V10.1667C1.66669 11.5668 1.66669 12.2669 1.93917 12.8016C2.17885 13.272 2.56131 13.6545 3.03171 13.8942C3.56649 14.1667 4.26656 14.1667 5.66669 14.1667Z"
                    stroke="#175CD3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2_8994)">
                    <path
                      d="M6.66669 11.6667C6.66669 11.6667 7.91669 13.3333 10 13.3333C12.0834 13.3333 13.3334 11.6667 13.3334 11.6667M12.5 7.49999H12.5084M7.50002 7.49999H7.50835M18.3334 9.99999C18.3334 14.6024 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6024 1.66669 9.99999C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 9.99999ZM12.9167 7.49999C12.9167 7.73011 12.7301 7.91666 12.5 7.91666C12.2699 7.91666 12.0834 7.73011 12.0834 7.49999C12.0834 7.26987 12.2699 7.08332 12.5 7.08332C12.7301 7.08332 12.9167 7.26987 12.9167 7.49999ZM7.91669 7.49999C7.91669 7.73011 7.73014 7.91666 7.50002 7.91666C7.2699 7.91666 7.08335 7.73011 7.08335 7.49999C7.08335 7.26987 7.2699 7.08332 7.50002 7.08332C7.73014 7.08332 7.91669 7.26987 7.91669 7.49999Z"
                      stroke="#175CD3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_8994">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.66667 7.91667H10M6.66667 10.8333H12.5M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5Z"
                    stroke="#175CD3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2_8998)">
                    <path
                      d="M9.99996 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99999C12.5 8.61928 11.3807 7.49999 9.99996 7.49999C8.61925 7.49999 7.49996 8.61928 7.49996 9.99999C7.49996 11.3807 8.61925 12.5 9.99996 12.5Z"
                      stroke="#175CD3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.606 12.2727C15.5052 12.5012 15.4751 12.7547 15.5197 13.0004C15.5642 13.2462 15.6814 13.473 15.856 13.6515L15.9015 13.697C16.0423 13.8377 16.1541 14.0048 16.2304 14.1887C16.3066 14.3727 16.3458 14.5698 16.3458 14.7689C16.3458 14.968 16.3066 15.1652 16.2304 15.3491C16.1541 15.5331 16.0423 15.7002 15.9015 15.8409C15.7608 15.9818 15.5937 16.0935 15.4097 16.1698C15.2258 16.246 15.0286 16.2853 14.8295 16.2853C14.6304 16.2853 14.4332 16.246 14.2493 16.1698C14.0654 16.0935 13.8983 15.9818 13.7575 15.8409L13.7121 15.7954C13.5335 15.6208 13.3068 15.5036 13.061 15.4591C12.8153 15.4145 12.5618 15.4446 12.3333 15.5454C12.1092 15.6415 11.9181 15.8009 11.7835 16.0042C11.6489 16.2074 11.5767 16.4456 11.5757 16.6894V16.8182C11.5757 17.22 11.4161 17.6054 11.1319 17.8895C10.8478 18.1737 10.4624 18.3333 10.0606 18.3333C9.65872 18.3333 9.27334 18.1737 8.98919 17.8895C8.70505 17.6054 8.54541 17.22 8.54541 16.8182V16.75C8.53955 16.4992 8.45838 16.256 8.31247 16.052C8.16655 15.848 7.96264 15.6926 7.72723 15.6061C7.49874 15.5052 7.24527 15.4751 6.99951 15.5197C6.75376 15.5642 6.52699 15.6814 6.34844 15.8561L6.30299 15.9015C6.16227 16.0424 5.99517 16.1541 5.81123 16.2304C5.6273 16.3066 5.43013 16.3459 5.23102 16.3459C5.03191 16.3459 4.83474 16.3066 4.65081 16.2304C4.46687 16.1541 4.29977 16.0424 4.15905 15.9015C4.01818 15.7608 3.90642 15.5937 3.83017 15.4097C3.75392 15.2258 3.71468 15.0287 3.71468 14.8295C3.71468 14.6304 3.75392 14.4333 3.83017 14.2493C3.90642 14.0654 4.01818 13.8983 4.15905 13.7576L4.2045 13.7121C4.37915 13.5336 4.49631 13.3068 4.54087 13.061C4.58543 12.8153 4.55535 12.5618 4.4545 12.3333C4.35847 12.1093 4.19902 11.9182 3.99577 11.7836C3.79252 11.649 3.55434 11.5767 3.31057 11.5757H3.18178C2.77993 11.5757 2.39455 11.4161 2.1104 11.132C1.82626 10.8478 1.66663 10.4624 1.66663 10.0606C1.66663 9.65875 1.82626 9.27337 2.1104 8.98922C2.39455 8.70508 2.77993 8.54544 3.18178 8.54544H3.24996C3.50071 8.53958 3.7439 8.45841 3.94791 8.3125C4.15192 8.16658 4.30732 7.96267 4.3939 7.72726C4.49474 7.49877 4.52483 7.2453 4.48027 6.99954C4.43571 6.75379 4.31855 6.52702 4.1439 6.34847L4.09844 6.30302C3.95757 6.1623 3.84581 5.9952 3.76957 5.81126C3.69332 5.62733 3.65407 5.43016 3.65407 5.23105C3.65407 5.03194 3.69332 4.83477 3.76957 4.65084C3.84581 4.4669 3.95757 4.2998 4.09844 4.15908C4.23916 4.01821 4.40627 3.90645 4.5902 3.8302C4.77414 3.75395 4.9713 3.71471 5.17041 3.71471C5.36953 3.71471 5.56669 3.75395 5.75063 3.8302C5.93456 3.90645 6.10167 4.01821 6.24238 4.15908L6.28784 4.20454C6.46638 4.37918 6.69315 4.49634 6.93891 4.5409C7.18466 4.58546 7.43813 4.55538 7.66663 4.45454H7.72723C7.9513 4.3585 8.1424 4.19905 8.277 3.9958C8.4116 3.79255 8.48384 3.55437 8.48481 3.3106V3.18181C8.48481 2.77996 8.64444 2.39458 8.92859 2.11043C9.21273 1.82629 9.59812 1.66666 9.99996 1.66666C10.4018 1.66666 10.7872 1.82629 11.0713 2.11043C11.3555 2.39458 11.5151 2.77996 11.5151 3.18181V3.24999C11.5161 3.49377 11.5883 3.73194 11.7229 3.93519C11.8575 4.13844 12.0486 4.2979 12.2727 4.39393C12.5012 4.49477 12.7547 4.52486 13.0004 4.4803C13.2462 4.43574 13.4729 4.31858 13.6515 4.14393L13.6969 4.09847C13.8376 3.9576 14.0048 3.84585 14.1887 3.7696C14.3726 3.69335 14.5698 3.6541 14.7689 3.6541C14.968 3.6541 15.1652 3.69335 15.3491 3.7696C15.533 3.84585 15.7002 3.9576 15.8409 4.09847C15.9817 4.23919 16.0935 4.4063 16.1697 4.59023C16.246 4.77417 16.2852 4.97133 16.2852 5.17044C16.2852 5.36956 16.246 5.56672 16.1697 5.75066C16.0935 5.93459 15.9817 6.1017 15.8409 6.24241L15.7954 6.28787C15.6208 6.46641 15.5036 6.69318 15.459 6.93894C15.4145 7.18469 15.4446 7.43816 15.5454 7.66666V7.72726C15.6414 7.95133 15.8009 8.14243 16.0042 8.27703C16.2074 8.41163 16.4456 8.48387 16.6894 8.48484H16.8181C17.22 8.48484 17.6054 8.64447 17.8895 8.92862C18.1737 9.21276 18.3333 9.59815 18.3333 9.99999C18.3333 10.4018 18.1737 10.7872 17.8895 11.0714C17.6054 11.3555 17.22 11.5151 16.8181 11.5151H16.75C16.5062 11.5161 16.268 11.5883 16.0648 11.723C15.8615 11.8576 15.7021 12.0487 15.606 12.2727Z"
                      stroke="#175CD3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_8998">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-20 pt-10 pb-10">
        <h4 className="text-center text-[18px] font-medium text-[#475467]">
          Join 1,500+ companies already video conferencing the ClearLink way
        </h4>
        <div className="flex justify-between gap-8 mt-8 items-center">
          <img src={shopify} alt="" className="scale-75" />
          <img src={coinbase} alt="" className="scale-75" />
          <img src={dropbox} alt="" className="scale-75" />
          <img src={intercom} alt="" className="scale-75" />
          <img src={marvel} alt="" className="scale-75" />
          <img src={auto} alt="" className="scale-75" />
        </div>
      </div>
      <div className="w-full px-20 pt-10 ">
        <div className="flex justify-start items-center">
          <div className="w-1/2">
            <h4 className="text-left text-[16px] font-semibold text-[#175CD3]">
              The ClearLink Advantage
            </h4>
            <h2 className="text-[#1D2939] font-semibold text-[48px]">
              Why choose ClearLink?
            </h2>
            <h4 className="mt-2 text-[16px] text-[#667085]">
              In a world where connection is everything, ClearLink takes the
              lead. Our cutting-edge video conferencing app offers:
            </h4>
          </div>
          <div className="w-1/2 flex relative top-12 z-10 justify-center">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full px-20  pb-10">
        <div className="flex justify-between items-center">
          <div className="w-1/2 grid gap-6 grid-cols-2">
            <div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3334 7.4428C18.3334 6.93795 18.3334 6.68553 18.2335 6.56864C18.1469 6.46722 18.017 6.4134 17.884 6.42386C17.7308 6.43592 17.5523 6.61441 17.1953 6.97139L14.1667 9.99999L17.1953 13.0286C17.5523 13.3856 17.7308 13.5641 17.884 13.5761C18.017 13.5866 18.1469 13.5328 18.2335 13.4313C18.3334 13.3145 18.3334 13.062 18.3334 12.5572V7.4428Z"
                    stroke="#175CD3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.66669 8.16666C1.66669 6.76653 1.66669 6.06646 1.93917 5.53168C2.17885 5.06128 2.56131 4.67882 3.03171 4.43914C3.56649 4.16666 4.26656 4.16666 5.66669 4.16666H10.1667C11.5668 4.16666 12.2669 4.16666 12.8017 4.43914C13.2721 4.67882 13.6545 5.06128 13.8942 5.53168C14.1667 6.06646 14.1667 6.76653 14.1667 8.16666V11.8333C14.1667 13.2335 14.1667 13.9335 13.8942 14.4683C13.6545 14.9387 13.2721 15.3212 12.8017 15.5608C12.2669 15.8333 11.5668 15.8333 10.1667 15.8333H5.66669C4.26656 15.8333 3.56649 15.8333 3.03171 15.5608C2.56131 15.3212 2.17885 14.9387 1.93917 14.4683C1.66669 13.9335 1.66669 13.2335 1.66669 11.8333V8.16666Z"
                    stroke="#175CD3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-[#101828] mt-4 font-semibold text-[20px]">
                Crystal-clear HD video{" "}
              </h4>
              <h4 className="mt-2 text-[14px] text-[#475467]">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </h4>
            </div>
            <div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <img src={noise} alt="" />
              </div>
              <h4 className="text-[#101828] mt-4 font-semibold text-[20px]">
                Noise-canceling audio
              </h4>
              <h4 className="mt-2 text-[14px] text-[#475467]">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </h4>
            </div>
            <div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <img src={calendar} alt="" />
              </div>
              <h4 className="text-[#101828] mt-4 font-semibold text-[20px]">
                Scheduling made easy
              </h4>
              <h4 className="mt-2 text-[14px] text-[#475467]">
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </h4>
            </div>
            <div>
              <div className="w-[44px] h-[44px] shadow-md rounded-full bg-white border border-[#D1E9FF] flex justify-center items-center cursor-pointer">
                <img src={lock} alt="" />
              </div>
              <h4 className="text-[#101828] mt-4 font-semibold text-[20px]">
                Bank-grade security
              </h4>
              <h4 className="mt-2 text-[14px] text-[#475467]">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </h4>
            </div>
          </div>
          <div className="w-2/5 flex  justify-center">
            <img src={people} alt="" className="scale-90 object-cover" />
          </div>
        </div>
      </div>
      <Shopify />
      <FAQs />
      <Screen />
      <Footer />
    </div>
  );
};

export default LandingPage;
