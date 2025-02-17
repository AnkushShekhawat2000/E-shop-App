import { Button, Input} from "antd";
import {useState} from "react"
import { useSelector,  useDispatch } from 'react-redux';
import { authActions } from "../../redux/auth/actions";
import Sidebar from "../Header/Sidebar";
import cart from "../../assets/cart.png"
import logo from "../../assets/shop image.jpeg"
import CoralSlider from "./Coral";

const { Search } = Input;


const Header = ({products}) => {
   
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

  
    const totalProducts = useSelector(s => s.cart.totalProducts);


    let totalPrice = useSelector(s => s.cart.totalPrice);
    if (totalPrice > 0) {
        totalPrice = Math.round(totalPrice); 
    }


    
    return (
        <div className="header-container">
              <img className="logo" src={logo}/>
              <div className="header-button">
              
                <Button onClick={() => dispatch({type:authActions.LOGOUT})}>logout</Button>
                <Button className="cart-button" onClick={() => setOpen(true)}>
                    {totalPrice !== 0 ? (
                        <div className="cart-container">
                            <img className="cart-image" src={cart} alt="cart" />
                            {totalProducts > 0 && <span className="cart-badge">{totalProducts}</span>}
                            <span className="price">$ {totalPrice}</span>
                        </div>
                    ) : (
                        <span className="cart-text"> <img className="cart-image" src={cart} alt="cart" /><span>MyCart</span></span>
                    )}
              </Button>
              <Sidebar data={{ open, setOpen, products }} />


              </div>
        </div>
    )
}


export default Header;