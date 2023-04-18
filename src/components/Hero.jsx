import styles from "../style";
import { hero } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Evolutionalizing</span> the world of{" "}
            <span className="text-white">Technology</span>
          </p>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[55px] text-[30px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Technical Experts.
        </h1>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[150px] text-[90px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">ETWOT</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[55px] text-[30px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Hassle Free Interface.
        </h1>

        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          ETWOT is a one stop interface connecting clients and technical experts
          of every field. Revolutionise the digital reach of your business with
          our carefully vetted and picked technical experts from all around the
          globe.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={hero}
          alt="robot arm"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
