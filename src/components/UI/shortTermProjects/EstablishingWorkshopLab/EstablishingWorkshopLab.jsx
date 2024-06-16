"use client";
import React from "react";
import Image from "next/image";
import ProjectBG from "../../../../../public/projects/EstablishingWorkshopLaboratory1.webp";
import ProjectDonation from "../../../../../public/projects/makedonation.jpeg";

export default function Page() {
  return (
    <section className="max-w-screen h-auto overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-16 bg-cover lg:h-[70vh]"
      >
        <div className="hero-container-team relative h-full w-full">
          <Image
            priority
            layout="fill"
            className="h-full w-full object-cover object-center"
            src={ProjectBG}
            alt="Short Term Project BG"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-4 px-4 py-6 xl:py-8">
        <h1 className="font-inter text-base font-semibold text-[#bdb809] md:text-lg xl:text-xl">
          Establishing Workshop Laboratory
        </h1>
        <p className="font-inter text-xs font-medium text-[#093494] md:text-sm xl:text-base">
          Our workshops will be filled with all sorts of tools and equipment,
          like 3D printers, electronics kits, woodworking tools, and more.
          Whether you&apos;re into building robots, designing circuits, or
          crafting prototypes, there&apos;ll be something for everyone.
          It&apos;s a place where you can let your imagination run wild and
          bring your ideas to life. <br />
          <br />
          And then there are our labs – these will be like science playgrounds,
          where researchers can conduct experiments, analyze data, and make
          groundbreaking discoveries. Whether it&paos;s studying new materials,
          developing cutting-edge technologies, or unraveling the mysteries of
          the universe, our labs will be at the forefront of scientific
          exploration. <br />
          <br />
          By setting up these workshops and labs, we&apos;re creating spaces
          where creativity and innovation can thrive. We want to empower people
          to dream big, think outside the box, and push the boundaries of
          what&apos;s possible. So, whether you&apos;re an engineer, a
          scientist, an artist, or just someone with a curious mind,
          there&apos;ll be a place for you to explore, learn, and create amazing
          things. Come join us on this exciting journey – the future is waiting
          to be built! <br />
          <br />
          As we dive into the world of innovation, we&apos;re not just talking
          about workshops and labs – we&apos;re making spaces where creativity
          thrives and discoveries happen. Our goal is simple: to give engineers,
          scientists, and anyone with big ideas the tools and chances they need
          to make those ideas real. So, let&apos;s take this journey together,
          fueled by excitement, guided by curiosity, and united by the belief
          that amazing things can happen when we dream and act. This isn&apos;t
          just a project – it&apos;s a movement. Are you ready to be part of it?
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-4 bg-cover lg:h-[70vh]"
      >
        <div className="hero-container-team relative h-full w-full">
          <Image
            priority
            layout="fill"
            className="h-full w-full object-cover object-center"
            src={ProjectDonation}
            alt="Project Donation"
          />
        </div>
      </div>
    </section>
  );
}
