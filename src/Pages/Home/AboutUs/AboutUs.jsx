/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { motion, easeOut } from "motion/react";
import team1 from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";

const AboutUs = () => {
  return (
    <div className="hero bg-base-200 min-h-96 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center gap-10">
        {/* Animated Images Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center">
          <motion.img
            src={team1}
            alt="Team 1"
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={team2}
            alt="Team 2"
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-blue-400 shadow-2xl"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <motion.h1
            animate={{ x: 50 }}
            transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#584bad", "#cc5ebd"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Blogs
            </motion.span>
          </motion.h1>

          <p className="text-xl">
            From hidden gems to iconic landmarks, our latest adventures are here to inspire your next escape! Whether you're a beach lover, a mountain explorer, or a city wanderer, we've got stories, tips, and breathtaking photos to fuel your wanderlust. 🧳✨
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-2">Here’s what we’ve been up to lately:</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>
                🚶‍♂️ <strong>Wandering Through the Streets of Old Dhaka</strong> — A cultural deep dive into the heart of the city with street food, history, and local life.
              </li>
              <li>
                🏞️ <strong>Into the Hills of Bandarban</strong> — Hiking through lush trails, waterfalls, and staying with the indigenous communities.
              </li>
              <li>
                🐚 <strong>A Weekend in Cox’s Bazar</strong> — Beach vibes, sunsets, and seafood galore!
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold">✈️ Where to next?</h2>
          <button className="btn btn-primary mt-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
