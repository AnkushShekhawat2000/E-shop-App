import { Button, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import SidebarProduct from '../Header/SidebarProduct';
import { cartActions } from '../../redux/cart/actions';



const Sidebar = ({ data }) => {
    
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const { open, setOpen, products } = data;
    const list = [];

    products?.forEach(product => {
        if (cart[product.id]) {
            list.push({ ...product, quantity: cart[product.id] });
        }
    });



    return (
        <div>
            <Drawer className="sidebar"
                title="Shopping Cart"
                placement="right"
                closable={true}
                keyboard
                onClose={() => setOpen(false)}
                open={open}
            >
               
                {list.length > 0 ? (
                    list.map((item) => (
                        <SidebarProduct className="cart-item" key={item.id} product={item} />
                    ))
                    
                ) : (
                    <p>Cart is empty</p>
                )}
               { list.length > 0 && <Button className='reset-button'  onClick={() => dispatch({type: cartActions.RESET})}>Reset cart</Button>}
           
            </Drawer>
            
        </div>
    );
};

export default Sidebar;
