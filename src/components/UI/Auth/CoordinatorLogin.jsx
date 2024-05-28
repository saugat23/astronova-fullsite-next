"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../../../public/assets/logo.png";
import Image from "next/image";
import { BiShow, BiHide } from "react-icons/bi";
import { loginCoordinator } from "../../../app/services/api";
import { Toaster, toast } from "sonner";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginCoordinator(formData);
      toast.success("Loged In Succesfully!!");
      console.log(response);
      Cookies.set("token_coordinator", response.token, { expires: 7 });
      router.push("/coordinator_dashboard/dashboard");
    } catch (error) {
      toast.error("Email and Password didn't match! Please try again.");
      console.error("Invalid email or password", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    toast.info("You must Login to use the Dashboard!!");
  }, []);

  return (
    <>
      <Toaster richColors expand={true} position="top-right" />
      <section className="h-screeen w-screen overflow-hidden px-4 flex justify-center items-center mx-auto my-auto max-w-7xl py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <form
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col space-y-4 justify-center items-center"
        >
          <div className="">
            <Image src={Logo} alt="Astronova Foundation" priority />
          </div>
          <h2 className="font-kumbhsans font-bold lg:text-2xl text-black tracking-[0.2em] leading-loose">
            ASTRONOVA
          </h2>
          <h2 className="font-poppins font-medium lg:text-xs text-black tracking-[0.3em] leading-loose">
            Foundation Nepal
          </h2>
          <h2 className="font-kumbhsans font-semibold lg:text-4xl text-[#091747] lg:mt-3">
            Welcome Back Coordinator
          </h2>
          <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email or User ID"
              className="bg-[#ECECEC] p-5 outline-none font-poppins font-normal focus:border focus:border-[#134affcc] rounded-xl w-full"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-[#ECECEC] p-5 outline-none font-poppins font-normal focus:border focus:border-[#134affcc] rounded-xl w-full"
              onChange={handleChange}
              value={formData.password}
            />
            {showPassword ? (
              <BiHide
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 inline"
              />
            ) : (
              <BiShow
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 inline"
              />
            )}
          </div>
          <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto">
            <button
              type="submit"
              className="w-full h-14 p-4 bg-[#3042BA] font-poppins font-medium text-base text-white rounded-xl hover:bg-[#1d2870]"
            >
              {loading ? (
                <div className="w-1/2 mx-auto flex gap-4 items-center justify-center">
                  <p>Submitting...</p> <Loader />
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
