//отвечает за корзину
//при нажатии add cart товар должен переходить в корзину
//делаем по аналогии с dishesSlice
// 1 что делаем - импортируем createSlice

// const timeId = new Date().getTime() + id: timeId, 
//мы используем это для того, чтобы при нажатии на удаление из корзины одного товара
// не удалялись остальные.
// путем присвоения id с датой присвоения мы заставляем различать при удалении

import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
        },
    reducers: {
        addItemToCart: (state, action) =>{
            const timeId = new Date().getTime() //см. выше
            state.cartItems.push({
                id: timeId, //см.выше
                dishId:action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        },
        removeItemFromCart: (state, action) =>{
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId //<-- у нас попадут в новый 
                //массив только те элементы, которые соответствуют этому условию
            )
        }
    }

})

//это логика для общей суммы заказа
export const getTotalPrice= state => {
    return state.cart.cartItems.reduce((total,cartItems) => {
        return cartItems.totalPrice + total
    },0) //потому что счет идет с нуля
} 

export const getCartItems= state => state.cart.cartItems;
export const {addItemToCart, removeItemFromCart} = slice.actions;
export default slice.reducer;


