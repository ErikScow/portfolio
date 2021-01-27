import React from 'react'

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p>I'm a Full Stack Developer based in California looking for new opportunities. I'm a quick learner who loves solving complex problems. I work well under pressure and I always produce the expected results, often going above and beyond.</p>
            <p>My specialties are React and Node, but I'm always looking forward to learning new technologies. I am always learning and doing whatever I can to improve the quality of both my code and my final products.</p>
            <div className='tech-lists-container'>
                <p>Technologies I've been using:</p>
                <div className='list'>
                    <p>Front End:</p>
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
                <div className='list'>
                    <p>Back End:</p>
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
                <div className='list'>
                    <p>Others:</p>
                    <ul>
                        <li>Github</li>
                        <li>Python</li>
                        <li>Digital Ocean</li>
                        <li>Heroku</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default About