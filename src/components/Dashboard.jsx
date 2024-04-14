import { Link } from "react-router-dom";
import styles, { layout } from "../style";
import { dashboard } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${index !== dashboard.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-white-dashboard `}> 
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

export function Dashboard() {
    return (
        <section id="dashboard" className={"flex md:flex-row flex-col "}>
            <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-black ">Dashboard</h1>
        <div className={`${layout.sectionImg} flex-col`}>  <p>Welcome to Dashboard Green Points prototype</p>
      {dashboard.map((dashboard, index) => (
        <FeatureCard key={dashboard.id} {...dashboard} index={index} />
      ))}
    </div>

      </section>
    );
  }