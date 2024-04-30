import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import "../styles/Home.css";
import Data from './Data'
import Social from './Social'
import Scroll from './Scroll'


const Home = () => {
  return (
    <div className="home">
     
        {/* <h1>Hi, My Name is Sanjay S</h1>
        <article className="prompt">
          <p className="home-desc">
           
          A full stack developer with a passion for learning and creating thrives on innovation, constantly seeking out new technologies to build elegant solutions.
          </p>
          <a
            href="https://github.com/sanjay18257"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="cseskct216sanjay.s@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Email />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjay-s-1a9719239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </article> */}
<section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
        {/* <Scroll /> */}
      </div>
    </section>

      <section className="skills" id="skills">
        <h2>Skills</h2>
        <ul className="list">
          <li className="item">
            <h3>Languages</h3>
            <span>Java , Java-OOP , Java-DSA , Python , HTML, CSS, JavaScript </span>
          </li>
          <li className="item">
            <h3>Frontend</h3>
            <span>
              ReactJS, NextJS, Redux, Vite  
            </span>
          </li>
          <li className="item">
            <h3>Backend</h3>
            <span>Java , Spring Boot , MySQL </span>
          </li>
          <li className="item">
            <h3>Miscellaneous</h3>
            <span>Github , Vscode, Postman, JWT , AWS </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
