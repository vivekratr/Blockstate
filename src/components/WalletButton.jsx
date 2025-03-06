/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import {  toast,cssTransition } from 'react-toastify';


const WalletButton = () => {
  const bounce = cssTransition({
  enter: 'animate__animated animate__bounceIn',
  exit: 'animate__animated animate__bounceOut',
});
  const { currentAccount, ConnectWallet, setCurrentAccount } = useContext(ChatContext);
  const handleConnectWallet = async () => {
    try {
      await ConnectWallet();// Call the ConnectWallet function from ChatContext
      toast.success("Wallet Connected Successfully", {
        position: "bottom-right",
        autoClose: 2000, // Automatically close after 2 seconds
        hideProgressBar: false,
        closeOnClick: true, // Allow closing on click
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: "Bounce",
      transition: bounce,

      });
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };
  const handleLogout = () => {
    setCurrentAccount(""); // Clear the currentAccount state to log out
    console.log("User logged out");
    toast.success("Wallet Disconnected", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: bounce,
    });
  };
  const logo = "https://i.imgur.com/YKVYapo.jpeg";
  return (
    <div className="w-full relative flex justify-end py-1 ">
      <div className="absolute top-2 left-2">
        <img className="w-[114px]" src={logo} alt="" />
      </div>
      {currentAccount === '' ? (
        <div
          onClick={handleConnectWallet}
          className="relative rounded-lg hover:bg-violet-400 transition-transform transform hover:scale-75 bg-violet-500 box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]"
        >
          <div className="absolute top-[0.69rem] left-[0.69rem] font-medium">
            Connect to wallet
          </div>
        </div>
      ) : (
        <div
          onClick={handleLogout} // Call the logout function on click
          className="relative rounded-lg hover:bg-violet-400 bg-violet-500 transition-transform transform hover:scale-75 bg-blueviolet box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]"
        >
          <div className="text-center relative top-2 font-medium">
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletButton;
