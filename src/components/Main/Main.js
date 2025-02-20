import { Row, Col, Pagination, Input } from "antd";
import { useEffect, useState } from "react";
import Product from "../../components/Main/product";
import CustomFilter from "./Filter/index";

const Main = ({ data }) => {
    const { products, setProducts } = data;

    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [searchInput, setSearchInput] = useState("");
    const [paginatedProducts, setPaginatedProducts] = useState("");

   
    const filteredProducts = products.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    const searchedProducts = filteredProducts.filter((product) =>
        product.title?.toLowerCase().includes(searchInput.toLowerCase())
    );

  
    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        setPaginatedProducts(searchedProducts.slice(startIndex, startIndex + pageSize));
    }, [searchedProducts, currentPage, pageSize]);

    const handlePageChange = (page, newPageSize) => {
        setCurrentPage(page);
        setPageSize(newPageSize);
    };

    return (
        <div className="main-container">
        
           <span className="filters"> 
              <div className="search-bar">
                <Input
                    className="search"
                    placeholder="Search Products..."
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                        setCurrentPage(1); 
                    }}
                />
               </div>
              <CustomFilter data={{ priceRange, setPriceRange, setProducts }} />
            </span> 


            <Row className="row" gutter={[30, 100]}>
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((product) => (
                        <Col className="col" span={6} key={product.id}>
                            <Product data={product} />
                        </Col>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </Row>

            <div className="pagination-container">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={searchedProducts.length} 
                    onChange={handlePageChange}
                    showSizeChanger
                />
            </div>
        </div>
    );
};

export default Main;

