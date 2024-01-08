import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">Charles' Portfolio</div>
      <div className="home__section-links">
        <div className="home__section-link">About</div>
        <div className="home__section-link">Experience</div>
        <div className="home__section-link">Projects</div>
        <div className="home__section-link">Contact</div>
      </div>
      <div className="home__social-links">
        <a className="home__social-link">
          <i className="fa-brands fa-github" />
        </a>
        <a className="home__social-link">
          <i className="fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Home;
