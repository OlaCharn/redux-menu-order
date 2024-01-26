//тут будет все про категории
//https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
//Create a Redux State Slice

import { createSlice } from '@reduxjs/toolkit'

//дальше пишем как в примере на сайте
//объяснение по фильтрам:
//в этом документе в reducers мы прописали вариант изменения начального состояния
//это просто щаблон. Он соединяет filteredCategory с другими документами
//мы обязаетельно не забываем его export!
//мы получаем доступ к состоянию вот тут state.selectedCategory = action.payload;
//это настройки прописывания. Это не мы придумали.
//далее передвигаемся в документ Dishes.js ---->


export const dishesSlice = createSlice({
    name: "dishes",
    initialState: {
        selectedCategory: "SEAFOOD"
    },
    reducers: {
        filterCategory: (state, action) =>{
            state.selectedCategory = action.payload; //<--будем менять категорию, прописана 
                                                     //логика в отдельном документе
        }

    }

})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const {filterCategory} = dishesSlice.actions;
export default dishesSlice.reducer;