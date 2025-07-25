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
    title: "Exciting and Diverse Challenges",
    name: "Rahul Gupta",
    date: "25 June 2025",
    feedback: "Ultimate Truth and Dare offers an incredible variety of challenges! From funny dares to thought-provoking truths, every round is packed with excitement. It's perfect for gatherings with friends!",
    image: user1Img,
    stars: 5,
  },
  {
    title: "Engaging Group Activity",
    name: "Priya Singh",
    date: "22 June 2025",
    feedback:
      "Ultimate Truth and Dare has become our go-to game! The questions are so diverse and engaging, covering everything from lighthearted fun to deeper conversations. It's a must-have for any social event.",
    image: user2Img,
    stars: 5,
  },
  {
    title: "Fun and Memorable Experiences",
    name: "Amit Kumar",
    date: "20 June 2025",
    feedback: "Playing Ultimate Truth and Dare has led to some of the most fun and memorable experiences with my friends. The game's unique categories and questions keep us entertained for hours.",
    image: user3Img,
    stars: 5,
  },
  {
    title: "Endless Entertainment",
    name: "Pooja Sharma",
    date: "18 June 2025",
    feedback: "Ultimate Truth and Dare is simply fantastic! With its wide range of options and unique questions, it ensures that every game night is filled with laughter and surprises.",
    image: user4Img,
    stars: 5,
  },
  {
    title: "Perfect for Social Gatherings",
    name: "Ankit Patel",
    date: "15 June 2025",
    feedback: "This game has transformed our social gatherings! The variety of categories and subcategories make it easy to find questions that everyone enjoys. It's a definite crowd-pleaser.",
    image: user5Img,
    stars: 5,
  },
  {
    title: "Ultimate Fun",
    name: "Neha Gupta",
    date: "12 June 2025",
    feedback:
      "Ultimate Truth and Dare is the ultimate fun! It's packed with options and subcategories that keep the excitement going. We love how it brings everyone together for an unforgettable time.",
    image: user6Img,
    stars: 5,
  },
  {
    title: "Exciting Challenges",
    name: "Rohit Sharma",
    date: "10 June 2025",
    feedback: "The challenges in this game are simply amazing! Whether you choose truth or dare, each option is unique and engaging. It's definitely a game changer for social events.",
    image: user7Img,
    stars: 5,
  },
  {
    title: "Unforgettable Moments",
    name: "Shreya Jain",
    date: "08 June 2025",
    feedback: "Playing Ultimate Truth and Dare has created unforgettable moments with friends and family. The variety of e-books and video lectures is impressive.",
    image: user8Img,
    stars: 5,
  },
  {
    title: "Community Engagement",
    name: "Akash Verma",
    date: "05 June 2025",
    feedback: "Ultimate Truth and Dare has enhanced my community engagement. Engaging with the community to clarify doubts has been invaluable. It fosters collaboration and enhances learning.",
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
    <div className="bg-gray-50 font-montserrat pt-16 pb-24 px-6 md:px-20 lg:px-28">
      <h2 className="text-center text-4xl font-medium font-montserrat mb-12">
        <span className="font-semibold text-[#7B83FF]"> Users Feedback!</span>
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
