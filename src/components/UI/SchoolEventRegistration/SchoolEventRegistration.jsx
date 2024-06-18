"use client";

import React, { useState } from "react";
import Image from "next/image";
import SchoolEventForm from "../../../../public/assets/schooleventform.svg";

function Page() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    cellphone_number: "",
    dob: "",
    gender: "",
    profile: "",
    province: "",
    school: "",
  });
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleProfileChange = (e) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      profile: file,
    }));
  };

  function handleStep() {
    if (
      formData.first_name != "" ||
      formData.last_name != "" ||
      formData.email != "" ||
      formData.cellphone_number != "" ||
      formData.dob != "" ||
      formData.gender != "" ||
      formData.profile != ""
    ) {
      setError("");
      setStep(2);
    } else {
      setError("Please fill all the required fields!!");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("first_name", formData.first_name);
    formDataToSend.append("last_name", formData.last_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("cellphone_number", formData.cellphone_number);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("province", formData.province);
    formDataToSend.append("school", formData.school);

    // Append the featured image file
    if (formData.profile) {
      formDataToSend.append("profile", formData.profile);
    }

    try {
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }
    } catch (error) {
      console.error("Some error occurred processing the data : ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="max-w-screen z-50 h-screen overflow-hidden bg-[#efeded]">
        <div className="z-20 mt-16 h-[20vh] w-full bg-[#048FB7]"></div>
        <div className="z-50 mx-auto -mt-12 flex max-w-6xl items-center justify-center space-x-4 rounded-lg bg-white p-4">
          <div className="h-full w-1/4">
            <Image
              src={SchoolEventForm}
              alt="School Event Form Image"
              priority
              quality={80}
              className="h-auto w-full object-cover object-center"
            />
          </div>
          <div className="h-full w-3/4">
            <form
              onSubmit={handleSubmit}
              className="flex h-full w-full flex-col items-center justify-center space-y-5 font-kumbhsans text-sm font-medium text-gray-700"
            >
              <legend className="w-full text-center font-inter text-sm font-bold text-black md:text-base xl:text-lg">
                Step {step} - Fill in the Details
              </legend>
              {error && (
                <div className="self-end font-medium text-red-500">{error}</div>
              )}
              <div className="form_content flex h-full w-full flex-col items-center justify-center space-y-5">
                {step === 1 && (
                  <>
                    <div className="flex w-full space-x-3">
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="first_name">First Name *</label>
                        <input
                          required
                          type="text"
                          name="first_name"
                          id="first_name"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="last_name">Last Name *</label>
                        <input
                          required
                          type="text"
                          name="last_name"
                          id="last_name"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="flex w-full space-x-3">
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="cellphone_number">
                          CellPhone Number *
                        </label>
                        <input
                          required
                          type="text"
                          name="cellphone_number"
                          id="cellphone_number"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="CellPhone Number"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="dob">Date of Birth *</label>
                        <input
                          required
                          type="date"
                          name="dob"
                          id="dob"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="Date of Birth"
                        />
                      </div>
                    </div>
                    <div className="flex w-full space-x-3">
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="gender">Gender *</label>
                        <select
                          required
                          name="gender"
                          id="gender"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        >
                          <option value=""> </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="profile" className="w-full">
                          Profile Photo *
                          <div className="w-full border border-gray-300 bg-gray-50 p-2">
                            Add a Profile Photo
                          </div>
                        </label>
                        <input
                          required
                          type="file"
                          name="profile"
                          id="profile"
                          onChange={handleProfileChange}
                          className="hidden rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="Date of Birth"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        type="button"
                        onClick={handleStep}
                        className="w-full rounded-lg bg-[#0052a0] p-3 text-white hover:bg-[#003970]"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="province">
                        From which Province are you from? *
                      </label>
                      <select
                        required
                        name="province"
                        id="province"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                      >
                        <option value=""> </option>
                        <option value="koshi">Koshi</option>
                        <option value="madhesh">Madhesh</option>
                        <option value="bagmati">Bagmati</option>
                        <option value="gandaki">Gandaki</option>
                        <option value="lumbini">Lumbini</option>
                        <option value="karnali">Karnali</option>
                        <option value="sudurpashchim">Sudur Pashchim</option>
                      </select>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="school">School *</label>
                      <input
                        required
                        type="text"
                        name="school"
                        id="school"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type School Name"
                      />
                    </div>
                    <div className="w-full">
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-[#0052a0] p-3 text-white hover:bg-[#003970]"
                      >
                        Register
                      </button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
