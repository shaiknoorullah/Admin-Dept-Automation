import React, { useState } from "react";
import Top from "../img/top.svg";
import { validation } from "./validate";
import mbbg from "../img/mbbg.svg";
import { confirmOTP, sendOTP } from "./userAuth";
import Otpmodal from "./otpmodal";
import { createUserDocument, CheckUsrPhnInDb } from "./database";
import toast from "react-hot-toast";
import { onSignUpSubmit } from "./signupauth";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
  ModalCloseButton,
  PinInput,
  PinInputField,
  Box,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";

export default function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmResult, setConfirmResult] = useState();
  const [userOTP, setUserOTP] = useState("");

  const [userData, setUserData] = useState({
    studentName: "",
    mobile: "+91",
    email: "",
    rollNo: "",
  });

  const { studentName, mobile, email, rollNo } = userData;

  const handleChange = (name) => (event) => {
    setUserData({ ...userData, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let signInReturn = await sendOTP(mobile);
    // check if number exists in DB
    let Check = CheckUsrPhnInDb(mobile, rollNo).then(() => {
      return true;
    });

    if (Check==true) {
      // authenticate phone number
      setConfirmResult(signInReturn);
      setIsModalOpen(true);
    }else{
      console.log("you are already registered, Please Login")
      setIsModalOpen(false)
      toast.error("user already registered")
    }
  };

  const handleOTPChange = (value) => {
    setUserOTP(value);
  };

  const handleOTPSubmit = async () => {
    // console.log(confirmOTP(confirmResult, userOTP));
    let result = await confirmOTP(confirmResult, userOTP);
    if (result) {
      setIsModalOpen(false);
      createUserDocument(studentName, mobile, email, rollNo);
    } else {
      console.log("hello");
    }
  };

  return (
    <div>
      {/*Left Column for desktop*/}
      <Otpmodal
        isOpen={isModalOpen}
        handleOTPChange={handleOTPChange}
        handleOTPSubmit={handleOTPSubmit}
      />
      <div className="flex flex-row">
        <div className="bg-[#2455D6] basis-1/2 h-screen flex justify-center items-center">
          <img src={Top} alt="" className="w-4/5" />
        </div>
        {/*right Column*/}
        <div className="px-14 grid grid-flow-row gap-0 row-span-2">
          {/*intro Text*/}
          <div className="grid content-center">
            <h2 className="font-gilroy font-semibold text-xl">
              Let’s Login, Shall we?
              <span className="font-sofiapro font-light opacity-70 block text-lg">
                A mobile number here and login.
                <br />
                Easee-peezee
              </span>
            </h2>
          </div>
          {/*form*/}
          <div className="grid content-start row-span-2">
            <form
              action=""
              className="max-w-md mr-auto"
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="block py-2">
                Signup:
              </label>
              <input
                type="text"
                // name="studentname"
                id="input"
                placeholder="Enter Your Name"
                className="pl-6 pr-44 py-[9px] border-2 rounded-md max-w-md focus:outline-none"
                onChange={handleChange("studentName")}
                value={studentName}
              />
              <input
                type="tel"
                // name="mobile"
                id="input"
                placeholder="Enter Your Number"
                // defaultValue={"+" + 91}
                className="pl-6 pr-44 py-[9px] border-2 rounded-md max-w-md focus:outline-none"
                onChange={(validation, handleChange("mobile"))}
                value={mobile}
              />
              <input
                type="string"
                // name="email"
                id="input"
                placeholder="Enter Your email"
                className="pl-6 pr-44 py-[9px] border-2 rounded-md max-w-md focus:outline-none"
                onChange={handleChange("email")}
                value={email}
              />
              <input
                type="string"
                // name="roll_no"
                id="input"
                placeholder="Enter Your Roll Number"
                className="pl-6 pr-44 py-[9px] border-2 rounded-md max-w-md focus:outline-none"
                onChange={handleChange("rollNo")}
                value={rollNo}
              />

              <button
                className=" mt-8 bg-[#4165BF] mx-auto py-[9px] rounded-md text-white disabled:bg-slate-400 transition-colors duration-700 ease-in-out flex items-center justify-center px-[37.9%]  max-w-md"
                id="recaptcha-container"
              >
                <span id="loading" className="hidden">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                <span className="hidden" id="tick">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span id="otptext">Get OTP</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*For mobile */}
    </div>
  );
}
