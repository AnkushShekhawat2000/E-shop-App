import { useState, useEffect} from "react";
import Header from "../Header/Header"
import Main from "../Main/Main"
import "antd/dist/reset.css";
import CoralSlider from "../Header/Coral";


function Dashboard() {

  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null); 

 

  useEffect(() => {
      fetchProducts(); 
  }, []);

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            setError(true);
        } else {
            const data = await response.json();
            setProducts(data);
            setError(false);
        }
    } catch (err) {

        setError(true);
    }
}
  return (
    <div className="App">
     
      <Header products={products}/>
      <CoralSlider/>
      <Main  data ={{products, setProducts}}/>
    
    </div>
  );
}

export default Dashboard;
