import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience a hassle free interface and personalised experience with in
        your budget.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button title="Get Started" link="https://docs.google.com/forms/d/e/1FAIpQLSf9Cv3Cw8hKSsVMQc0kwN4E7gXmfbnGHvS3WbM1eqYroyd1XA/viewform"/>
    </div>
  </section>
);

export default CTA;
