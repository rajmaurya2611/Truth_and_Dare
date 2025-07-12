// src/components/ThreeCardCarousel.tsx
import React, { useState, useEffect, useMemo } from "react";
import { Carousel, Rate } from "antd";
import "./feedback.css";

// import your user images:
import user1Img from "../../assets/feeback-user-image/ashok-gawali.png";
import user2Img from "../../assets/feeback-user-image/sakshi.png";
import user3Img from "../../assets/feeback-user-image/nitish-kumar.png";
import user4Img from "../../assets/feeback-user-image/sonu-rai.png";
import user5Img from "../../assets/feeback-user-image/kartik-sekhaliya.png";
import user6Img from "../../assets/feeback-user-image/sakshi-sakshi.png";
import user7Img from "../../assets/feeback-user-image/eijlan-cp.png";
import user8Img from "../../assets/feeback-user-image/sadiya-sheikh.png";
import user9Img from "../../assets/feeback-user-image/saba-sayed.png";

interface Testimonial {
  title: string;
  name: string;
  date: string; // e.g. "04 July 2024"
  feedback: string;
  image: string; // avatar
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    title: "Life-Saver for Students",
    name: "Rahul Gupta",
    date: "25 June 2025",
    feedback: "This app is a game-changer! It provides all the semester syllabus and notes in one place, making studying a breeze. Highly recommended!",
    image: user1Img,
    stars: 5,
  },
  {
    title: "Interview Preparation Made Easy",
    name: "Priya Singh",
    date: "22 June 2025",
    feedback:
      "I found the interview questions section extremely helpful. It covers a wide range of topics and prepares you thoroughly for any interview scenario. A must-have!",
    image: user2Img,
    stars: 5,
  },
  {
    title: "Explore Your Career Path",
    name: "Amit Kumar",
    date: "20 June 2025",
    feedback: "This app helped me find events related to my field of interest. It's great for networking and staying updated with industry trends.",
    image: user3Img,
    stars: 5,
  },
  {
    title: "Comprehensive Quantum Solutions",
    name: "Pooja Sharma",
    date: "18 June 2025",
    feedback: "I love the collection of all semester quantums available here. It's incredibly useful for practice and exam preparation.",
    image: user4Img,
    stars: 5,
  },
  {
    title: "Roadmaps Simplified",
    name: "Ankit Patel",
    date: "15 June 2025",
    feedback: "Finding roadmaps for various technologies has never been easier. This app provides clear and concise guides that are perfect for beginners.",
    image: user5Img,
    stars: 5,
  },
  {
    title: "Valuable Internship/Jobs Information",
    name: "Neha Gupta",
    date: "12 June 2025",
    feedback:
      "I discovered several internship opportunities through this app. It's a one-stop platform for finding internships and job openings tailored to your skills.",
    image: user6Img,
    stars: 5,
  },
  {
    title: "Essential Placement Notes",
    name: "Rohit Sharma",
    date: "10 June 2025",
    feedback: "The placement notes section is comprehensive and well-organized. It provides valuable insights and tips for securing placements.",
    image: user7Img,
    stars: 5,
  },
  {
    title: "Rich E-Books & Video Lectures",
    name: "Shreya Jain",
    date: "08 June 2025",
    feedback: "The collection of e-books and video lectures is impressive. It covers a wide range of subjects and is essential for academic success.",
    image: user8Img,
    stars: 5,
  },
  {
    title: "Supportive Community Interaction",
    name: "Akash Verma",
    date: "05 June 2025",
    feedback: "Engaging with the community to clarify doubts has been invaluable. It fosters collaboration and enhances learning.",
    image: user9Img,
    stars: 5,
  },
];


const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Feedback: React.FC = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(
    window.innerWidth < 768 ? 1 : 3
  );

  useEffect(() => {
    const onResize = () => setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slides = useMemo(
    () => chunkArray(testimonials, itemsPerSlide),
    [itemsPerSlide]
  );

  return (
    <div className="bg-gray-50 font-montserrat pt-16 pb-8 px-6 md:px-20 lg:px-28">
      <h2 className="text-center text-4xl font-medium font-montserrat mb-12">
        <span className="font-semibold text-[#7B83FF]"> Students Feedback!</span>
      </h2>

      <Carousel dots arrows autoplay>
        {slides.map((group, gi) => (
          <div key={gi} className="px-12">
            <div
              className={`flex ${
                itemsPerSlide === 1
                  ? "justify-center"
                  : "justify-center space-x-8"
              }`}
            >
              {group.map((t, idx) => (
                <div
                  key={idx}
                  className={`${
                    itemsPerSlide === 1 ? "w-full max-w-sm" : "w-1/3"
                  } bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col`}
                  
                >
                  {/* stars + title */}
                  <div className="flex flex-col mb-3">
                    <Rate
                      disabled
                      defaultValue={t.stars}
                      className="text-yellow-400"
                    />
                    <h3 className="mt-2 text-lg font-semibold text-gray-800">
                      {t.title}
                    </h3>
                  </div>

                  {/* feedback text */}
                  <p className="text-gray-600 flex-grow mb-6 h-[170px] md:h-[100px] lg:h-[80px]">{t.feedback}</p>

                  {/* avatar + name + date */}
                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                       loading="lazy"
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">
                        {t.name}
                      </p>
                      <p className="text-gray-400 text-xs">{t.date}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* fillers, if needed */}
              {group.length < itemsPerSlide &&
                Array.from({
                  length: itemsPerSlide - group.length,
                }).map((_, i) => (
                  <div
                    key={`filler-${i}`}
                    className={itemsPerSlide === 1 ? "w-full" : "w-1/3"}
                  />
                ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Feedback;
