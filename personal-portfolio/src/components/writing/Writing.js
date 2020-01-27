import React from "react";
import "./writing.css";

const Writing = props => {
  return (
    <div className="writing">
      <div className="writing-section">
        <img
          className="writing-img"
          src="https://live.staticflickr.com/65535/32727760187_a296109bb6.jpg"
          alt="writing about coding"
        />
        <a
          className="article"
          href="https://itnext.io/how-to-build-a-productivity-application-in-react-part-4-14f1ed04dc8f"
        >
          How to Build a Productivity Application in React: Part 4
        </a>
        <a
          className="article"
          href="https://itnext.io/how-to-build-a-productivity-application-in-react-part-3-a1c4e212fdcb"
        >
          How to Build a Productivity Application in React: Part 3
        </a>
        <a
          className="article"
          href="https://itnext.io/how-to-build-a-productivity-application-in-react-part-2-7a5f9b8fed3"
        >
          How to Build a Productivity Application in React: Part 2
        </a>
        <a
          className="article"
          href="https://itnext.io/how-to-build-a-productivity-application-in-react-part-1-9f0c7ee65772?source=---------7------------------"
        >
          How to Build a Productivity Application in React: Part 1
        </a>
      </div>
      <div className="writing-section">
        <img
          className="writing-img"
          src="https://live.staticflickr.com/65535/32727759747_a0c4500949.jpg"
          alt="professional blog writing"
        />
        <a
          className="article"
          href="https://medium.com/startup-secrets-revealed/lessons-from-amazons-2017-shareholder-letter-76a42133f9bf"
        >
          3 Key Lessons From Amazon's 2017 Shareholder Letter
        </a>
        <a
          className="article"
          href="https://medium.com/startup-secrets-revealed/subaru-left-a-note-on-my-car-this-morning-7e6cb72cd693"
        >
          Subaru Left a Note On My Car This Morning
        </a>
        <a
          className="article"
          href="https://medium.com/startup-secrets-revealed/the-anatomy-of-a-great-investor-pitch-994daf5b00a1"
        >
          The Anatomy of a Great Investor Pitch
        </a>
        <a
          className="article"
          href="https://medium.com/startup-secrets-revealed/why-entrepreneurs-should-say-no-12cc6274e50c"
        >
          Why Entrepreneurs Should Say No
        </a>
        <a
          className="article"
          href="https://medium.com/startup-secrets-revealed/as-an-entrepreneur-where-do-you-start-de3711d417f4"
        >
          As an Entrepreneur, Where Do You Start?
        </a>
        <a
          className="article"
          href="https://medium.com/startup-secrets-revealed/avoid-the-most-common-hiring-mistake-in-a-simple-way-d095592b2271"
        >
          Avoid the Most Common Hiring Mistake In a Simple Way
        </a>
      </div>
      <div className="writing-section">
        <img
          className="writing-img"
          src="https://live.staticflickr.com/65535/32727760817_6d81a0a3be.jpg"
          alt="personal essays"
        />
        <a
          className="article"
          href="https://medium.com/@claire.sinozich/a-case-against-toxic-queerness-b11b83158aeb"
        >
          A Case Against Toxic Queerness
        </a>
        <a
          className="article"
          href="https://medium.com/@claire.sinozich/i-didnt-know-i-was-raped-7fac89926267"
        >
          I Didn't Know I Was Raped
        </a>
      </div>
    </div>
  );
};

export default Writing;
