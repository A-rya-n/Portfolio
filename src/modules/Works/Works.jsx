import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "./Exp";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#1d1863", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={exp.icon}
          className="object-contain w-auto h-auto rounded-full p-1 border-white"
        />
      </div>
    }
  >
    <h3 className="vertical-timeline-element--title text-3xl">{exp.title}</h3>
    <h4 className="vertical-timeline-element--subtitle font-medium pb-5">
      {exp.company_name}
    </h4>
    <ul>
      {exp.points.map((point) => (
        <li key={point} className="pb-3">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <div className="h-full px-4">
        <div className="bg-slate-800 mx-auto h-full rounded-xl shadow-xl flex-col p-5">
          <div className="text-5xl text-white font-sans mb-2">Experience</div>
          <VerticalTimeline animate={true} layout="1-column-left">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </motion.div>
  );
};

export default {
  routeProps: {
    path: "/Works",
    element: <Works />,
  },
  name: "My work",
};
