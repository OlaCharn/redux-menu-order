import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';

//1. мы создали папку redux
//2. в этой папке создали store.js. Там ничего не было изначально
// там мы прописали reducer и под него создали документ dischesSlice.js и итегрировали его
//3. мы создали документ dishesSlice.js и здесь мы прописали такую логику 
// - name: "dishes" чтобы потом использовать в store
// мы прописали, что наше первоначальное состояние (наша первоначальная категория)
// была SEAFOOD
// на данном этапе reducer там пустой остается
// потом мы экспортируем константу getSelectedCategory , которая получает доступ к нашему
// состоянию
// и экспортируем dischesSlice.reducer
//4. в index.js мы оборачиваем /App в <Provider></Provider> и устанавливаем props store внутри
// и импортируем store и импортируем provider
//5. Filter. js - мы ввели константу selectedCategory 
// и используем хук useSelector() , который нам позволяет читать наше состояние из getSelectedCategory
// //<p className={ selectedCategory === category ? "categoryButtonSelected categoryButton" :  "categoryButton" }>  {category} </p>
// если у нас выбрана определенная категория, то покажи нам это или , если нет - это





function App() {
  return (
    <div className="App">
      <div className='block'>
          <AllCategories />
          <Cart />
      </div>

      <div className='block'>
          <Dishes />
      </div>
      
    </div>
  );
}

export default App;
