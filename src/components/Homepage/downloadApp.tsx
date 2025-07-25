import React, { useState } from 'react';
import { Row, Col } from 'antd';
import LeftImage from '../../assets/Group.png';
import RightTopImage from '../../assets/image 4 qr.png';
import defaultBadge from "../../assets/google-play-black.svg";
import hoverBadge from "../../assets/google-play-white.svg";

const playstoreLink =
  "https://play.google.com/store/apps/details?id=com.rcubedigitalstudio.truthanddare";

const DownlaodApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-32 pt-5 pb-12">
      {/* Headings */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-montserrat font-medium mb-4">
        <span className="font-semibold text-[#EBA76A]">Download App</span>
      </h2>
      <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-montserrat font-medium mb-12">
        <span className="font-semibold text-[#435268]">
          Get the Ultimate AKTU Companion App
        </span>
      </h3>

      {/* Two-column grid: full-width on xs, side-by-side on sm+ */}
      <Row gutter={[16, 24]}>
        {/* Left image */}
        <Col xs={24} sm={12}>
          <img
            src={LeftImage}
            alt="App preview"
            className="w-full h-auto transform transition-transform duration-200 hover:scale-110"
          />
        </Col>

        {/* Right column */}
        <Col
          xs={24}
          sm={12}
          className="flex flex-col justify-center items-center"
        >
          {/* Top image */}
          <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full  flex flex-col justify-center items-center ">
            <img
              src={RightTopImage}
              alt="QR code"
              className="w-40 h-auto"
            />
          </div>

          {/* “or” divider */}
          <div className="text-[#435268] font-semibold py-2">or</div>

          {/* Play Store badge */}
          <a
            href={playstoreLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block mt-2"
          >
            <img
              src={isHovered ? hoverBadge : defaultBadge}
              alt="Get it on Google Play"
              loading="lazy"
              className="w-24 sm:w-32 md:w-36 lg:w-40 transition-transform duration-300 ease-in-out"
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default DownlaodApp;
