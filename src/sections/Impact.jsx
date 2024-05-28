"use client";
import React from "react";
import Image from "next/image";

import { FiCheckCircle, FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";

const Impact = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="h-auto max-w-screen overflow-hidden relative mx-auto 2xl:py-10 xl:py-8 lg:py-6 py-4 px-4 w-full max-w-6xl md:mt-4"
    >
      <div className="flex flex-col justify-center items-center lg:space-y-6 xl:py-4">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight relative after:bg-[#0B77A5] after:absolute after:h-[4px] after:w-0 after:-bottom-[2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 z-50">
          OUR IMPACT
        </h3>
        <div className="flex md:flex-row flex-col justify-center items-center lg:space-x-6 space-x-0 md:space-x-4 space-y-4 md:space-y-0 py-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="lg:py-16 lg:px-8 py-4 px-4 flex flex-col justify-center items-center space-y-4 bg-[#BDB809] cursor-pointer shadow-md hover:scale-105 hover:duration-400"
          >
            <div>
              <svg
                className="w-[30px] md:w-[36px] lg:[42px] xl:w-[50px]"
                viewBox="0 0 58 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.6698 9.61394L30.1953 1.1374C29.5427 0.917579 28.8363 0.917579 28.1838 1.1374L2.70924 9.61394C2.10143 9.81492 1.56834 10.1941 1.1797 10.7021C0.791056 11.2101 0.565094 11.8233 0.530771 12.4615C0.52791 12.5171 0.52791 12.5728 0.530771 12.6284V33.8198C0.530771 34.6629 0.866135 35.4713 1.46358 36.0673C2.06067 36.6637 2.87049 36.9985 3.71499 36.9985C4.55949 36.9985 5.36968 36.6637 5.96677 36.0673C6.56385 35.4713 6.89922 34.6629 6.89922 33.8198V17.0389L13.1912 19.1315C11.2383 22.8625 10.658 27.1589 11.5511 31.2729C12.4443 35.3867 14.7543 39.0578 18.079 41.6472C13.7282 43.789 10.0463 47.0764 7.43016 51.1545C7.19454 51.5039 7.03079 51.8965 6.94855 52.3098C6.86668 52.7231 6.8674 53.1485 6.95142 53.5611C7.03544 53.974 7.20063 54.3663 7.43767 54.7146C7.67472 55.063 7.97898 55.361 8.33258 55.5912C8.68583 55.8214 9.08162 55.9791 9.49672 56.0552C9.91182 56.1312 10.338 56.1244 10.7502 56.0345C11.1625 55.9449 11.5529 55.7743 11.8987 55.5326C12.2444 55.291 12.5383 54.983 12.7639 54.6272C16.5506 48.8099 22.5558 45.475 29.1895 45.475C35.8236 45.475 41.8288 48.8099 45.6287 54.6272C45.854 54.983 46.1482 55.291 46.4939 55.5326C46.8397 55.7743 47.2298 55.9449 47.6424 56.0345C48.0546 56.1244 48.4808 56.1312 48.8955 56.0552C49.3106 55.9791 49.7064 55.8214 50.06 55.5912C50.4133 55.361 50.7175 55.063 50.9546 54.7146C51.1916 54.3663 51.3572 53.974 51.4412 53.5611C51.5249 53.1485 51.5259 52.7231 51.4437 52.3098C51.3615 51.8965 51.1981 51.5039 50.9624 51.1545C48.3438 47.0714 44.6569 43.7811 40.3003 41.6393C43.6251 39.05 45.9348 35.3788 46.8279 31.2649C47.721 27.1509 47.1407 22.8546 45.1882 19.1236L55.6698 15.6349C56.303 15.4235 56.8536 15.0186 57.2437 14.4777C57.6341 13.9367 57.844 13.287 57.844 12.6205C57.844 11.9539 57.6341 11.3042 57.2437 10.7633C56.8536 10.2223 56.303 9.81749 55.6698 9.60598V9.61394ZM29.1895 7.49481L44.5936 12.6284L29.1895 17.7541L13.7986 12.6284L29.1895 7.49481ZM40.8652 27.4624C40.8656 29.2727 40.4437 31.0583 39.6324 32.6774C38.8212 34.2967 37.6435 35.705 36.1922 36.7907C34.7413 37.8765 33.0566 38.6099 31.2722 38.9329C29.4877 39.2559 27.6525 39.1592 25.9116 38.6509C24.1711 38.1427 22.5729 37.2369 21.2443 36.0048C19.9154 34.7728 18.8921 33.2488 18.256 31.5535C17.6196 29.8583 17.3879 28.0384 17.5785 26.2381C17.7694 24.4378 18.3776 22.7066 19.3554 21.1818L28.1838 24.1194C28.8363 24.3385 29.5427 24.3385 30.1953 24.1194L39.0239 21.1818C40.2281 23.0559 40.8674 25.2359 40.8652 27.4624Z"
                  fill="white"
                />
              </svg>
            </div>
            <h4 className="font-inter font-bold 2xl:text-3xl lg:text-2xl md:text-lg text-base text-white">
              100K +
            </h4>
            <h3 className="font-inter font-bold tracking-tight 2xl:text-2xl lg:text-xl md:text-base text-sm text-white">
              STUDENT REACHED
            </h3>
            <p className="font-inter font-normal 2xl:text-base lg:text-sm md:text-xs text-[10px] text-white text-center">
              Through various workshops, seminars, STEAM camps, trainings &
              programs.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="lg:py-16 lg:px-8 py-4 px-4 flex flex-col justify-center items-center space-y-4 bg-[#AE0D19] cursor-pointer shadow-md hover:scale-105 hover:duration-400"
          >
            <div>
              <svg
                className="w-[30px] md:w-[36px] lg:[42px] xl:w-[50px]"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.9993 0.734863C41.5587 0.734863 53.3606 12.5662 53.3606 27.1617C53.3606 41.7572 41.5587 53.5885 26.9993 53.5885C20.8531 53.5974 14.8985 51.4447 10.1728 47.505L9.5293 46.9528L11.9044 41.9262C15.3 45.4149 19.7932 47.6202 24.6242 48.1694C29.4552 48.7182 34.3272 47.577 38.415 44.9385C42.5032 42.3001 45.5564 38.3271 47.0577 33.6912C48.5594 29.0555 48.4169 24.042 46.6547 19.4995C44.8925 14.9569 41.6186 11.1643 37.3875 8.7635C33.1564 6.36271 28.2275 5.50126 23.4355 6.32492C18.6436 7.14857 14.2826 9.60678 11.0909 13.2835C7.89924 16.9601 6.07266 21.6294 5.92045 26.501L5.91003 27.1617H12.5003L5.36706 42.2672C2.28072 37.8384 0.629431 32.5643 0.637619 27.1617C0.637619 12.5662 12.4396 0.734863 26.9993 0.734863ZM29.6353 11.3056V16.591H36.2256V21.8763H21.7269C21.3975 21.8757 21.0797 21.9987 20.8363 22.2212C20.5929 22.4437 20.4415 22.7494 20.4117 23.0783C20.3819 23.4071 20.4761 23.7352 20.6756 23.9979C20.875 24.2607 21.1657 24.439 21.4895 24.4979L21.7269 24.519H32.2714C34.0194 24.519 35.6956 25.2151 36.9316 26.4541C38.1675 27.6931 38.862 29.3735 38.862 31.1257C38.862 32.8779 38.1675 34.5584 36.9316 35.7974C35.6956 37.0364 34.0194 37.7324 32.2714 37.7324H29.6353V43.0179H24.3629V37.7324H17.7727V32.4471H32.2714C32.6007 32.4476 32.9186 32.3246 33.1619 32.1022C33.4053 31.8797 33.5568 31.574 33.5866 31.2451C33.6164 30.9163 33.5222 30.5882 33.3227 30.3254C33.1232 30.0627 32.833 29.8843 32.5088 29.8255L32.2714 29.8044H21.7269C19.9789 29.8044 18.3027 29.1083 17.0667 27.8693C15.8308 26.6303 15.1367 24.9499 15.1367 23.1977C15.1367 21.4455 15.8308 19.765 17.0667 18.526C18.3027 17.287 19.9789 16.591 21.7269 16.591H24.3629V11.3056H29.6353Z"
                  fill="white"
                />
              </svg>
            </div>
            <h4 className="font-inter font-bold 2xl:text-3xl lg:text-2xl md:text-lg text-base text-white">
              5M +
            </h4>
            <h3 className="font-inter font-bold tracking-tight 2xl:text-2xl lg:text-xl md:text-base text-sm text-white">
              FUND INVESTED
            </h3>
            <p className="font-inter font-normal 2xl:text-base lg:text-sm md:text-xs text-[10px] text-center text-white">
              To build IT Lab, Podcast Hall, Resource Allocation, Student
              Grants, Human Resource.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="lg:py-16 lg:px-6 py-4 px-2 flex flex-col justify-center items-center space-y-4 z-40 bg-[#2496D7] cursor-pointer shadow-md hover:scale-105 hover:duration-400"
          >
            <div>
              <Image
                priority
                quality={80}
                src="/assets/workshop.svg"
                alt="Workshop SVG"
                width={42}
                height={38}
                className="w-[40px] md:w-[46px] lg:[52px] xl:w-[58px] object-center object-cover"
              />
            </div>
            <h4 className="font-inter font-bold 2xl:text-3xl lg:text-2xl md:text-lg text-base text-white">
              100 +
            </h4>
            <h3 className="font-inter font-bold tracking-tight 2xl:text-2xl lg:text-xl md:text-base text-sm text-white">
              FREE WORKSHOPS
            </h3>
            <p className="font-inter font-normal 2xl:text-base lg:text-sm md:text-xs text-[10px] text-center text-white w-full">
              conducted in various schools and colleges related in more than 20
              subjects.
            </p>
          </div>
        </div>
      </div>
      <div className="xl:mt-16 lg:mt-12 w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-content-center place-items-center">
          <div className="flex flex-col justify-center items-center px-3 xl:space-y-6 lg:space-y-4 space-y-3 p-4 w-3/4 sm:w-1/2 md:w-auto">
            <div className="flex justify-center items-center">
              <Image
                priority
                quality={80}
                src="/careers.svg"
                alt="Careers Logo"
                className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 object-center object-cover"
                width={100}
                height={100}
              />
            </div>
            <h3 className="font-inter font-extrabold 2xl:text-3xl lg:text-2xl md:text-lg text-base text-black">
              Careers
            </h3>
            <p className="font-inter font-extralight 2xl:text-base lg:text-sm md:text-xs text-[10px] text-black text-center">
              We’re always looking for talented, driven individuals to join our
              mission. Come help us build a better future for students
            </p>
            <button className="font-inter font-bold 2xl:text-lg lg:text-base md:text-sm text-xs text-[#DA441F] text-center flex items-center">
              Apply Today <FiCheckCircle className="ml-2" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center px-3 xl:space-y-6 lg:space-y-4 space-y-3 p-4 w-3/4 sm:w-1/2 md:w-auto">
            <div className="flex justify-center items-center">
              <Image
                priority
                quality={80}
                src="/funding.svg"
                alt="Funding Logo"
                className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 object-center object-cover"
                width={30}
                height={30}
              />
            </div>
            <h3 className="font-inter font-extrabold 2xl:text-3xl lg:text-2xl md:text-lg text-base text-black">
              Funding
            </h3>
            <p className="font-inter font-extralight 2xl:text-base lg:text-sm md:text-xs text-[10px] text-black text-center">
              We provide Seed money and Venture money to the innovative business
              idea. Come and join us and work on your idea.
            </p>
            <button className="font-inter font-bold 2xl:text-lg lg:text-base md:text-sm text-xs text-[#DA441F] flex items-center">
              Register your Idea
              <IoPersonAddOutline className="ml-2" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center xl:space-y-6 lg:space-y-4 space-y-3 p-4 w-3/4 sm:w-1/2 md:w-auto">
            <div className="flex justify-center items-center">
              <Image
                priority
                quality={80}
                src="/project.svg"
                alt="Project Logo"
                className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 object-center object-cover"
                width={30}
                height={30}
              />
            </div>
            <h3 className="font-inter font-extrabold 2xl:text-3xl lg:text-2xl md:text-lg text-base text-black">
              Project
            </h3>
            <p className="font-inter font-extralight 2xl:text-base lg:text-sm md:text-xs text-[10px] text-black text-center">
              let’s see what we have done in past to promote science and
              innovation among the students. Check out our Project.
            </p>
            <button className="font-inter font-bold 2xl:text-lg lg:text-base md:text-sm text-xs text-[#DA441F] flex items-center">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>
          {/* <div className="w-8 h-[1px] bg-black"></div> */}
          <div className="flex flex-col justify-center items-center xl:space-y-6 lg:space-y-4 space-y-3 p-4 w-3/4 sm:w-1/2 md:w-auto">
            <div className="flex justify-center items-center">
              <Image
                priority
                quality={80}
                src="/resource.svg"
                alt="Resource Logo"
                className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 object-center object-cover"
                width={30}
                height={30}
              />
            </div>
            <h3 className="font-inter font-extrabold 2xl:text-3xl lg:text-2xl md:text-lg text-base text-black">
              Resource
            </h3>
            <p className="font-inter font-extralight 2xl:text-base lg:text-sm md:text-xs text-[10px] text-black text-center">
              We are preparing the useful resources to make you clear about our
              mission and our goals. Click to see the Resources.
            </p>
            <button className="mx-auto font-inter font-bold lg:text-base md:text-sm text-xs text-[#DA441F] flex items-center">
              Download Brochure <FiDownload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
