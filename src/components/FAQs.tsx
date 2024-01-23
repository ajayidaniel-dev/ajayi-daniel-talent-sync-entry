import React, { useState } from "react";
import {
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

const FAQs = () => {
  const [question, setQuestion] = useState<number>(0);
  return (
    <div className="font-inter w-full gap-6 px-20 pt-10 pb-10 bg-white flex justify-between items-start">
      <div className="w-1/2">
        <h4 className="text-left text-[16px] font-semibold text-[#175CD3]">
          Support
        </h4>
        <h2 className="text-[#1D2939] font-semibold text-[40px]">FAQs</h2>
        <div className="mt-2 text-[16px] text-[#667085]">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span className="cursor-pointer underline">
            chat to our friendly team.
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full">
          {question === 1 ? (
            <div className="w-full bg-[#EAECF0] p-4 rounded-xl flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#101828]  text-[18px]">
                  How many participants can join a ClearLink video conference?
                </h4>
                <h4 className="font-bold text-[#475467] mt-2  text-[14px]">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </h4>
              </div>
              <div>
                <MdOutlineRemoveCircleOutline
                  onClick={() => setQuestion(0)}
                  className="text-[24px] cursor-pointer text-[#98A2B3]"
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setQuestion(1)}
              className="w-full flex justify-between  mt-6 items-center text-left"
            >
              <h4 className="font-bold text-[#101828]  text-[18px]">
                How many participants can join a ClearLink video conference?
              </h4>
              <MdOutlineAddCircleOutline className="text-[24px] text-[#98A2B3]" />
            </button>
          )}
          <div className="w-full h-[1px] mt-6 rounded-full bg-[#EAECF0]" />
        </div>
        <div className="w-full">
          {question === 2 ? (
            <div className="w-full bg-[#EAECF0] p-4 rounded-xl flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#101828]  text-[18px]">
                  Can I use ClearLink on multiple devices?{" "}
                </h4>
                <h4 className="font-bold text-[#475467] mt-2  text-[14px]">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </h4>
              </div>
              <div>
                <MdOutlineRemoveCircleOutline
                  onClick={() => setQuestion(0)}
                  className="text-[24px] cursor-pointer text-[#98A2B3]"
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setQuestion(2)}
              className="w-full flex justify-between  mt-6 items-center text-left"
            >
              <h4 className="font-bold text-[#101828]  text-[18px]">
                Can I use ClearLink on multiple devices?{" "}
              </h4>
              <MdOutlineAddCircleOutline className="text-[24px] text-[#98A2B3]" />
            </button>
          )}
          <div className="w-full h-[1px] mt-6 rounded-full bg-[#EAECF0]" />
        </div>
        <div className="w-full">
          {question === 3 ? (
            <div className="w-full bg-[#EAECF0] p-4 rounded-xl flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#101828]  text-[18px]">
                  Is ClearLink compatible with other video conferencing
                  platforms?{" "}
                </h4>
                <h4 className="font-bold text-[#475467] mt-2  text-[14px]">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </h4>
              </div>
              <div>
                <MdOutlineRemoveCircleOutline
                  onClick={() => setQuestion(0)}
                  className="text-[24px] cursor-pointer text-[#98A2B3]"
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setQuestion(3)}
              className="w-full flex justify-between  mt-6 items-center text-left"
            >
              <h4 className="font-bold text-[#101828]  text-[18px]">
                Is ClearLink compatible with other video conferencing platforms?{" "}
              </h4>
              <MdOutlineAddCircleOutline className="text-[24px] text-[#98A2B3]" />
            </button>
          )}
          <div className="w-full h-[1px] mt-6 rounded-full bg-[#EAECF0]" />
        </div>
        <div className="w-full">
          {question === 4 ? (
            <div className="w-full bg-[#EAECF0] p-4 rounded-xl flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#101828]  text-[18px]">
                  How does ClearLink ensure the security of my video
                  conferences?
                </h4>
                <h4 className="font-bold text-[#475467] mt-2  text-[14px]">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </h4>
              </div>
              <div>
                <MdOutlineRemoveCircleOutline
                  onClick={() => setQuestion(0)}
                  className="text-[24px] cursor-pointer text-[#98A2B3]"
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setQuestion(4)}
              className="w-full flex justify-between  mt-6 items-center text-left"
            >
              <h4 className="font-bold text-[#101828]  text-[18px] text-left">
                How does ClearLink ensure the security of my video conferences?{" "}
              </h4>
              <MdOutlineAddCircleOutline className="text-[24px] text-[#98A2B3]" />
            </button>
          )}
          <div className="w-full h-[1px] mt-6 rounded-full bg-[#EAECF0]" />
        </div>
        <div className="w-full">
          {question === 5 ? (
            <div className="w-full bg-[#EAECF0] p-4 rounded-xl flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#101828]  text-[18px]">
                  Do I need to download any software to use ClearLink?
                </h4>
                <h4 className="font-bold text-[#475467] mt-2  text-[14px]">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </h4>
              </div>
              <div>
                <MdOutlineRemoveCircleOutline
                  onClick={() => setQuestion(0)}
                  className="text-[24px] cursor-pointer text-[#98A2B3]"
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setQuestion(5)}
              className="w-full flex justify-between  mt-6 items-center text-left"
            >
              <h4 className="font-bold text-[#101828]  text-[18px]">
                Do I need to download any software to use ClearLink?
              </h4>
              <MdOutlineAddCircleOutline className="text-[24px] text-[#98A2B3]" />
            </button>
          )}
          <div className="w-full h-[1px] mt-6 rounded-full bg-[#EAECF0]" />
        </div>
        <div className="w-full">
          {question === 6 ? (
            <div className="w-full bg-[#EAECF0] p-4 rounded-xl flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#101828]  text-[18px]">
                  What kind of customer support does ClearLink provide?
                </h4>
                <h4 className="font-bold text-[#475467] mt-2  text-[14px]">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </h4>
              </div>
              <div>
                <MdOutlineRemoveCircleOutline
                  onClick={() => setQuestion(0)}
                  className="text-[24px] cursor-pointer text-[#98A2B3]"
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setQuestion(6)}
              className="w-full flex justify-between  mt-6 items-center text-left"
            >
              <h4 className="font-bold text-[#101828]  text-[18px]">
                What kind of customer support does ClearLink provide?
              </h4>
              <MdOutlineAddCircleOutline className="text-[24px] text-[#98A2B3]" />
            </button>
          )}
          <div className="w-full h-[1px] mt-6 rounded-full bg-[#EAECF0]" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
