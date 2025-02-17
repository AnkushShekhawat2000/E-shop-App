import { useDispatch } from "react-redux";
import {cartActions} from "../../redux/cart/actions"
import {Button} from "antd";

const SidebarProduct = ({product}) => {


    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: cartActions.INC_QTY, payload: { id: product.id, price: product.price } })
    }

    const decrement = () => {
        dispatch({ type: cartActions.DEC_QTY, payload: { id: product.id, price: product.price } })
    }

    return (
        <div className="sidebar-product">
            <img src={product.image} />
            <div className="title-box">
                <span>{product.title}</span>
                <p><b>Price :  ₹{product.price}</b></p>
            </div>
            <div className="btn-group">
                <Button onClick={decrement}>-</Button>
                <span>{product.quantity}</span>
                <Button onClick={increment}>+</Button>
            </div>
        </div>
    )

}


export default SidebarProduct;