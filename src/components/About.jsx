import React from 'react'
import plasticSheet from "../assets/plasticSheet.jpg"
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={plasticSheet} alt="plasticSheet" className="about-photo" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Packmat Supply Chain Solution, headquartered in the vibrant city of
            Kolkata, is your premier source for all your packaging material
            needs. With a commitment to excellence and a focus on innovation, we
            have been a trusted partner in the packaging industry.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About