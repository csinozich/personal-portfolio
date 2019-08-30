import React from "react";
import "./about.css";

const About = props => {
  return (
    <div className="about">
      <div>
        <img
          className="about-image"
          src="https://live.staticflickr.com/65535/40702294363_d8945f2dec_z.jpg"
          alt="headshot"
        />
      </div>
      <div className="about-content">
        <div>
          <h2 className="aboutheader">Nice to meet you!</h2>
          <p>
            My name is Claire Sinozich, and I'm based just outside of Denver,
            Colorado. I am currently a full stack web development student with
            Lambda School, and an aspiring web developer. My technology
            interests include data security, blockchain, decentralization, and
            agtech. I am also passionate about sustainable food production,
            peace and state-building initiatives, and Ancient Near Eastern
            mythology. I use she/her pronouns.
          </p>
        </div>
        <div>
          <h3 className="about-header">Education</h3>
          <div className="right-align">
            <h4>Lambda School</h4>
            <p className="dates">
              November 2018-present (Graduation: May 2020)
            </p>
            <p className="description">Full Stack Web Development</p>
            <p>
              I am currently a student with Lambda School, an online programming
              and computer science vocational program. So far, I have completed
              the full front-end and back-end curriculum. See the languages I've
              learned below.
            </p>
            <h4>New York University</h4>
            <p className="dates">September 2013-May 2017</p>
            <p className="description">
              Gallatin School of Individualized Study
            </p>
            <p className="description">
              Bachelors of Arts in Interdisciplinary Studies
            </p>
            <p className="description">
              Concentration in Critiques of Western Moral Imperialism in Spaces
              of Conflict
            </p>
            <p className="description">Minor in Hebrew and Judaic Studies</p>
            <p>
              I graduated cum laude with a GPA of 3.76 from New York University
              in May of 2017. My thesis,{" "}
              <span className="italic">
                The Making of a Nation: Ber Borochov, Aaron David Gordon, and
                the Tensions Between Socialism and Zionism in Palestine During
                the First Aliyah
              </span>
              , received honors from the Gallatin School of Individualized
              Study. My studies were focused on international relations,
              military and NGO interventions, the semantics of war, and Middle
              Eastern Conflict. My minor focused on Ancient Near Eastern
              language and mythology with a connection to Biblical literature.
            </p>
          </div>
        </div>
        <div>
          <h3 className="about-header">Skills</h3>
          <ul>
            <li>Programming</li>
            <li>Microsoft Office</li>
            <li>Academic and Industry-Specific Research</li>
            <li>Project and Planning and Management</li>
            <li>Hydroponic Farming</li>
            <li>FTIR Research and Readings</li>
            <li>Adobe Creative Suite</li>
            <li>Academic and Industry-Specific Writing</li>
            <li>Marketing Platforms: Mautic and Hubspot</li>
            <li>Adobe Creative Cloud</li>
            <li>
              Languages
              <ul>
                <li>English: Reading, Writing, and Speaking Fluent</li>
                <li>
                  Spanish: Reading Fluent, Writing and Speaking Proficient
                </li>
                <li>French: Reading, Writing, and Speaking Intermediate</li>
                <li>German: Reading, Writing, and Speaking Intermediate</li>
                <li>Arabic: Basic Conversational Speaking</li>
                <li>Biblical Hebrew: Reading Intermediate</li>
                <li>Akkadian: Reading and Writing Beginner</li>
                <li>Sumerian: Reading and Writing Beginner</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="about-header">
            Programming Languages, Libraries, and Skills
          </h3>
          <ul className="columns">
            <li>HTML</li>
            <li>
              CSS
              <ul>
                <li>LESS</li>
                <li>Bootstrap</li>
              </ul>
            </li>
            <li>JavaScript</li>
            <li>
              React
              <ul>
                <li>React Router</li>
                <li>ReactStrap</li>
                <li>Styled Components</li>
              </ul>
            </li>
            <li>
              React Redux
              <ul>
                <li>Redux Thunk</li>
              </ul>
            </li>
            <li>PHP</li>
            <li>Wordpress</li>
            <li>
              SQL
              <ul>
                <li>SQLite3</li>
                <li>SQLite Studio</li>
              </ul>
            </li>
            <li>Node.js</li>
            <li>Express</li>
            <li>
              Authentication
              <ul>
                <li>BCrypt JS</li>
                <li>JSON Web Tokens</li>
                <li>Cookies and Sessions</li>
              </ul>
            </li>
            <li>
              Testing
              <ul>
                <li>Jest</li>
                <li>Supertest</li>
              </ul>
            </li>
            <li>
              Miscellaneous
              <ul>
                <li>HTTP</li>
                <li>AJAX</li>
                <li>Git Flow</li>
                <li>UI Principles</li>
                <li>Functional Programming Techniques</li>
                <li>Blockstack</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="about-header">Work Experience</h3>
          <div className="right-align">
            <h4>Startup Secrets (by Underscore Venture Capital)</h4>
            <p className="dates">February 2018-present</p>
            <p className="description">Product Manager</p>
            <p>
              Startup Secrets is a non-profit dedicated to educating
              entrepreneurs regardless of location or socio-economic status,
              with the goal of supporting developing communities around the
              world. At Startup Secrets, I wear a lot of hats!
            </p>
            <p>
              <span className="italic">Marketing</span>: I handle all marketing
              efforts at Startup Secrets, including (1) email marketing
              (newsletters, personalized emails, etc.) with Mautic and Hubspot,
              (2) content marketing, including blog posts and content pillars,
              (3) social media, managing LinkedIn, Twitter, Facebook, Quora, and
              Medium, (4) branding, developing a style guide and branding
              guidelines, and (5) Paid advertising with Google Ads, YouTube Ads,
              and social media advertising.
            </p>
            <p>
              <span className="italic">Content</span>: Outside of the blog, I
              also created the entire navigation system for Startup Secrets
              Lessons, and have authored all individual written lessons on the
              website. I am also responsible for handling all related resources,
              discussions, and the tagging system. Additionally, I have handled
              the rework of all previous case studies, as well as the
              development of new case studies.
            </p>
            <p>
              <span className="italic">Community Engagement</span>: I have
              implemented forums and comment sections for Startup Secrets,
              posting regularly and moderating all posting. Additionally, I have
              implemented user research and feedback functionality with Team
              Parlor
            </p>
            <p>
              <span className="italic">Web Development</span>: I am the
              non-technical project manager for the development of our online
              application. I managed the bidding and hiring process, and have
              been project lead on the Startup Secrets side, directing our
              development team, handling finances, and making decisions about
              the look, feel, and direction of our online development.
              Additionally, I create and manage forms, landing pages, all
              analytics, sharing capabilities, and more.
            </p>
            <p>
              <span className="italic">Other</span>: In addition to my other
              responsibilities, I have also participated in building our
              business model, as well as hiring and managing interns.
            </p>
          </div>
          <div className="right-align">
            <h4>The GrowHaus</h4>
            <p className="dates">June 2017-January 2019</p>
            <p className="description">
              Hydroponic Farm Intern, Farm Administration Intern, Operations
              Intern
            </p>
            <p>
              The GrowHaus is a non-profit farm and food justice center in
              downtown Denver. Over the course of 1.5 years with The GrowHaus, I
              held three separate roles: the first was as Operations Intern,
              where I handled a wide range of responsibilities from soil
              sampling to event management to legal permitting and compliance.{" "}
            </p>
            <p>
              Secondly, I was a Hydroponic Farm Intern, working on harvesting,
              packaging, and distributing lettuce, herbs, and edible flowers.{" "}
            </p>
            <p>
              Lastly, I was the Farm Administration Intern, where I supported
              general supply needs. I also developed a Department of Agriculture
              and FDA-certified Food Safety and Recall program for all three
              farms: Hydroponic, Aquaponic, and Mushrooom. I was then
              responsible for ensuring compliance and managing Standard
              Operating Procedures and logs.
            </p>
          </div>
        </div>
        <div>
          <h3 className="about-header">Awards and Certifications</h3>
          <ul>
            <li>NYU Founder's Day Award for Exceptional Academics</li>
            <li>NYU Gallatin Senior Thesis received Honors</li>
            <li> Hubspot Content Marketing Certified</li>
            <li>Hubspot Inbound Certified</li>
            <li>Hubspot Social Media Certified</li>
          </ul>
        </div>
        <div>
          <h3 className="about-header">More About Me</h3>
          <ul>
            <li>
              I interned in the Ancient Near Eastern Department of the
              Metropolitan Museum of Art for a semester in college.
            </li>
            <li>
              I volunteered with a program called Heritage for Peace doing
              academic and industry-specific research related to protecting
              Syrian artifacts throughout the civil war
            </li>
            <li>
              I am currently a volunteer at my town's Recycling Center, since my
              town does not support recycling pickup from homes
            </li>
            <li>
              I am absolutely in love with the Ancient Near East, with a
              particular focus on Akkadian and Sumerian languages and mythology.
              I have studied cuneiform, Biblical literature, and mythologies
              from the Akkadian Empire, Sumer, Babylonia, the Levant, and
              Ancient Egypt.
            </li>
            <li>
              I am an avid traveler, having visited France, England, Spain,
              Denmark, Sweden, Germany, Palestine, Israel, Egypt, Jordan,
              Canada, and 29 out of 50 US states. I've lived in six states:
              Delaware, Massachusetts, Maine, North Carolina, New York, and
              Colorado.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
