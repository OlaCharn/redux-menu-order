//это корзина с иконкой корзины
//мы хотим, чтобы к нему добавился еще компонент, который будет содержать сам продукт
//мы соединяем корзину с cartSlice
//getCartItems из cartSlice мы сделали специально для того, чтобы видеть, что находится в нашей корзине

import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

//для этого создаем Cartitem.js
//для того, чтобы отобразить все что попадает в корзину, мы используем map

const Cart = () =>{
    const cartItems = useSelector(getCartItems) //таким способом мы соединили cartSlice.js и Cart.js

    const totalPrice = useSelector(getTotalPrice);
    return(
        <div>
            <img className="cartIcon" alt="cart" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/> 
            <h3>TOTAL: $ {totalPrice} </h3>

            {cartItems.map(cartItem => <Cartitem key={cartItem.id}  cartItem={cartItem} /> )} {/* ---> Cartitem.js */}
            
        </div>
    )
}
export default Cart;