import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'


const todosSlice = createSlice({
        name: 'todosState',
        initialState: {
            todos: [],
            edit: 0,
        },
        reducers: {
            todoAdded(state, action) {
                state.todos.push({
                    id: uuidv4(),
                    text: action.payload.text,
                    price: action.payload.price,
                })
            },
            todoRemoved(state, action) {
                const index = state.todos.findIndex(element => element.id === action.payload.id)
                state.todos.splice(index, 1)
            },
            todoEdit(state, action) {
                state.edit = action.payload.id
            },
            todoChange(state, action) {
                const todo = state.todos.find(element => element.id === action.payload.id)
                todo.text = action.payload.text;
                todo.price = action.payload.price;
            },
        }
    }
)

export const {todoAdded, todoRemoved, todoEdit, todoChange} = todosSlice.actions
export default todosSlice.reducer