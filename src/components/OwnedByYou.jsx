// import React from "react";

const OwnedByYou = () => {
  return (
    <div className="flex w-[550px] h-[180px]">
      <img
        className="w-[250px] h-auto object-cover"
        src="https://i.imgur.com/qp9Aifg.png"
        alt=""
      />
      <div className="flex flex-col gap-2 p-2">
        <div className="w-[13.75rem] relative text-[0.875rem] font-medium font-inter text-black text-left inline-block">
          Xaverian palace, 2bhk, Kandiwali
        </div>
        <div className="w-[18rem] relative text-[0.75rem] font-inter text-[#8a8a8a] text-left inline-block">{`Samtanagar, in Radhika , Sector 17 Vashi, Navi Mumbai, Maharashtra `}</div>
        <div className="flex gap-2">
          <div className="w-full flex items-center justify-center relative rounded bg-[#d5d5d5] h-[1.875rem] overflow-hidden text-left text-[0.75rem] text-black font-inter">
            <div className="">List On Marletplace</div>
          </div>
          <a className="w-full" href="https://srv1112-files.hstgr.io/ee312071dc1a34b5/api/raw/public_html/assets/report%5B1%5D.pdf?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJsb2NhbGUiOiJlbl9HQiIsInZpZXdNb2RlIjoibGlzdCIsInNpbmdsZUNsaWNrIjpmYWxzZSwicGVybSI6eyJhZG1pbiI6ZmFsc2UsImV4ZWN1dGUiOmZhbHNlLCJjcmVhdGUiOnRydWUsInJlbmFtZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWUsInNoYXJlIjpmYWxzZSwiZG93bmxvYWQiOnRydWV9LCJjb21tYW5kcyI6W10sImxvY2tQYXNzd29yZCI6dHJ1ZSwiaGlkZURvdGZpbGVzIjpmYWxzZSwiZGF0ZUZvcm1hdCI6ZmFsc2V9LCJpc3MiOiJGaWxlIEJyb3dzZXIiLCJleHAiOjE3NDEyNjk5NjksImlhdCI6MTc0MTI2Mjc2OX0.3IXLxGMv4OkTexdnY9pgOvieS7srtM8gpEwL4ex-P-s&" target="_blank">
          <div  className="w-full flex items-center justify-end px-1 gap-1 relative rounded bg-[#d5d5d5] h-[1.875rem] overflow-hidden text-left text-[0.75rem] text-black font-inter">
            <div className="">
              Property Papers
            </div>
            <img
              className="absolute h-3/5 w-[13.33%] top-[20%] right-[89.26%] bottom-[20%] left-[7.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="https://i.imgur.com/DJYbzqA.png"
            />
          </div></a>
        </div>
        <div className="w-[8.313rem] relative text-[0.75rem] font-inter text-black text-left inline-block">Owned on 17 Dec 2023</div>
      </div>
    </div>
  );
};

export default OwnedByYou;
