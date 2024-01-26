
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";

//<p className={ selectedCategory === category ? "categoryButtonSelected categoryButton" :  "categoryButton" } >  {category} </p>
// если у нас выбрана определенная категория, то покажи нам это или , если нет - это

// --> Пришли из Diches.js и dishesSlice.js, чтобы поставить кнопку
// импорт import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";
// используем dispatch, чтобы поменять состояние при клике
// когда будет клик onClick={()=>{dispatch(filterCategory(category))}}
// меняй состояние 
// а сценарий прописывания у нас в reducers в dishesSlice + Dishes.js -отображение

const Filter = ( { category } )=>{

    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div>
           <p onClick={()=>{dispatch(filterCategory(category))}} className={ selectedCategory === category ? "categoryButtonSelected categoryButton" :  "categoryButton" } >  
           {category} </p>
        </div>
    )
}

export default Filter;