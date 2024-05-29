"use client";

import React from "react";
import Image from "next/image";

function Page({ data }) {
  const blog = data;

  return (
    <>
      <section className="h-auto max-w-screen overflow-hidden">
        <div className="w-full lg:h-auto h-[50vh] m-0">
          <Image
            priority
            quality={80}
            src={blog.featured_img}
            alt="Blogs Featured Image"
            width={2000}
            height={1200}
            className="h-full w-full bg-cover object-center object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Page;
