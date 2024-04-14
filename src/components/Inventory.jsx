import { useState, useEffect } from 'react';
import styles, { layout } from "../style";
import axios from 'axios';


function Inventory() {
        // Define state to store the fetched data
        const [inventoryData, setInventoryData] = useState(null);
      
        // Fetch data from the JSON file when the component mounts
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('../inventory.json'); // Assuming inventory.json is in the public folder
              setInventoryData(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []); 

       // Render the fetched data
  return (
    
    <section className="w-full">
        

      <h1>Inventory Data:</h1>
      {inventoryData ? (
        <pre>{JSON.stringify(inventoryData, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}

      
    </section>
  );
}

export default Inventory