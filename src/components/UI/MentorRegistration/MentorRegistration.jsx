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
    role: "",
    project_title: "",
    project_description: "",
    category: [],
    project_aim: "",
    project_importance: "",
    project_plan: "",
    project_benefits: "",
    project_duration: "",
    team_members: "",
    materials: "",
    project_cost: "",
    guidance: "",
    project_secondary_info: "",
    video_link: "",
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
    formDataToSend.append("role", formData.role);
    formDataToSend.append("project_title", formData.project_title);
    formDataToSend.append("project_description", formData.project_description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("project_aim", formData.project_aim);
    formDataToSend.append("project_importance", formData.project_importance);
    formDataToSend.append("project_plan", formData.project_plan);
    formDataToSend.append("project_benefits", formData.project_benefits);
    formDataToSend.append("project_duration", formData.project_duration);
    formDataToSend.append("team_members", formData.team_members);
    formDataToSend.append("materials", formData.materials);
    formDataToSend.append("project_cost", formData.project_cost);
    formDataToSend.append("guidance", formData.guidance);
    formDataToSend.append(
      "project_secondary_info",
      formData.project_secondary_info,
    );
    formDataToSend.append("video_link", formDataToSend.video_link);

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
                      <label htmlFor="role">
                        What will be your role from the following?
                      </label>
                      <select
                        name="role"
                        id="role"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                      >
                        <option value="">Choose your role</option>
                        <option value="Doing Innovative Project(Schools/Colleges Level)">
                          Doing Innovative Project(Schools/Colleges Level)
                        </option>
                        <option value="Conducting Workshops/Seminars /Campaigns /Bootcamps/Lectures/Talk series/Panel Discussion(PD)/Group Discussion(GD).">
                          Conducting Workshops/Seminars /Campaigns
                          /Bootcamps/Lectures/Talk series/Panel
                          Discussion(PD)/Group Discussion(GD).
                        </option>
                        <option value="Podcast Host/ Event Manager">
                          Podcast Host/ Event Manager
                        </option>
                        <option value="Trainer/Experts/Researchers">
                          Trainer/Experts/Researchers
                        </option>
                      </select>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_title">
                        Title of the Project
                      </label>
                      <input
                        type="text"
                        name="project_title"
                        id="project_title"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Title"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_description">
                        Description of the Project
                      </label>
                      <textarea
                        type="text"
                        name="project_description"
                        id="project_description"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full h-24 resize-none"
                        placeholder="Type Project Title"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="category">
                        Please select the category that best fits your project:
                      </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Category"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_aim">
                        What do you aim to achieve with this project?
                      </label>
                      <input
                        type="text"
                        name="project_aim"
                        id="project_aim"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Aim"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_importance">
                        Why is this project important to you?
                      </label>
                      <input
                        type="text"
                        name="project_importance"
                        id="project_importance"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Importance"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_plan">
                        How do you plan to accomplish the project?
                      </label>
                      <input
                        type="text"
                        name="project_plan"
                        id="project_plan"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Plan"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_benefits">
                        How does this project benefit society or the community?
                      </label>
                      <input
                        type="text"
                        name="project_benefits"
                        id="project_benefits"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Benefits"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_duration">
                        Please provide an estimated time frame for completing
                        your project (in days/months)
                      </label>
                      <input
                        type="text"
                        name="project_duration"
                        id="project_duration"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Duration"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="team_members">
                        List the names of any team members involved in the
                        project (if applicable)
                      </label>
                      <input
                        type="text"
                        name="team_members"
                        id="team_members"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type team Members"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="materials">
                        List the necessary materials you need to accomplish the
                        project
                      </label>
                      <input
                        type="text"
                        name="materials"
                        id="materials"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Materials"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_cost">
                        Estimated Cost: (Mention NA if not applicable)
                      </label>
                      <input
                        type="text"
                        name="project_cost"
                        id="project_cost"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Cost"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="guidance">
                        Please mention, if you expect special
                        mentorship/guidance/resource.
                      </label>
                      <input
                        type="text"
                        name="guidance"
                        id="guidance"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Guidance"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="project_secondary_info">
                        Is there anything else you would like to share about
                        your project?
                      </label>
                      <input
                        type="text"
                        name="project_secondary_info"
                        id="project_secondary_info"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Info"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-2">
                      <label htmlFor="video_link">
                        Please upload a short video (up to 120 seconds)
                        explaining your project concept and its significance.
                        You can use platforms like YouTube or Google Drive and
                        provide the link below.
                      </label>
                      <input
                        type="text"
                        name="video_link"
                        id="video_link"
                        onChange={handleChange}
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 w-full"
                        placeholder="Type Project Video Link"
                      />
                    </div>
                    <div className="w-full flex justify-start items-center space-x-2">
                      <input
                        required
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 inline"
                      />
                      <label htmlFor="agreement" className="inline">
                        I confirm that the information provided is accurate, and
                        I am committed to actively working on the proposed
                        project if selected and I am agree to keep my project in
                        foundation&apos;s gallery for demonstration.
                      </label>
                    </div>
                    <div className="w-full flex justify-start items-center space-x-2">
                      <input
                        required
                        type="checkbox"
                        name="parental_consent"
                        id="parental_consent"
                        className="bg-gray-50 rounded-lg outline-none p-2 border border-gray-300 inline"
                      />
                      <label htmlFor="parental_consent" className="inline">
                        I confirm that my parent/guardian has given consent for
                        me to participate in this project.
                      </label>
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
