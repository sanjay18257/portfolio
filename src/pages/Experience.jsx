import React from "react";
import "../styles/experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import UpdateIcon from '@mui/icons-material/Update';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Shenbagam Matric Higher Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle">
           SSLC - Pollachi
          </h4>

          <p>  Percentage - 92.4%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Shenbagam Matric Higher Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle">
           HSC - Pollachi
          </h4>

          <p>  Percentage - 90.3%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Sri Krishna College Of Technology - Coimbatore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Bachelor Of Engineering (CSE)
          </h4>

          <p>CGPA - 7.1 (Till 5th sem)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Full Stack Developer
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Freelancing</h4> */}
          <p>Developed Digital Marketing Website, Car Service Website , Student management System , Yoga Course selling Website ,Grocery Shop management</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<UpdateIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Future Update
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Freelancing</h4> */}
          <p>Learning NextJs , Python , Engaging myself with expertising DSA Concepts</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
