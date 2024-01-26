//тут отображение названия и начального количества

import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish = ( {dish} ) =>{
    const [quantity, setQuantity] = useState(1); //<-- 1 -потому что мы хотим, чтобы пользователь
    //мог добавлять товары, начиная с 1. Чтобы там не было минуса

    const dispatch = useDispatch();

    return(
        <div> 
            <img src={`./${dish.img}.jpg`} alt="old"/>
            <h2> {dish.name} </h2>  
            <p> $ {dish.price} </p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            {/* не забыть dispatch и import addItemToCart  */}
            <button onClick={ () => {dispatch(addItemToCart({dish, quantity}))}} > ADD to CART </button>


        </div>
    )
}
export default Dish;