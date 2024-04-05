import React from "react";
import ValuesContainer from "../../../components/UI/ValuesContainer";
import BoardMember from "../../../components/UI/BoardMember";
import Experts from "../../../components/UI/Experts";
import TeamMembers from "../../../components/UI/TeamMembers";
import TestimonialsDiv from "../../../components/UI/TestimonialsDiv";

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
              <img src="/assets/facebook.svg" alt="Facebook Icon" />
            </button>
            <button>
              <img src="/assets/twitter.svg" alt="Twitter Icon" />
            </button>
            <button>
              <img src="/assets/linkedin.svg" alt="LinkedIn Icon" />
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
          objective is to work in the field of Science, Information Technology ,
          Research, Innovation and Entrepreneurship to change the mindset of
          students from their early ages. In short, we are a group of believers
          willing to work together to provide various opportunities to explore
          and unleash students’ potential in national and international level.
        </p>
      </div>
      <div className="h-auto lg:py-12 lg:px-12 bg-[#0758A4]">
        <h3 className="font-montserrat font-semibold text-3xl text-white lg:px-6">
          <span className="py-2 border-b-2 border-white">OUR VALUES</span>
        </h3>
        <div className="flex justify-center items-center space-x-4 mt-8 py-4 h-auto">
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
      <div className="h-auto overflow-hidden">
        <div className="bg-[url(/board.png)] flex flex-col justify-center items-center space-y-4 shadow-xl lg:py-12 lg:px-12 w-full">
          <div className="flex justify-center items-center">
            <h3 className="font-montserrat font-extrabold lg:text-[2.5rem] text-justify text-[#0052A0]">
              BOARD OF DIRECTORS
            </h3>
          </div>
          <div className="w-full flex justify-around items-center">
            <BoardMember
              imgSrc="/founder.png"
              name="Mr. Kishan Bastola"
              position="Founder & President"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <BoardMember
              imgSrc="cofounder.png"
              name="Mr. Kishan Bastola"
              position="Co-Founder"
            />
            <BoardMember
              imgSrc="chiefsecretary.png"
              name="Mr. Kishan Bastola"
              position="Chief Secretary"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <BoardMember
              imgSrc="treasurer.png"
              name="Mr. Kishan Bastola"
              position="Treasurer"
            />
            <BoardMember
              imgSrc="boardmember1.png"
              name="Mr. Sandip Dahal"
              position="Board Member"
            />
            <BoardMember
              imgSrc="boardmember2.png"
              name="Ms. Rojina Bastola"
              position="Board Member"
            />
          </div>
        </div>
      </div>
      <div className="h-auto overflow-hidden mt-4 bg-blue-50">
        <div className="flex justify-center items-center py-8">
          <h3 className="font-montserrat font-extrabold lg:text-[2.5rem] text-[#0052A0]">
            MEET OUR EXPERTS
          </h3>
        </div>
        <div className="shadow-lg bg-white lg:py-12 lg:px-12 grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4">
          <Experts
            imgSrc="/kapilpaudel.png"
            name="Kapil Paudel"
            profession="Scientist"
          />
          <Experts
            imgSrc="/babatundeayoola.png"
            name="Mr. Babatunde Ayoola"
            profession="Child Psychologist"
          />
          <Experts
            imgSrc="/yogeshchandna.png"
            name="Dr. Yogesh Chandna"
            profession="Author,Vedic Mathematics International Trainer"
          />
          <Experts
            imgSrc="/chhabiadhikari.png"
            name="Mr. Chhabi Adhikari"
            profession="NLP Trainer"
          />
          <Experts
            imgSrc="/akashdeo.png"
            name="Mr. Aakash Deo"
            profession="Scientist & Researcher"
          />
        </div>
      </div>
      <div className="h-auto overflow-hidden mt-4 bg-blue-50">
        <div className="flex justify-center items-center py-8">
          <h3 className="font-montserrat font-extrabold lg:text-[2.5rem] text-[#0052A0]">
            OUR TEAM MEMBERS
          </h3>
        </div>
        <div className="shadow-lg bg-white lg:py-12 lg:px-12 grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-4">
          <TeamMembers
            imgSrc="/babatundeayoola.png"
            name="Mr. Babatunde Ayoola"
            position="Child Psychologist, Educationist"
          />
          <TeamMembers
            imgSrc="/aayushbasnet.png"
            name="Er. Aayush Basnet"
            position="Program Director"
          />
          <TeamMembers
            imgSrc="/dikshyakharel.png"
            name="Mrs. Dikshya Kharel"
            position="Finance Officer"
          />
          <TeamMembers
            imgSrc="/anmolpant.png"
            name="Mr. Anmol Pant"
            position="Project Coordinator"
          />
          <TeamMembers
            imgSrc="/ishanacharya.png"
            name="Mr. Ishan Acharya"
            position="Event Manger, Podcast Host"
          />
          <TeamMembers
            imgSrc="/anujadhikari.png"
            name="Mr. Anuj Adhikari"
            position="Reserch Coordinator Intern"
          />
          <TeamMembers
            imgSrc="/aayushnepal.png"
            name="Mr. Aayush Nepal"
            position="Astrophysics Research Intern"
          />
          <TeamMembers
            imgSrc="/namratabartaula.png"
            name="Ms. Namrata Bartaula"
            position="Stone Art & Crafting Intern"
          />
          <TeamMembers
            imgSrc="/rabinpariyar.png"
            name="Mr. Rabin Pariyar"
            position="Graphics Designer"
          />
          <TeamMembers
            imgSrc="/rajuraut.png"
            name="Mr. Raju Raut"
            position="Student Coordinator"
          />
          <TeamMembers
            imgSrc="/maheshmoktan.png"
            name="Mr. Mahesh Moktan"
            position="Web Developer Intern"
          />
        </div>
      </div>
      <div className="h-auto lg:py-12 lg:px-12 bg-[#0052A0DE] mt-4 overflow-hidden relative flex justify-between items-center">
        <div className="flex flex-col justify-center items-center w-[75%] space-y-4">
          <h3 className="font-montserrat font-bold text-[2.5rem] text-white">
            Meet Our International Ambassador
          </h3>
          <p className="font-montserrat font-medium text-xl text-white">
            Mr.Tunde is a qualified and dynamic teacher with Master&apos;s
            Degree in Education Science, M.Ed (Sci.), Bachelor&apos;s Degree in
            Education Chemistry, B.sc(Ed) Chemistry from the Lagos State
            University and a member of the Teachers Registration Council of
            Nigeria. He has been trained by Florence Academy UK and Reeds, UK
            with over twenty certification courses and over thirteen
            certifications with TES(myeducare) he has two (2) years
            international teaching experience in China on work permit, work visa
            and residence permit. he had taught in Zhouyue experimental school
            attached to Beijing Normal University, Dayawan District, Huizhou
            city, Guangdong Province and Uncle Sam kids English School, Jiange
            county, Guangyuan city, Sichuan province, China. he has taught in
            several other schools with over fourteen years teaching experience
            as ESL, Science, Chemistry, Maths and music teacher which include
            Greensprings School, Newhall international school, delightsomeland
            School, Victoria Island , Ronik international School amongst others.
            he is a Global Professional member of TESOL with TESOL Leadership
            development certification, 120 hours American TESOL Advanced
            certificate, TEFL certification, IGCSE certifications, Diploma in
            Music. he appointed as a international ambassador for Nigeria in
            year of 2023.
          </p>
          <p className="font-montserrat font-bold text-xl text-justify self-end text-[#F28459]">
            - Mr. Babatunde Ayoola
          </p>
          <p className="font-montserrat font-semibold text-xs self-end text-white">
            (International Ambassador,Nigeria)
          </p>
          <div className="self-end flex justify-center items-center space-x-4">
            <a href="#">
              <img
                src="/assets/gmail.svg"
                alt="Gmail Icon"
                className="w-8 h-8"
              />
            </a>
            <a href="#">
              <img
                src="/assets/linkedin.svg"
                alt="Linkedin Icon"
                className="w-8 h-8"
              />
            </a>
            <a href="#">
              <img
                src="/assets/facebook.svg"
                alt="Facebook Icon"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
        <div className="h-full">
          <div className="absolute top-[8%] right-[6%] bg-white w-80 h-80 rounded-full"></div>
          <div className="absolute top-[10%] -right-8 h-full">
            <img
              src="/babatundeayoola.png"
              alt="Babatunde Ayoola Image"
              className="h-full"
            />
          </div>
        </div>
        <div className="w-28 h-28 rounded-full bg-[#FFEAEA5E] absolute top-8 -left-16"></div>
        <div className="w-16 h-16 rounded-full bg-[#FFEAEA14] absolute bottom-[12%] -left-4"></div>
        <div className="w-16 h-16 rounded-full bg-[#FFEAEA14] absolute bottom-0 left-6"></div>
      </div>
      <div className="h-auto overflow-hidden flex justify-evenly space-x-20 lg:py-12 lg:px-12">
        <div className="self-start">
          <svg
            width="108"
            height="97"
            viewBox="0 0 108 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M97 97C99.8511 97 102.585 95.8674 104.601 93.8514C106.617 91.8354 107.75 89.1011 107.75 86.25V59.9985C107.75 57.1474 106.617 54.4131 104.601 52.3971C102.585 50.3811 99.8511 49.2485 97 49.2485H82.079C82.079 45.4717 82.3012 41.6948 82.7455 37.918C83.412 33.919 84.5228 30.3643 86.078 27.254C87.6332 24.1437 89.6363 21.6962 92.0873 19.9118C94.5239 17.9123 97.6343 16.9125 101.418 16.9125V0.25C95.1976 0.25 89.7509 1.583 85.0783 4.249C80.4379 6.8814 76.4511 10.5265 73.4145 14.913C70.3573 19.7414 68.1062 25.035 66.7495 30.5865C65.3776 36.7112 64.7068 42.9721 64.75 49.2485V86.25C64.75 89.1011 65.8826 91.8354 67.8986 93.8514C69.9146 95.8674 72.6489 97 75.5 97H97ZM32.5 97C35.3511 97 38.0854 95.8674 40.1014 93.8514C42.1174 91.8354 43.25 89.1011 43.25 86.25V59.9985C43.25 57.1474 42.1174 54.4131 40.1014 52.3971C38.0854 50.3811 35.3511 49.2485 32.5 49.2485H17.579C17.579 45.4717 17.8012 41.6948 18.2455 37.918C18.9192 33.919 20.03 30.3643 21.578 27.254C23.1332 24.1437 25.1363 21.6962 27.5873 19.9118C30.0239 17.9123 33.1343 16.9125 36.9183 16.9125V0.25C30.6976 0.25 25.2509 1.583 20.5783 4.249C15.9379 6.8814 11.9511 10.5265 8.91451 14.913C5.85732 19.7414 3.60624 25.035 2.24951 30.5865C0.87763 36.7112 0.206818 42.9721 0.250007 49.2485V86.25C0.250007 89.1011 1.38259 91.8354 3.39861 93.8514C5.41462 95.8674 8.14893 97 11 97H32.5Z"
              fill="#1F67AB"
              fill-opacity="0.19"
            />
          </svg>
        </div>
        <div className="flex flex-col self-start justify-between items-center space-y-4">
          <h4 className="font-montserrat font-semibold text-3xl text-[#0052A0]">
            Testimonials
          </h4>
          <div className="flex justify-center items-center space-x-12">
            <TestimonialsDiv
              imgSrc="/aayushnepal2.png"
              name="Aayush Nepal"
              position="Astrophysics & Research Enthusiast"
              desc="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
              Don't be capped, learn to adapt.”"
            />
            <TestimonialsDiv
              imgSrc="/anujadhikari.png"
              name="Anuj Adhikari"
              position="Research Enthusiast"
              desc="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
            />
            <TestimonialsDiv
              imgSrc="/riteshprajapati.png"
              name="Ritesh Prajapati"
              position="Video Editor Intern"
              desc="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
            />
          </div>
        </div>
        <div className="self-end">
          <svg
            width="108"
            height="97"
            viewBox="0 0 108 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0C8.14892 0 5.41461 1.13259 3.3986 3.14861C1.38258 5.16462 0.249992 7.89893 0.249992 10.75V37.0015C0.249992 39.8526 1.38258 42.5869 3.3986 44.6029C5.41461 46.6189 8.14892 47.7515 11 47.7515H25.921C25.921 51.5283 25.6988 55.3052 25.2545 59.082C24.588 63.081 23.4772 66.6357 21.922 69.746C20.3668 72.8563 18.3637 75.3038 15.9127 77.0882C13.4761 79.0877 10.3657 80.0875 6.58174 80.0875V96.75C12.8024 96.75 18.2491 95.417 22.9217 92.751C27.5621 90.1186 31.5489 86.4735 34.5855 82.087C37.6427 77.2586 39.8938 71.965 41.2505 66.4135C42.6224 60.2888 43.2932 54.0279 43.25 47.7515V10.75C43.25 7.89893 42.1174 5.16462 40.1014 3.14861C38.0854 1.13259 35.3511 0 32.5 0L11 0ZM75.5 0C72.6489 0 69.9146 1.13259 67.8986 3.14861C65.8826 5.16462 64.75 7.89893 64.75 10.75L64.75 37.0015C64.75 39.8526 65.8826 42.5869 67.8986 44.6029C69.9146 46.6189 72.6489 47.7515 75.5 47.7515H90.421C90.421 51.5283 90.1988 55.3052 89.7545 59.082C89.0808 63.081 87.97 66.6357 86.422 69.746C84.8668 72.8563 82.8637 75.3038 80.4127 77.0882C77.9761 79.0877 74.8657 80.0875 71.0817 80.0875V96.75C77.3024 96.75 82.7491 95.417 87.4217 92.751C92.0621 90.1186 96.0489 86.4735 99.0855 82.087C102.143 77.2586 104.394 71.965 105.75 66.4135C107.122 60.2888 107.793 54.0279 107.75 47.7515V10.75C107.75 7.89893 106.617 5.16462 104.601 3.14861C102.585 1.13259 99.8511 0 97 0L75.5 0Z"
              fill="#1F67AB"
              fill-opacity="0.19"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default page;
