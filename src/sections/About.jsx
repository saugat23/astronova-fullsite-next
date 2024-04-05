import React from "react";

const About = () => {
  return (
    <section className='h-auto max-w-screen overflo bg-[url("/aboutsection.png")] bg-cover xl:py-12 xl:px-12'>
      <div className="xl:px-12 flex flex-col justify-center space-y-4 items-start">
        <h3 className="font-inter font-bold md:text-2xl lg:text-3xl xl:text-4xl text-[#33A4C6]">
          About Us
        </h3>
        <p className="xl:px-8 border-l-4 border-[#DB8114] font-opensans text-2xl font-normal">
          The{" "}
          <span className="text-[#BDB809] font-bold">
            Astronova Foundation Nepal
          </span>{" "}
          is officially registered as non-profit organization. It&apos;s primary
          mission is to foster creative, innovative & entrepreneurial mindset
          among school/college students from their early ages. We are working to
          create an environment where students can receive support, mentorship,
          guidance and access to tools and facilities to explore their curiosity
          so that they could be able to develop practical & soft skills,
          entrepreneurial skill and turn their ideas into reality and provide
          them national and international exposure to explore their innovative
          research ideas. Recognizing that many young minds possess innovative
          ideas and energy that often remain untapped due to financial
          constraints and a lack of resources, the foundation aims to bridge
          this gap. The foundation believes that none of the creative
          curiosities should be killed just because of lack of money and the
          resources and moves ahead accordingly.
        </p>
      </div>
      <div className="flex justify-between items-center mt-8 xl:py-8">
        <div className="w-1/4 flex flex-col justify-evenly items-center space-y-6">
          <h3 className="font-opensans font-bold text-5xl text-[#0B77A5] tracking-tight">
            OUR MAJOR WORKING AREA
          </h3>
          <p className="font-opensans font-normal text-2xl text-black text-justify">
            We are actively involving various working area. However, our major
            focusing working area are as below.
          </p>
        </div>
        <div className="grow"></div>
      </div>
      <div className="flex flex-col justify-between items-center space-y-12 mt-8">
        <h3 className="font-montserrat font-extrabold lg:text-[2rem] xl:text-[2.5rem] text-justify text-[#0052A0]">
          SUPPORT FOR STUDENTS
        </h3>
        <div className="flex justify-evenly items-center">
          <div className="p-2 flex flex-col justify-center items-center xl:space-y-6">
            <div>
              <img src="/supportstudents.png" alt="Support Students" />
            </div>
            <h3 className="font-poppins font-bold lg:text-base xl:text-lg text-black">
              Tinkering Labs Project
            </h3>
            <p className="font-poppins font-normal xl:text-xs lg:text-[10px] text-[#1F1F1F]">
              Step into the world of Tinkering Labs, where creativity knows no
              bounds! Our tinkering spaces are designed to ignite curiosity,
              foster innovation, and unleash the imagination of...{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
