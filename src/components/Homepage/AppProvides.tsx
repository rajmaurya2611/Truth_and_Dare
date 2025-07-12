import React from 'react';
import sideImage from "../../assets/Mask group.png";
import phoneImage from "../../assets/002 1.png"; // Replace with your phone image path

const AppFeatures: React.FC = () => {
  return (
    <section className="relative bg-blue-500 text-white py-12 overflow-hidden">
      {/* Full-width background image */}
      <img
        src={sideImage}
        alt="Feature graphic"
        className="absolute inset-0 w-auto h-full object-cover z-10"
      />

      {/* Content above the image */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-start">
          
          {/* Phone image: full-width on mobile, 1/3 on lg */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 flex justify-center">
            <img
              src={phoneImage}
              alt="Phone"
              className="w-2/3 sm:w-1/2 lg:w-full h-auto lg:pr-16 pt-10 transform transition-transform duration-200 hover:scale-110"
            />
          </div>

          {/* Features section: full-width on mobile, 2/3 on lg */}
          <div className="w-full lg:w-2/3 lg:pl-4 ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-400 lg:pb-8">
              App Features
            </h2>

            {/* Responsive grid: 1 col on xs, 2 on sm/md, 3 on lg+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:pt-8">
              {[
                "All Semester Syllabus & Notes",
                "Prepare Interview Questions",
                "Explore Events Near You",
                "All Semester Quantums",
                "Find Roadmaps of Technologies",
                "Contribute your contents",
                "Previous Year Question Papers",
                "Find Internships/Jobs",
                "Get Placement Notes",
                "E-Books & Video Lectures",
                "Ask Your Doubts from community",
                "Practice Aptitude for placements",
              ].map((text) => (
                <div
                  key={text}
                  className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-110"
                >
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
