import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="h-auto max-w-screen overflow-hidden bg-[#190E08ED]"
    >
      <div className="xl:my-10 lg:my-8 w-full h-[2px] bg-[#AE0D19]"></div>
      <div className="lg:px-8 w-full flex justify-between items-start">
        <div className="w-[40%] flex flex-col justify-between h-full lg:space-y-16">
          <div className="flex justify-between items-center">
            <div className="w-[60%] self-start border-r-3 border-[#BDB809] flex flex-col justify-center items-center xl:space-y-6 lg:space-y-4 lg:px-4">
              <div>
                <img src="/globe.png" alt="Globe Image" className="" />
              </div>
              <h3 className="font-poppins font-bold xl:text-4xl lg:text-3xl text-[#1D92C9]">
                Donate for Astronova Globe
              </h3>
              <p className="font-opensans font-normal lg:text-xs text-[#9E9E9E]">
                Make your dreams come true with astronova foundation, Make your
                dreams come true with astronova foundation,Make your dreams come
                true with astronova foundation
              </p>
            </div>
            <div className="flex flex-col justify-center items-center xl:space-y-4 lg:space-y-2 lg:px-4">
              <h4 className="font-roboto font-bold lg:text-xl text-[#77AB33]">
                ABOUT US
              </h4>
              <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
                <li>
                  <Link href="#">Who We Are</Link>
                </li>
                <li>
                  <Link href="#">Where We Work</Link>
                </li>
                <li>
                  <Link href="#">Our Board of Trustee</Link>
                </li>
                <li>
                  <Link href="#">Board Of Director</Link>
                </li>
                <li>
                  <Link href="#">Meet Our Founder</Link>
                </li>
                <li>
                  <Link href="#">Our Team</Link>
                </li>
                <li>
                  <Link href="#">International Ambassador</Link>
                </li>
              </ul>
              <h4 className="font-roboto font-bold lg:text-xl text-[#AE0D19]">
                OUR SUBSIDIARIES
              </h4>
              <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
                <li>
                  <Link href="#">Astro E-commerce</Link>
                </li>
                <li>
                  <Link href="#">E-Learning</Link>
                </li>
              </ul>
              <h4 className="font-roboto font-bold lg:text-xl text-white">
                SUPPORT STUDENTS
              </h4>
              <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
                <li>
                  <Link href="#">Planetarium</Link>
                </li>
                <li>
                  <Link href="#">Research and Development</Link>
                </li>
                <li>
                  <Link href="#">Startups and Entrepreneurship</Link>
                </li>
                <li>
                  <Link href="#">Ventures and Seed Money</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:py-6 border-t-2 border-[#FFFFFF80] flex justify-center items-center space-x-3">
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-opensans font-light lg:text-sm text-white text-center">
                &copy; Astronova Foundation Nepal
              </h4>
              <h4 className="font-opensans font-light lg:text-sm text-white text-center">
                44100,Lattinath Marg,Bagmati Province,Hetauda,Makawanpur,Nepal
              </h4>
              <h4 className="font-opensans font-light lg:text-sm text-white text-center">
                Astronova Foundation Nepal is a Nonprofit organization.
              </h4>
              <h4 className="font-opensans font-light lg:text-sm text-white text-center">
                Rights & Permissions | Privacy Policy
              </h4>
            </div>
            <div className="flex justify-center items-center space-x-4 text-white fill-white">
              <div>
                <img
                  src="/assets/facebook.svg"
                  alt="Facebook SVG"
                  className="p-2 border-2 border-[#DB8114] rounded-full text-white fill-white lg:h-14 lg:w-14 w-8 h-8"
                />
              </div>
              <div>
                <img
                  src="/assets/web.svg"
                  alt="Web SVG"
                  className="p-2 border-2 border-[#2496D7] rounded-full lg:h-14 lg:w-14 w-8 h-8"
                />
              </div>
              <div>
                <img
                  src="/assets/instagram.svg"
                  alt="Instagram SVG"
                  className="p-2 border-2 border-[#77AB33] rounded-full lg:h-14 lg:w-14 w-8 h-8"
                />
              </div>
              <div>
                <img
                  src="/assets/linkedin.svg"
                  alt="Linkedin SVG"
                  className="p-2 border-2 border-[#77AB33] rounded-full lg:h-14 lg:w-14 w-8 h-8"
                />
              </div>
              <div>
                <img
                  src="/assets/gmail.svg"
                  alt="Gmail SVG"
                  className="p-2 border-2 border-[#AF1B1C] rounded-full lg:h-14 lg:w-14 w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center xl:space-y-4 lg:space-y-2 lg:px-4">
          <h4 className="font-roboto font-bold lg:text-xl text-[#BDB809]">
            COMPETITIONS
          </h4>
          <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
            <li>
              <Link href="#">National Science and Expo</Link>
            </li>
            <li>
              <Link href="#">Best Teacher Award</Link>
            </li>
          </ul>
          <h4 className="font-roboto font-bold lg:text-xl text-[#DB8114]">
            OUTREACH
          </h4>
          <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
            <li>
              <Link href="#">Science and Technology</Link>
            </li>
            <li>
              <Link href="#">Research and Development</Link>
            </li>
            <li>
              <Link href="#">Startups and Entrepreneurship</Link>
            </li>
            <li>
              <Link href="#">Ventures and Seed Money</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between h-full lg:space-y-">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center xl:space-y-4 lg:space-y-2 lg:px-4">
              <h4 className="font-roboto font-bold lg:text-xl text-[#2496D7]">
                GET INVOLVED
              </h4>
              <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
                <li>
                  <Link href="#">Become Volunteer</Link>
                </li>
                <li>
                  <Link href="#">Become Trainee Trainer</Link>
                </li>
                <li>
                  <Link href="#">Become Our School Partner</Link>
                </li>
                <li>
                  <Link href="#">Collaborate With Us</Link>
                </li>
                <li>
                  <Link href="#">Fundraise</Link>
                </li>
              </ul>
              <h4 className="font-roboto font-bold lg:text-xl text-[#2496D7]">
                OPPORTUNITIES
              </h4>
              <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
                <li>
                  <Link href="#">Public Speaking</Link>
                </li>
                <li>
                  <Link href="#">Emotional Intelligence</Link>
                </li>
                <li>
                  <Link href="#">Problem Solving</Link>
                </li>
              </ul>
            </div>
            <div className="self-start flex flex-col justify-center items-center xl:space-y-4 lg:space-y-2 lg:px-4">
              <h4 className="font-roboto font-bold lg:text-xl text-[#DB8114]">
                USEFUL LINKS
              </h4>
              <ul className="flex flex-col justify-center items-center lg:space-y-4 font-kumbhsans font-normal lg:text-lg text-[#C9BDB6]">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">News and Events</Link>
                </li>
                <li>
                  <Link href="#">Our Projects</Link>
                </li>
                <li>
                  <Link href="#">Podcast</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:py-6 flex justify-center items-center lg:mt-40">
            <img src="support.png" alt="Support Image" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center xl:space-y-4 lg:space-y-2 lg:px-4">
          <h4 className="font-roboto font-bold lg:text-xl text-white">
            GALLERY
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
