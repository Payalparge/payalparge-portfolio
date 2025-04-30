import React from 'react';

const Experience = () => {
  return (
    <section className="experience-container">
      <h2 className="experience-content">Experience</h2>

      <div className='main'>
        {/* Internship at Elicit Digital Pvt. Ltd. */}
        <div className="experience-card">
          <h2>Internship at Elicit Digital Pvt. Ltd.</h2>
          <div className="experience-duration">June 2023 - August 2023</div>
          <ul>
            <li>Completed a Web Designing course as an intern</li>
            <li>Learned and practiced HTML, CSS, and JavaScript</li>
            <li>Created responsive web pages with clean UI/UX</li>
            <li>Gained hands-on experience in frontend development fundamentals</li>
          </ul>
        </div>

        {/* Internship at Divergent Softlab Pvt. Ltd. */}
        <div className="experience-card">
          <h2>Internship at Divergent Softlab Pvt. Ltd.</h2>
          <div className="experience-duration">May 2024 - July 2024</div>
          <ul>
            <li>Worked on React.js as part of a full-stack development internship</li>
            <li>Built a complete full-stack project using React and backend APIs</li>
            <li>Practiced state management and component-based development</li>
            <li>Collaborated with mentors and peers for project development</li>
          </ul>
        </div>

        {/* Experience at Technogriff Solution */}
        <div className="experience-card">
          <h2>Employee at Technogriff Solution</h2>
          <div className="experience-duration">One Month</div>
          <ul>
            <li>Worked as a developer focusing on .NET and SQL</li>
            <li>Built backend modules using .NET framework</li>
            <li>Handled database operations and queries with SQL</li>
            <li>Collaborated in a team environment and followed Agile practices</li>
          </ul>
        </div>

        {/* Job Experience at Makerspace Technologies */}
        <div className="experience-card">
          <h2>Python Developer at Makerspace Technologies</h2>
          <div className="experience-duration">march 2025 - Present</div>
          <ul>
            <li>Developed Python-based backend systems for various applications</li>
            <li>Worked with Django and Flask for building APIs and web applications</li>
            <li>Integrated databases like PostgreSQL and MySQL for efficient data management</li>
            <li>Collaborated with frontend developers to ensure smooth integration of backend services</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
