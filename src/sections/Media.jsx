import React from "react";
import Publications from "../components/UI/Publications";

const Media = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="700" className="h-auto max-w-screen overflow-hidden xl:py-12 xl:px-12 lg:py-8 lg:px-8">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h3 className="font-montserrat font-semibold text-[#AE0D19] xl:text-[3.5rem] lg:text-5xl">
          Media Publication
        </h3>
        <div className="flex justify-center items-center lg:space-x-3 xl:space-x-4">
          <Publications
            imgSrc="/kathmandupost.png"
            logoSrc="/kathmandupostlogo.png"
            title="lorem ipsum dolor sit amet, consectetur adipiscing"
            article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
          />
          <Publications
            imgSrc="/kathmandupost.png"
            logoSrc="/nepallogo.png"
            title="lorem ipsum dolor sit amet, consectetur adipiscing"
            article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
          />
          <Publications
            imgSrc="/kathmandupost.png"
            logoSrc="/nayapatrikalogo.png"
            title="lorem ipsum dolor sit amet, consectetur adipiscing"
            article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
          />
        </div>
      </div>
    </section>
  );
};

export default Media;
