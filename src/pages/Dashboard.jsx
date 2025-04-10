// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
import WalletButton from "../components/WalletButton";
import "@coreui/coreui/dist/css/coreui.min.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { ChatContext } from "../context/ChatContext";
import RegisterPopup from "../components/RegisterPopup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import { ToastContainer, toast,cssTransition } from 'react-toastify';

const Dashboard = () => {
  const {
    GetPropertyById,
    currentAccount,
    GetAllTransaction,
    allProp,
    ConnectWallet,
    arr,
    setArr
  } = useContext(ChatContext);
  const [showReg, setShowReg] = React.useState(false);
  const [searchCity, setSearchCity] = React.useState("Mumbai");
  const [coordData, setCoordData] = React.useState("");
  const [propData, setPropData] = React.useState("");
 
  const navigate = useNavigate();

  const logo = "https://i.imgur.com/JtKIOGo.jpeg";

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://destate-kx3y.onrender.com/login", {
        wallet_address: currentAccount,
      });
      console.log("you just clicked submit");

      console.log("Response from server:", response.data);
      if (response.data == "0") {
        setShowReg(false);
      } else {
        setShowReg(true);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const getDataPost = async () => {
    try {
      const response = await axios.post("https://destate-kx3y.onrender.com/getdata", {});
      console.log("you just clicked submit");

      console.log("Response from server getpostdata:", response.data);
      setPropData(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const GetCoords = async () => {
    try {
      const response = await axios.post("https://destate-kx3y.onrender.com/returnid", {
        city: searchCity,
      });

      console.log("Response from server:", response.data);
      setCoordData(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const bounce = cssTransition({
  enter: 'animate__animated animate__bounceIn',
  exit: 'animate__animated animate__bounceOut',
});
  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        if (!currentAccount) {
          console.log("No account connected");
          return;
        }
        GetCoords();
        console.log("all prop", allProp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPropertyData(); // Ensure this is called when currentAccount changes
  }, [currentAccount]);
  useEffect(() => {
    GetCoords();
    getDataPost();
  }, [searchCity]);

  return (
    <div className="max-w-[1440px] flex flex-col item-center">
      {/* <ToastContainer  position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true} // Allow closing on click
rtl={false}
draggable
// pauseOnHover
theme="light"
        transition={bounce}
      /> */}
      <div
        className={` top-[0%] left-0 w-full h-full z-10 backdrop-filter backdrop-blur-sm ${
          showReg ? "fixed" : "hidden"
        } `}
      >
        <div className="flex items-center justify-center h-full">
          <RegisterPopup  func={setShowReg} />
        </div>
      </div>
      {/* <div className="w-full relative flex justify-end py-1 ">
        <div className="absolute top-2 left-2">
          <img className="w-[114px]" src={logo} alt="" />
        </div> */}
      <WalletButton toast={toast}/>
      {/* </div> */}

      <Navbar toast={toast}/>

      {/* mid section */}
      <div className="flex flex-col ">
        <div className="w-max p-[22px] relative text-[0.875rem] font-medium font-inter text-black text-left inline-block">
          Sort By
        </div>

        <div className="p-3 flex ">
          <div className="max-w-[990px] gap-4 flex flex-wrap">
          {arr.map((value, key) => (
  <Card
    // onClick={() => {
    //   navigate("/property");
    // }}
    key={key}
    data={[value.desc,value.address, value.cost,value.image, value.city, ]}
    id={value._id}
    n={key}
  />
))}


          </div>
          <div className="w-[500px] h-auto overflow-hidden">
            {/* <img className="object-cover" src="https://cdn.discordapp.com/attachments/1198196635780522055/1213706229944160376/image.png?ex=65f67302&is=65e3fe02&hm=eeea4a98c030f34d39daa13370625d4fd763660f1c2af4cfab9a44c7f9977f65&" alt="" /> */}
            {coordData != "" && <Map data={coordData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
