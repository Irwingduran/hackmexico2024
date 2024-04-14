import { Img2 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={Img2} alt="billing" className="w-[100%] h-[95%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      A Sustainable Vision for <br className="sm:block hidden" /> the Future
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With millions of tons of waste generated annually, it is vital to find effective solutions. Our approach: employ
       innovative technologies and advanced algorithms to revolutionize waste management, from collection to reuse. 
       By optimizing every stage of the materials life cycle, we reduce landfill waste and open up new economic and environmental opportunities.
      </p>


    </div>
  </section>
);

export default Billing;
