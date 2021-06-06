import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div id="about"></div>
      <div className="about-container section-container">
        <div className="about-top">
          <div className="about-left">
            <h2>About Me</h2>
            <p id="first">
              I'm a Full Stack Developer based in California looking for new
              opportunities. I'm a quick learner who loves solving complex
              problems. I work well under pressure and I always produce the
              expected results, often going above and beyond. Lorem ipsum I am
              great and this paragraph is more full than this balch paasdijf
              paodc apeorjn bvpuhe apkjn pbihu epjn pa9difn ewipjn pdicun.
            </p>
            <p>
              My specialties are React and Node, but I'm always looking forward
              to learning new technologies. I am always learning and doing
              whatever I can to improve the quality of both my code and my final
              products. Lorem ipsum I am great and this paragraph is more full
              than this balch paasdijf paodc apeorjn bvpuhe apkjn pbihu epjn
              pa9difn ewipjn pdicun.
            </p>
          </div>
          <div className="about-right">
            <div className="image-container"></div>
          </div>
        </div>

        <p id="technologies-title">Tech I've Been Using</p>
        <div className="tech-lists-container">
          <div id="first" className="list">
            <p>Front End</p>
            <ul>
              <li>Javascript</li>
              <li>HTML, CSS and Sass/SCSS</li>
              <li>React (with Hooks)</li>
              <li>Redux and Context API</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>React Testing Library</li>
            </ul>
          </div>
          <div className="vert-line">
            <div className="line"></div>
          </div>
          <div className="list">
            <p>Back End</p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful API</li>
              <li>PostgreSQL</li>
              <li>Sqlite3</li>
              <li>JSON web token</li>
              <li>Knex</li>
              <li>Jest and Supertest</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
