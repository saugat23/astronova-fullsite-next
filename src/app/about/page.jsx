import React from "react";
import ValuesContainer from "../../components/UI/ValuesContainer";

const page = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div className="bg-[url('/abouthero.png')] bg-cover lg:h-[70vh] w-full">
        <div className="hero-container-about h-full w-full flex flex-col justify-end items-center lg:space-y-6 py-12 px-40">
          <h4 className="font-inter font-semibold text-5xl text-justify text-white">
            ABOUT US
          </h4>
          <p className="font-opensans font-normal text-xl text-justify w-[70%] mx-auto text-white">
            The Astronova Science Foundation, registered as Astronova Foundation
            Nepal, focuses on fostering a scientific and entrepreneurial mindset
            among students to drive economic development. They believe in
            shaping mindset through education and external influences, working
            primarily in Science, Information Technology, Research, Innovation,
            and Entrepreneurship to unlock student&apos;s potential nationally
            and internationally.
          </p>
          <div className="self-end flex justify-center items-center space-x-6">
            <button>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 17.6074C35 7.8818 27.1644 -0.00195312 17.5 -0.00195312C7.83123 0.000234375 -0.00439453 7.8818 -0.00439453 17.6096C-0.00439453 26.3968 6.39623 33.6812 14.7612 35.0024V22.6977H10.3206V17.6096H14.7656V13.7268C14.7656 9.31461 17.3797 6.87773 21.3762 6.87773C23.2925 6.87773 25.294 7.22117 25.294 7.22117V11.5524H23.0869C20.9147 11.5524 20.2365 12.9109 20.2365 14.3043V17.6074H25.0884L24.314 22.6955H20.2344V35.0002C28.5994 33.679 35 26.3946 35 17.6074Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 0C27.175 0 35 7.825 35 17.5C35 27.175 27.175 35 17.5 35C7.825 35 0 27.175 0 17.5C0 7.825 7.825 0 17.5 0ZM14.3 26.725C22.05 26.725 26.3 20.3 26.3 14.725V14.175C27.125 13.575 27.85 12.825 28.4 11.975C27.65 12.3 26.825 12.525 25.975 12.65C26.85 12.125 27.525 11.3 27.825 10.325C27 10.8 26.1 11.15 25.15 11.35C24.375 10.525 23.275 10.025 22.075 10.025C19.75 10.025 17.85 11.925 17.85 14.25C17.85 14.575 17.875 14.9 17.975 15.2C14.475 15.025 11.35 13.35 9.275 10.8C8.925 11.425 8.7 12.15 8.7 12.925C8.7 14.375 9.45 15.675 10.575 16.425C9.875 16.425 9.225 16.225 8.675 15.9V15.95C8.675 18 10.125 19.7 12.05 20.1C11.7 20.2 11.325 20.25 10.95 20.25C10.675 20.25 10.425 20.225 10.15 20.175C10.675 21.85 12.25 23.075 14.075 23.1C12.625 24.225 10.8 24.9 8.825 24.9C8.475 24.9 8.15 24.9 7.825 24.85C9.675 26.05 11.9 26.75 14.275 26.75"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7083 4.375C28.4819 4.375 29.2237 4.68229 29.7707 5.22927C30.3177 5.77625 30.625 6.51812 30.625 7.29167V27.7083C30.625 28.4819 30.3177 29.2237 29.7707 29.7707C29.2237 30.3177 28.4819 30.625 27.7083 30.625H7.29167C6.51812 30.625 5.77625 30.3177 5.22927 29.7707C4.68229 29.2237 4.375 28.4819 4.375 27.7083V7.29167C4.375 6.51812 4.68229 5.77625 5.22927 5.22927C5.77625 4.68229 6.51812 4.375 7.29167 4.375H27.7083ZM26.9792 26.9792V19.25C26.9792 17.9891 26.4783 16.7799 25.5867 15.8883C24.6951 14.9967 23.4859 14.4958 22.225 14.4958C20.9854 14.4958 19.5417 15.2542 18.8417 16.3917V14.7729H14.7729V26.9792H18.8417V19.7896C18.8417 18.6667 19.7458 17.7479 20.8688 17.7479C21.4102 17.7479 21.9295 17.963 22.3124 18.3459C22.6953 18.7288 22.9104 19.2481 22.9104 19.7896V26.9792H26.9792ZM10.0333 12.4833C10.6831 12.4833 11.3063 12.2252 11.7657 11.7657C12.2252 11.3063 12.4833 10.6831 12.4833 10.0333C12.4833 8.67708 11.3896 7.56875 10.0333 7.56875C9.37969 7.56875 8.75281 7.82841 8.29061 8.29061C7.82841 8.75281 7.56875 9.37969 7.56875 10.0333C7.56875 11.3896 8.67708 12.4833 10.0333 12.4833ZM12.0604 26.9792V14.7729H8.02083V26.9792H12.0604Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[url('/abouthero2.png')] bg-cover lg:h-[70vh] w-full">
        <div className="hero-container-aboutsecond h-full w-full flex flex-col justify-end items-center lg:space-y-10 py-12 px-40">
          <p className="font-opensans font-normal text-2xl text-justify w-[60%] self-end text-white">
            Astronova Science Foundation is on a mission to revolutionize
            education by deploying{" "}
            <span className="text-[#F28459] font-bold text-2xl">STEAMESIR</span>{" "}
            (Science, Technology, Engineering, Arts, Mathematics,
            Entrepreneurship, Soft-Skills)
          </p>
          <p className="font-opensans font-normal text-2xl text-justify w-[60%] self-start text-white">
            Our mission and goal is to establish a well-equipped laboratories as
            a ‘
            <span className="text-[#F28459] font-bold text-2xl">
              junior Research & Innovation Centre
            </span>
            ’ where students can join various After-School STEAMESIR Workshops.
          </p>
        </div>
      </div>
      <div className="h-auto lg:py-12 lg:px-12">
        <h2 className="font-opensans text-[#0052A0D4] font-normal text-[2.5rem]">
          Who <span className="font-bold">Are We?</span>
        </h2>
        <p className="mt-4 font-normal font-opensans text-xl text-[#042038] text-justify">
          Astronova Science Foundation is an officially registered as a
          non-profit organization under the name of &quot;
          <span className="font-bold text-[#023668]">
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
          objective is to work in the field of Science, Information Technology
          , Research, Innovation and Entrepreneurship to change the mindset of
          students from their early ages. In short, we are a group of believers
          willing to work together to provide various opportunities to explore
          and unleash students’ potential in national and international level.
        </p>
      </div>
      <div className="h-auto lg:py-12 lg:px-12 bg-[#0758A4]">
        <h3 className="font-montserrat font-semibold text-3xl text-white lg:px-6">
          <span className="py-2 border-b-2 border-white">OUR VALUES</span>
        </h3>
        <div className="flex justify-center items-center space-x-4 mt-8 py-4 h-[30vh]">
          <ValuesContainer
            svg="assets/collaboration.svg"
            title="Collaboration"
            desc="Collaborating with local communities, educational institutions, government bodies, and other stakeholders to create sustainable and impactful changes in the education sector."
          />
          <ValuesContainer
            svg="assets/carbon_sustainability.svg"
            title="Long-Term Impact"
            desc="We Priorize initiatives that have a sustainable impact on the education system in Nepal, focusing on long-term solutions rather than short-term fixes."
          />
          <ValuesContainer
            svg="assets/innovation.svg"
            title="Innovation and Creativity"
            desc="Fostering innovative approaches and creative solutions to address the challenges in the education system, including implementing new technologies and teaching methodologies."
          />
          <ValuesContainer
            svg="assets/transparency.svg"
            title="Transparency"
            desc="Ultimately, our vision is to plug students’ energy in production and services so that they can ."
          />
        </div>
      </div>
    </section>
  );
};

export default page;
