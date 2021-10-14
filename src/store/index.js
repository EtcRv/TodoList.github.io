import { configureStore, createSlice } from "@reduxjs/toolkit";

const listOfData = createSlice({
    name: 'todolist',
    initialState:{
        lists: [],
        totalWork: 0,
    },
    reducers: {
        addWorkToList(state, action) {
            const newItem = action.payload;
            state.lists.push({id: newItem.id, value: newItem.value})
            state.totalWork +=1;
        },
        removeWorkToList(state, action) {
            const id = action.payload;
            state.lists = state.lists.filter(list => list.id !== id )
            state.totalWork --;
        },
        removeAllWork(state) {
            state.lists = [];
            state.totalWork =0;
        }
    }
})

const store = configureStore({
    reducer: {todolist: listOfData.reducer}
});

export const listActions = listOfData.actions;

export default store;