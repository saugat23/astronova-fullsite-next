"use client";
import React, { useState } from "react";
import Image from "next/image";
import SchoolEventForm from "../../../../public/assets/schooleventform.svg";

function Page() {
  const [formData, setFormData] = useState({
    full_name: "",
    grade: "",
    email: "",
    cellphone_number: "",
    dob: "",
    school_name: "",
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

  function handleStep() {
    if (
      formData.full_name != "" ||
      formData.grade != "" ||
      formData.email != "" ||
      formData.cellphone_number != "" ||
      formData.dob != "" ||
      formData.school_name != ""
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
    formDataToSend.append("full_name", formData.full_name);
    formDataToSend.append("grade", formData.grade);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("cellphone_number", formData.cellphone_number);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("school_name", formData.school_name);
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
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="full_name">Full Name *</label>
                        <input
                          required
                          type="text"
                          name="full_name"
                          id="full_name"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col items-start justify-center space-y-2">
                        <label htmlFor="grade">Grade/Level *</label>
                        <input
                          required
                          type="text"
                          name="grade"
                          id="grade"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                          placeholder="Grade"
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
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="school_name">School/College *</label>
                      <input
                        required
                        type="text"
                        name="school_name"
                        id="school_name"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="School/College Name"
                      />
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
                      <label htmlFor="role">
                        What will be your role from the following?
                      </label>
                      <select
                        name="role"
                        id="role"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
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
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_title">
                        Title of the Project
                      </label>
                      <input
                        type="text"
                        name="project_title"
                        id="project_title"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Title"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_description">
                        Description of the Project
                      </label>
                      <textarea
                        type="text"
                        name="project_description"
                        id="project_description"
                        onChange={handleChange}
                        className="h-24 w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Title"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="category">
                        Please select the category that best fits your project:
                      </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Category"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_aim">
                        What do you aim to achieve with this project?
                      </label>
                      <input
                        type="text"
                        name="project_aim"
                        id="project_aim"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Aim"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_importance">
                        Why is this project important to you?
                      </label>
                      <input
                        type="text"
                        name="project_importance"
                        id="project_importance"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Importance"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_plan">
                        How do you plan to accomplish the project?
                      </label>
                      <input
                        type="text"
                        name="project_plan"
                        id="project_plan"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Plan"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_benefits">
                        How does this project benefit society or the community?
                      </label>
                      <input
                        type="text"
                        name="project_benefits"
                        id="project_benefits"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Benefits"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_duration">
                        Please provide an estimated time frame for completing
                        your project (in days/months)
                      </label>
                      <input
                        type="text"
                        name="project_duration"
                        id="project_duration"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Duration"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="team_members">
                        List the names of any team members involved in the
                        project (if applicable)
                      </label>
                      <input
                        type="text"
                        name="team_members"
                        id="team_members"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type team Members"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="materials">
                        List the necessary materials you need to accomplish the
                        project
                      </label>
                      <input
                        type="text"
                        name="materials"
                        id="materials"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Materials"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_cost">
                        Estimated Cost: (Mention NA if not applicable)
                      </label>
                      <input
                        type="text"
                        name="project_cost"
                        id="project_cost"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Cost"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="guidance">
                        Please mention, if you expect special
                        mentorship/guidance/resource.
                      </label>
                      <input
                        type="text"
                        name="guidance"
                        id="guidance"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Guidance"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
                      <label htmlFor="project_secondary_info">
                        Is there anything else you would like to share about
                        your project?
                      </label>
                      <input
                        type="text"
                        name="project_secondary_info"
                        id="project_secondary_info"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Info"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-2">
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
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                        placeholder="Type Project Video Link"
                      />
                    </div>
                    <div className="flex w-full items-center justify-start space-x-2">
                      <input
                        required
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                        className="inline rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                      />
                      <label htmlFor="agreement" className="inline">
                        I confirm that the information provided is accurate, and
                        I am committed to actively working on the proposed
                        project if selected and I am agree to keep my project in
                        foundation&apos;s gallery for demonstration.
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start space-x-2">
                      <input
                        required
                        type="checkbox"
                        name="parental_consent"
                        id="parental_consent"
                        className="inline rounded-lg border border-gray-300 bg-gray-50 p-2 outline-none"
                      />
                      <label htmlFor="parental_consent" className="inline">
                        I confirm that my parent/guardian has given consent for
                        me to participate in this project.
                      </label>
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
