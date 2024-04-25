"use client"
import React from 'react';
import Image from 'next/image';
import ValuesContainer from '../ValuesContainer';
import "aos/dist/aos.css";

const About = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div data-aos="fade-up" data-aos-duration="400" className="bg-[url('/abouthero.png')] bg-cover lg:h-[70vh] w-full">
        <div className="hero-container-about h-full w-full flex flex-col justify-end items-center lg:space-y-6 py-12 2xl:px-40 lg:px-32 md:px-24 sm:px-20 px-16">
          <h4 className="font-opensans font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-justify text-white">
            WHO ARE WE?
          </h4>
          <h4 className="w-2/5 font-opensans tracking-tighter font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center text-[#F28459]">
            A Nonprofit Committed to Education and Innovation
          </h4>
          <div>
            <svg
              width="80"
              height="42"
              viewBox="0 0 80 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.944 45.2829L29.9066 31.5714C30.3129 31.171 30.5128 30.6739 30.5063 30.08C30.4998 29.4861 30.289 28.9858 29.8739 28.5792C29.4587 28.1725 28.9725 27.9723 28.4152 27.9784C27.8579 27.9845 27.3761 28.1877 26.9698 28.5881L17.4874 38.6521L17.0902 2.37965C17.0839 1.801 16.8804 1.30065 16.4798 0.878607C16.0791 0.456567 15.5928 0.248678 15.0209 0.25494C14.4489 0.261203 13.9672 0.472076 13.5757 0.88756C13.1842 1.30304 12.9918 1.81534 12.9985 2.42445L13.3956 38.6969L3.65118 28.8435C3.26554 28.4517 2.79406 28.2589 2.23676 28.265C1.67946 28.2711 1.19774 28.482 0.791604 28.8976C0.385463 29.3133 0.185561 29.8104 0.191897 30.3891C0.198233 30.9677 0.409056 31.468 0.824366 31.8899L14.0401 45.3147C14.4555 45.7366 14.9491 45.9444 15.5211 45.9381C16.093 45.9318 16.5673 45.7134 16.944 45.2829Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="400" className="h-auto py-12 2xl:px-12 lg:px-8 md:px-6 sm:px-4 px-2">
        <h2 className="font-opensans text-[#0052A0D4] font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Who <span className="font-bold">Are We?</span>
        </h2>
        <p className="mt-4 font-normal font-montserrat text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#042038] text-justify">
          Astronova Science Foundation is an officially registered as a
          non-profit organization under the name of &quot;
          <span className="font-bold text-[#F28459]">
            Astronova Foundation Nepal
          </span>
          &quot;(Companies Act, 2006), Office of the Company Register,
          Tripureshwor, Kathmandu. As we believe the development of the nation
          and the world is all about the education system of the nation. To get
          developed, the country have to develop their economy, To develop
          economy, country need to be able to utilize its natural and human
          resources in optimum level, To utilize human resources in optimum
          level, country should be able to create more and more businesses and
          services within its territory. To create businesses and services,
          people in the country must have scientific and entrepreneurial
          mindset. To develop mindset, we have to work from school level. And
          importantly, the mindset can be developed by external factor by
          creating a different learning environment. Therefore, our main
          objective is to work in the field of <span className="font-bold text-[#F28459]">Science, Information Technology ,
          Research, Innovation and Entrepreneurship</span> to change the mindset of
          students from their early ages. In short, we are a group of believers
          willing to work together to provide various opportunities to explore
          and unleash students’ potential in national and international level.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="400" className="bg-[url('/abouthero2.png')] bg-cover lg:h-[70vh] w-full">
        <div className="hero-container-aboutsecond h-full w-full flex flex-col justify-end items-center lg:space-y-10 py-12 2xl:px-32 lg:px-28 md:px-20 sm:px-16 px-12">
          <div className="font-montserrat w-[60%] self-start text-white flex flex-col items-start space-y-4">
            <h4 className="text-[#FF9013] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Our <span className="font-extrabold text-white tracking-tighter">Vision</span></h4>
            <p className="font-medium text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Our Mission and Goal is to establish a well-equipped laboratories as
            a ‘
            <span className="text-[#F28459] font-bold">
              junior Research & Innovation Centre
            </span>
            ’ where students can join various After-School STEAMESIR Workshops.</p>
            
          </div>
          <div className="font-montserrat w-[60%] self-end text-white flex flex-col items-end space-y-4">
            <h4 className="text-[#FF9013] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Our <span className="font-extrabold text-white tracking-tighter">Mission</span></h4>
            <p className="font-medium text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Astronova Science Foundation is on a mission to revolutionize
            education by deploying
            <span className="text-[#F28459] font-bold"> STEAMESIR </span>
            (Science, Technology, Engineering, Arts, Mathematics,
            Entrepreneurship, Soft-Skills)</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="400" className="h-auto 2xl:py-12 lg:py-8 md:py-6 py-4 2xl:px-12 lg:px-8 md:px-6 px-4 bg-[#0758A4]">
        <h3 className="font-opensans font-semibold tracking-tighter text-3xl text-white lg:px-6 text-center">
          <span className="py-2 border-b-2 border-white">OUR VALUES</span>
        </h3>
        <div className="flex md:flex-row flex-col justify-center items-center md:space-x-4 space-x-0 space-y-4 md:space-y-0 mt-8 px-4 py-4 h-auto">
          <ValuesContainer
            svg="assets/collaboration.svg"
            bgColor="#BDB809"
            title="Collaboration"
            desc="Ultimately, our vision is to plug students’ energy in production and services so that they can."
          />
          <ValuesContainer
            svg="assets/teamwork.svg"
            bgColor="#AE0D19"
            title="Team Work"
            desc="We believe in Team work. team work is key point to the success of any organization."
          />
          <ValuesContainer
            svg="assets/knowledgetransfer.svg"
            bgColor="#2496D7"
            title="Knowledge Transfer"
            desc="We believe that knowledge should be transferred to the next generation in proper way."
          />
          <ValuesContainer
            svg="assets/collaboration.svg"
            bgColor="#77AB33"
            title="Sustainability"
            desc="We work on the field which is sustainable in all the way."
          />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="400" className="h-auto w-full 2xl:py-12 2xl:px-12 px-12 py-6 bg-blue-50">
        <div className="mx-auto w-[80%] py-6 flex flex-col md:flex-row justify-evenly items-start">
        <div>
          <Image src="/givingeducation.png" alt="Giving Education" width={240} height={240} className="sm:w-64 md:w-72 lg:w-80 2xl:w-96"/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 px-6 py-6">
          <h3 className="font-tinos font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-[#333333]">Giving Education is The Best Gift Ever</h3>
          <p className="font-opensans font-light xl:text-sm md:text-xs text-[10px] text-[#868686]">Fostering creativity, innovation, and entrepreneurship among Nepalese students through support, mentorship, and accessible resources. Creating an environment with labs and programs to encourage hands-on learning and develop real-world solutions, instilling a culture of divergent thinking for future scientists, leaders, and entrepreneurs.</p>
          <button type="button" className="font-opensans tracking-tighter font-semibold text-white 2xl:text-xl xl:text-lg md:text-base text-sm px-8 py-4 bg-[#5CB2B8] rounded-md hover:bg-[#376b6e] hover:duration-400">DONATE US</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About