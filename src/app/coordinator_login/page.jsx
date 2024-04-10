"use client";

import React, {useState} from "react";

const Page = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="h-screeen max-w-screen overflow-hidden flex flex-col justify-start items-center xl:py-24 lg:py-20 md:18 xs:py-12 sm:py-16">
      <div className="">
        <img src="/logo.png" alt="Astronova Foundation" loading="lazy" />
      </div>
      <h2 className="font-tinos font-bold lg:text-2xl text-black tracking-[0.2em] leading-loose">
        ASTRONOVA
      </h2>
      <h2 className="font-poppins font-medium lg:text-xs text-black tracking-[0.3em] leading-loose">
        Foundation Nepal
      </h2>
      <h2 className="font-montserrat font-semibold lg:text-4xl text-[#091747] lg:mt-3">
        Welcome Back Coordinator
      </h2>
      <div className="lg:mt-12">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email or User ID"
          className="bg-[#ECECEC] p-5 outline-none font-roboto font-medium focus:border focus:border-[#134affcc] rounded-xl w-96"
          onChange={(e) => setFormData({email: e.target.value})}
          value={formData.email}
        />
      </div>
      <div className="lg:mt-6">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="bg-[#ECECEC] p-5 outline-none font-roboto font-medium focus:border focus:border-[#134affcc] rounded-xl w-96"
          // onChange={(e) => setFormData(password: e.target.value)}
          // value={formData.email}
        />
      </div>
      <div className="w-96 mt-6"><button type="submit" className="w-full h-14 p-4 bg-[#3042BA] font-poppins font-medium text-base text-white rounded-xl hover:bg-[#1d2870]">SignIn</button></div>
    </section>
  );
};

export default Page;
