import styles from "../style";
import { discount, heroImg} from "../assets";
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            We are create<br className="sm:block hidden" />{" "}
            <span className="text-gradient">  green space </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          in the cities
        </h1>
        
        <p className={`${styles.paragraph} text-black max-w-[500px] mt-3`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum nobis culpa a accusantium non alias, quae sequi et commodi. Assumenda ex beatae voluptatum quisquam sunt perferendis accusamus molestias dolorum?
          </p>
          
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={heroImg} alt="billing" className=" w-[100%] h-[95%] relative z-[5]" /> 

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
