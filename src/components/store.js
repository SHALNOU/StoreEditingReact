import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './badges'
import filterReducer from './filter'

export const store = configureStore({
    reducer: {
        todosStore: todosReducer,
        filterStore: filterReducer,
    }
})