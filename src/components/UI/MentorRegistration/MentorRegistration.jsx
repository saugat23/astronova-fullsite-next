"use client";
import React, { useState } from "react";
import Image from "next/image";
import SchoolEventForm from "../../../../public/assets/schooleventform.svg";

function Page() {
  const [formData, setFormData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    cellphone_number: "",
    secondary_contact_number: "",
    dob: "",
    gender: "",
    profile: "",
    organization: "",
    qualification: "",
    certificate: "",
    ID: "",
    country: "",
    address: "",
    expo_event: "",
    expo2_event: "",
    expo3_event: "",
  });
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profile: file,
    }));
  };

  const handleCertificateChange = (e) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      certificate: file,
    }));
  };

  const handleIDChange = (e) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      ID: file,
    }));
  };

  function handleStep() {
    if (
      formData.title != "" ||
      formData.first_name != "" ||
      formData.last_name != "" ||
      formData.email != "" ||
      formData.cellphone_number != "" ||
      formData.secondary_contact_number != "" ||
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
    formDataToSend.append("title", formData.title);
    formDataToSend.append("first_name", formData.first_name);
    formDataToSend.append("last_name", formData.last_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("cellphone_number", formData.cellphone_number);
    formDataToSend.append(
      "secondary_contact_number",
      formData.secondary_contact_number,
    );
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("profile", formData.profile);
    formDataToSend.append("organization", formData.organization);
    formDataToSend.append("qualification", formData.qualification);
    formDataToSend.append("certificate", formData.certificate);
    formDataToSend.append("ID", formData.ID);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("expo_event", formData.expo_event);
    formDataToSend.append("expo2_event", formData.expo2_event);
    formDataToSend.append("expo3_event", formData.expo3_event);

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
      <section className="max-w-screen z-50 h-auto min-h-screen overflow-hidden bg-[#efeded]">
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
                      <div className="flex w-1/5 flex-col items-start justify-center space-y-2">
                        <label htmlFor="title">Title *</label>
                        <select
                          required
                          name="title"
                          id="title"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="Title"
                        >
                          <option value=""> </option>
                          <option value="Prof">Prof</option>
                          <option value="Dr">Dr</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Ms">Ms</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="flex w-2/5 flex-col items-start justify-center space-y-2">
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
                      <div className="flex w-2/5 flex-col items-start justify-center space-y-2">
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
                      <div className="flex w-1/3 flex-col items-start justify-center space-y-2">
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
                      <div className="flex w-1/3 flex-col items-start justify-center space-y-2">
                        <label htmlFor="secondary_contact_number">
                          Alternative Contact Number *
                        </label>
                        <input
                          required
                          type="text"
                          name="secondary_contact_number"
                          id="secondary_contact_number"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="Secondary Contact Number"
                        />
                      </div>
                      <div className="flex w-1/3 flex-col items-start justify-center space-y-2">
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
                      <label htmlFor="organization">
                        What will be your role from the following? organization
                      </label>
                      <input
                        type="text"
                        required
                        name="organization"
                        id="organization"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Organization"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="qualification">
                        Title of the Project qualification
                      </label>
                      <input
                        required
                        type="text"
                        name="qualification"
                        id="qualification"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Qualification"
                      />
                    </div>
                    <div className="flex w-full space-x-3">
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="certificate" className="w-full">
                          Certificate *
                          <div className="w-full border border-gray-300 bg-gray-50 p-2">
                            Add a Certificate
                          </div>
                        </label>
                        <input
                          type="file"
                          name="certificate"
                          id="certificate"
                          onChange={handleCertificateChange}
                          className="hidden rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="ID" className="w-full">
                          ID/Passport *
                          <div className="w-full border border-gray-300 bg-gray-50 p-2">
                            Add a ID
                          </div>
                        </label>
                        <input
                          type="file"
                          name="ID"
                          id="ID"
                          onChange={handleIDChange}
                          className="hidden rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="country">
                        Please select the category that best fits your project:
                        country
                      </label>
                      <input
                        required
                        type="text"
                        name="country"
                        id="country"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Country"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="address">
                        What do you aim to achieve with this project? address
                      </label>
                      <input
                        required
                        type="text"
                        name="address"
                        id="address"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Address"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <h2>Why is this project important to you? expo_event</h2>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo_event"
                          id="regional_expo"
                          onChange={handleChange}
                          className="inline rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo_event" className="ml-3 inline">
                          Regional Expo
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo_event"
                          id="international_expo"
                          onChange={handleChange}
                          className="inline rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo_event" className="ml-3 inline">
                          International Science Fair
                        </label>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <h2 htmlFor="expo2_event">
                        How do you plan to accomplish the project? expo2_event
                      </h2>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="agricultural_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Agricultural Science
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="animal_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Animal Science
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="biomedical_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Biomedical and Medical Science
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="chemistry"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Chemistry and Biochemistry
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="computer_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Computer Science and Software Development
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="earth_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Earth Sciences
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="energy"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Energy
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="engineering"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Engineering
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="environment_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Environment Science
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="mathematics"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Mathematics
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="plant_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Plant Science
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="physics"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Physics, Astronomy & Space Science
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo2_event"
                          id="social_science"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Social Sciences
                        </label>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <h2 htmlFor="expo2_event">
                        How do you plan to accomplish the project? expo3_event
                      </h2>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo3_event"
                          id="normal"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo3_event" className="ml-3">
                          Normal
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo3_event"
                          id="vegetarian"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo3_event" className="ml-3">
                          Vegetarian
                        </label>
                      </div>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo3_event"
                          id="non_vegetarian"
                          onChange={handleChange}
                          className="rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                        <label htmlFor="expo3_event" className="ml-3">
                          Non Vegetarian
                        </label>
                      </div>
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
