import {  Row, Col } from "antd";
import { useState, useEffect } from "react";
import Product from "../../components/Main/product";
import CustomFilter from "./Filter/index" 



const Main = ({data}) => {    
   
    const {products, setProducts} = data;
    const [priceRange, setPriceRange] = useState([0, 1000]);
      
    const filteredProducts = products.filter((product) => 
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    return (
        <div className="main-container">
            <CustomFilter data={{priceRange, setPriceRange, setProducts}}/>
            <Row className="row" gutter={[30, 100]}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Col className="col" span={6} key={product.id}>
                            <Product data={product} />
                        </Col>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </Row>
        </div>
    );
};

export default Main;
