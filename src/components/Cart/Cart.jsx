import { MdClose } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'
import CartItem from './CartItem/CartItem'
import "./Cart.scss";
const Cart = ({setShowCart}) => {
    return (
    <div className='cart-panel'>
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn">
                    <MdClose onClick={() => setShowCart(false)}/>
                    <span className="text">
                        Close
                    </span>
                </span>
            </div>
         

            <>
            <CartItem />
            <div className="cart-footer">
                <div className="subtotal">
                 <span className="text">Subtotal:</span>
                 <span className="text total">Rs1234</span>
                </div>
                <div className="button">
                    <button className='checkout-cta'>Checkout</button>
                </div>
            </div>
            </>
        </div>
    </div>
    );
};

export default Cart;
