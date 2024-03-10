import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { skills, socialLinks } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Aziz
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Student and tech-enthusiast, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
      <div className="py-10 flex flex-col">
  <div className="mt-16 flex flex-wrap gap-12">
    {socialLinks.map((skill) => (
      <div className="block-container w-20 h-20" key={skill.name}>
        <div className="btn-back rounded-xl" />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <a href={skill.link} target="_blank" rel="noopener noreferrer">
            <img
              src={skill.iconUrl}
              alt={skill.name}
              className="w-full h-full object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default About;
