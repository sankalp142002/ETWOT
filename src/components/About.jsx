import { about } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={about}
        alt="team img"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Us
        <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
        ETWOT is a one roof solution for your technical requirements. We have a
        methodical team which caters all your needs form web development to logo
        designing and will also support you throughout with digital marketing
        and much more.
      </p>
      <p className={`${styles.paragraph} max-w-[650px] mt-3 text-start`}>
        our team of technical experts will provide you a personalized experience
        available nowhere else within the limits of your pocket.
      </p>

      <div className="flex flex-row items-center  py-[6px] mb-2 text-start">
        <Button styles={`mt-10`} title="Get Started"  link="https://docs.google.com/forms/d/e/1FAIpQLSf9Cv3Cw8hKSsVMQc0kwN4E7gXmfbnGHvS3WbM1eqYroyd1XA/viewform" />
      </div>
    </div>
  </section>
);

export default About;
