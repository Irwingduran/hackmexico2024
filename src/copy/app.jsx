import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero} from "./components";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Button} from "./components/Button";
import Inventory from "./components/Inventory";

function App() {
  return (
  <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <BrowserRouter>
       <Hero />
        <Routes>
     
       
          <Route path="/Inventory" element={<Inventory />} />
  
        </Routes>
        </BrowserRouter>

      </div>
      
    </div>
    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  


    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <CTA />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
  
);
}

export default App;
