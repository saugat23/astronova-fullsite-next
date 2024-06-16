"use client";
import React from "react";
import Image from "next/image";
import ProjectBG from "../../../../../public/projects/CreativeCafe.webp";
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
          Creative Cafe
        </h1>
        <p className="font-inter text-xs font-medium text-[#093494] md:text-sm xl:text-base">
          Creative Cafe is a vibrant hub where creativity takes center stage and
          sparks fly. &nbsp;We will bring in a diverse range of voices, from
          seasoned artists and innovative entrepreneurs to quirky scientists and
          everyday heroes. Each episode will be like a treasure trove of
          inspiration, filled with captivating stories, unexpected insights, and
          thought-provoking conversations.
          <br />
          <br />
          But here&apos;s where it gets really exciting – Creative Cafe
          isn&apos;t just about listening; it&apos;s about engaging and
          participating. We&apos;re all about breaking down barriers and
          inviting everyone to the table. That means hosting interactive
          sessions where students, parents, educators, and creative minds from
          all walks of life can join the conversation, ask burning questions,
          and share their own unique perspectives. Imagine a virtual gathering
          where ideas collide, connections are made, and creativity knows no
          bounds.
          <br />
          <br />
          There&apos;s more! We&apos;re not content with just scratching the
          surface – we&apos;re all about diving deep and exploring the uncharted
          waters of creativity. That&apos;s why we&apos;re constantly dreaming
          up new ways to elevate your experience at Creative Cafe. Think live
          events that bring the podcast to life, immersive workshops where
          people can roll up their sleeves and get hands-on and exclusive
          content that takes them behind the scenes and beyond the mic.
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
            fill
            className="relative h-full w-full object-cover object-center"
            src={ProjectDonation}
            alt="Project Donation"
          />
        </div>
      </div>
    </section>
  );
}
