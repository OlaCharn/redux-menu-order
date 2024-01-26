//тут кнопки, которые меняют количество

const ChangeQuantity = ( {quantity, setQuantity} ) =>{
    //props пришли к нам из Dish.js

    const addQuantity = () =>{
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }
    const removeQuantity =()=>{
        if(quantity <=1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity);
    }

    return(
        <div>
            <button onClick={addQuantity} > + </button>
            <span> {quantity} </span>
            <button onClick={removeQuantity} > - </button>
        </div>
    )
}
export default ChangeQuantity;