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
      <section className="min-h-screen h-auto max-w-screen overflow-hidden bg-[#efeded] z-50">
        <div className="h-[20vh] bg-[#048FB7] w-full z-20"></div>
        <div className="max-w-6xl p-4 rounded-lg bg-white -mt-12 mx-auto z-50 flex justify-center items-center space-x-4">
          <div className="w-1/4 h-full">
            <Image
              src={SchoolEventForm}
              alt="School Event Form Image"
              priority
              quality={80}
              className="object-center object-cover w-full h-auto"
            />
          </div>
          <div className="w-3/4 h-full">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-center items-center space-y-5 text-gray-700 font-kumbhsans text-sm font-medium"
            >
              <legend className="font-inter w-full font-bold xl:text-lg md:text-base text-sm text-center text-black">
                Step {step} - Fill in the Details
              </legend>
              {error && (
                <div className="self-end text-red-500 font-medium">{error}</div>
              )}
              <div className="form_content w-full h-full flex flex-col justify-center items-center space-y-5">
                {step === 1 && (
                  <>
                    <div className="w-full flex space-x-3">
                      <div className="w-1/5 flex flex-col justify-center items-start space-y-2">
                        <label htmlFor="title">Title *</label>
                        <select
                          required
                          name="title"
                          id="title"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
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
                      <div className="w-2/5 flex flex-col justify-center items-start space-y-2">
                        <label htmlFor="first_name">First Name *</label>
                        <input
                          required
                          type="text"
                          name="first_name"
                          id="first_name"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="w-2/5 flex flex-col justify-center items-start space-y-2">
                        <label htmlFor="last_name">Last Name *</label>
                        <input
                          required
                          type="text"
                          name="last_name"
                          id="last_name"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="w-full flex space-x-3">
                      <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
                        <label htmlFor="cellphone_number">
                          CellPhone Number *
                        </label>
                        <input
                          required
                          type="text"
                          name="cellphone_number"
                          id="cellphone_number"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                          placeholder="CellPhone Number"
                        />
                      </div>
                      <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
                        <label htmlFor="secondary_contact_number">
                          Alternative Contact Number *
                        </label>
                        <input
                          required
                          type="text"
                          name="secondary_contact_number"
                          id="secondary_contact_number"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                          placeholder="Secondary Contact Number"
                        />
                      </div>
                      <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
                        <label htmlFor="dob">Date of Birth *</label>
                        <input
                          required
                          type="date"
                          name="dob"
                          id="dob"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                          placeholder="Date of Birth"
                        />
                      </div>
                    </div>
                    <div className="w-full flex space-x-3">
                      <div className="w-1/2 flex flex-col justify-center items-start space-y-2">
                        <label htmlFor="gender">Gender *</label>
                        <select
                          required
                          name="gender"
                          id="gender"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        >
                          <option value=""> </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                      <div className="w-1/2 flex flex-col justify-center items-start space-y-2">
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 hidden"
                          placeholder="Date of Birth"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        type="button"
                        onClick={handleStep}
                        className="bg-[#0052a0] hover:bg-[#003970] w-full rounded-lg text-white p-3"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="organization">
                        What will be your role from the following? organization
                      </label>
                      <input
                        type="text"
                        required
                        name="organization"
                        id="organization"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Organization"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="qualification">
                        Title of the Project qualification
                      </label>
                      <input
                        required
                        type="text"
                        name="qualification"
                        id="qualification"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Qualification"
                      />
                    </div>
                    <div className="w-full flex space-x-3">
                      <div className="w-1/2 flex flex-col justify-center items-start space-y-2">
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 hidden"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col justify-center items-start space-y-2">
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 hidden"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
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
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Country"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="address">
                        What do you aim to achieve with this project? address
                      </label>
                      <input
                        required
                        type="text"
                        name="address"
                        id="address"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Address"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <h2>Why is this project important to you? expo_event</h2>
                      <div>
                        <input
                          required
                          type="checkbox"
                          name="expo_event"
                          id="regional_expo"
                          onChange={handleChange}
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 inline"
                        />
                        <label htmlFor="expo_event" className="inline ml-3">
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 inline"
                        />
                        <label htmlFor="expo_event" className="inline ml-3">
                          International Science Fair
                        </label>
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
                        />
                        <label htmlFor="expo2_event" className="ml-3">
                          Social Sciences
                        </label>
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
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
                          className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300"
                        />
                        <label htmlFor="expo3_event" className="ml-3">
                          Non Vegetarian
                        </label>
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        type="submit"
                        className="bg-[#0052a0] hover:bg-[#003970] w-full rounded-lg text-white p-3"
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
