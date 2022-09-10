import { useState } from "react";
import { Footer } from "../components/footer/Footer";
import { skills } from "../data/skills";
import "./main.css";
const Main = () => {
  const [skillsData, setSkillsData] = useState(skills);
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              Hi all, I'm Savita
              <span className="wave-emoji"> 👋</span>
            </h1>
            <p className="greeting-text-p subTitle">
              A passionate Frontend Developer. I am having an experience of
              building 5 personal fully responsive web applications with
              JavaScript, ReactJs, Redux, HTML and CSS.
            </p>
            <div className="button-greeting-div">
              <div className="h">
                <a className="main-button" href="https://drive.google.com/drive/u/0/folders/1n6gBw_MtewcHjj5Bfhg5tKaLZ1meklZt" target="_blank">
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <div className="software-skills-main-div">
            <ul className="dev-icons">
              {skillsData.map((skills) => {
                return (
                  <li
                    key={skills.id}
                    className="software-skill-inline"
                    name={skills.skillName}
                  >
                    <i className={skills.boxicon}></i>
                    <p>{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export { Main };
