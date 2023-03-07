import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/guitar2.jpg"
          alt="Image showing Lacho"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Lacho</h1>
      <p>
        I blog about parenthood - and more precisely on fatherhood and share
        some advices and experience that I hope will help you out and make you
        laugh!
      </p>
    </section>
  );
};

export default Hero;
