import { Dropdown, Space, Slider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {FilterOutlined} from "@ant-design/icons";

const CustomFilter = ({data}) => {


    const {priceRange, setPriceRange, setProducts} = data;
  
    const fetchByCategory = async (category) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    const handleMenuClick = ({ key }) => {
        fetchByCategory(key);
    };

    return (

        <div className="filter-container">
           <div className="category-filter">
                <Dropdown
                    menu={{ 
                        items: [
                            { label: "Clothing", key: "men's clothing" },
                            { type: "divider" },
                            { label: "Jewelery", key: "jewelery" },
                            { type: "divider" },
                            { label: "Electronics", key: "electronics" },
                        ], 
                        onClick: handleMenuClick 
                    }}
                    trigger={["click"]}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                       Category <FilterOutlined />
                        </Space>
                    </a>
                </Dropdown>
           </div>

            <div className="range-filter">
                <h3>Price</h3>
                <Slider 
                    className="custom-slider"
                    range
                    min={0}
                    max={1000}
                    step={10}
                    defaultValue={[0, 1000]}
                    onChange={setPriceRange} 
                />
               <p>${priceRange[0]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${priceRange[1]}</p>

            </div>

        </div>
    )
}


export default CustomFilter;