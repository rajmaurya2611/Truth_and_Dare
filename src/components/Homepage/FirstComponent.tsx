import React, { useState } from "react";
import landingImage from "../../assets/Group 30.png"; // Replace with your actual image path
import defaultBadge from "../../assets/google-play-black.svg";
import hoverBadge from "../../assets/google-play-white.svg";

const playstoreLink =
  "https://play.google.com/store/apps/details?id=com.bestofluck.engineersataktu";

const FirstComponent: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-[#ECF7FB] font-montserrat pt-16 pb-12 sm:pt-32 sm:pb-16">
      <div className="relative flex flex-col-reverse md:flex-row items-center md:justify-between max-w-screen-xl mx-auto px-4 sm:px-6 md:px-16 lg:px-0">
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-normal text-[#006AFF] leading-snug">
            Your One-Stop Solution for
            <br />
            <span className="font-semibold">All AKTU Resources</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#ACB25C]">
            Your Ultimate Engineering Companion!
          </h2>

          <div className="mt-4 sm:mt-6">
            <a
              href={playstoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-block"
            >
              <img
                src={isHovered ? hoverBadge : defaultBadge}
                alt="Get it on Google Play"
                loading="lazy"
                className="w-24 sm:w-28 md:w-36 lg:w-40 transition-transform duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-3/4 mb-8  md:mb-0 flex justify-center">
          <img
            src={landingImage}
            alt="Landing Illustration"
            loading="lazy"
            className="w-3/4 sm:w-full md:w-full max-w-lg md:max-w-2xl transform transition-transform duration-200 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;
