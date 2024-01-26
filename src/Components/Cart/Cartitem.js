//тут мы хотим отобразить количество порций и блюда в корзине

import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes"
import { removeItemFromCart } from "../../redux/cartSlice";

const Cartitem = ( { cartItem } ) =>{
    //console.log(cartItem) //используем, чтобы понять, как получить доступ
    //к тому, что мы хотим отобразить в корзине - 
    //чтобы получить количество блюд - cartItem.quantity

    //ставим параметр item. Внутри него содержится все из dataDishes по элементу
    //и мы говорим Покажи здесь ситуацию, когда item.id соответсвуем cartItem.dishId
    // dishId сформировался, когда мы нажали кнопку на add to cart 
    //а эта логика прописана в cartSlice.js
    //тогда выведи его console.log(dishes)
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    //console.log(dishes)

    const dispatch = useDispatch()

    return(
        <div>
            <p> {dishes.name} </p>
            <p> {cartItem.quantity} portions </p>  
            <p> Price: ${dishes.price *cartItem.quantity} </p>
            <span onClick={()=>dispatch(removeItemFromCart( {cartItemId: cartItem.id} ))} >
            <img className="icon" alt="old" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
            </span>
        </div>
    )
}
export default Cartitem;