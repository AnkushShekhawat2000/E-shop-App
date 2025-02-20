import React from "react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cart/actions"
import { Button} from "antd";


const maxLength = 70;

const Product = ({data}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const quantity = useSelector(state => state.cart.cart[data.id] || 0);

      function handleAddToCart() {
        dispatch({ type: cartActions.INC_QTY, payload: data.id });
      }
    
      function handleRemoveFromCart() {
        dispatch({ type: cartActions.DEC_QTY, payload: data.id });
      }
    



  if (!data) return <p>Loading product...</p>; 

  return (
  <div className="product">
    <h1>{data.title}</h1>
    <img src={data.image} alt={data.title} />
    <h3 className="product-description">
       {isExpanded ? data.description : `${data.description.slice(0,maxLength)}...`}
       <Button className="expand-button" onClick={() => setIsExpanded(!isExpanded)}>
         <h2>{isExpanded ? "less..." : "more..."}</h2>
       </Button>
    </h3> 
  
    <h1>Price: ${data.price}</h1>

     <div className="button-container">
     <Button className="add-button" onClick={() => dispatch({ type: cartActions.INC_QTY, payload: { id: data.id, price: data.price } })}>Add to Cart</Button>

        <div className="buttons">
          <Button onClick={() => dispatch({ type: cartActions.INC_QTY, payload: { id: data.id, price: data.price } })}>+</Button>
          <h5>Quantity :{quantity}</h5>
          <Button onClick={() => dispatch({ type: cartActions.DEC_QTY, payload: { id: data.id, price: data.price }})}>-</Button>
        </div>
     </div>
  </div>

  );
}

export default Product;
