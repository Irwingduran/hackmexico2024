import { Img1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Strengthening Communities: <br className="sm:block hidden" /> Education, Efficiency and Sustainability
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our commitment goes beyond waste management; it is about empowering communities, 
        educating society and building a sustainable system for our collection centers.
         By encouraging active community participation, we provide education on the importance 
         of recycling and responsible environmental practices.  
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={Img1} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
