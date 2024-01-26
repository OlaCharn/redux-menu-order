import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

// --> пришли из dishesSlice.js, чтобы делать фильтры
//мы пришли из документа dishesSlice.js 
//мы  return selectedCategory === dish.category; этим говорим, что
// когда мы кликаем на selectedCategory хотим, чтобы она соответствовала категории блюда data
//импортируем из dishesSlice import { useSelector } from "react-redux";
//import { getSelectedCategory } from "../../redux/dishesSlice";
// ---> идем в filter.js , чтобы сделать клик на кнопку

const Dishes = () =>{
    const selectedCategory = useSelector(getSelectedCategory);
    
    return(
        <div  >
        {dataDishes
        .filter(dish => {
            if (selectedCategory === "ALL") return true;
            return selectedCategory === dish.category;
        }
        )
        .map(dish => <Dish key={dish.id} dish={dish} /> )  }
        </div>
    )
}
export default Dishes;