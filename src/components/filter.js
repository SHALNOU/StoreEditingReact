import {createSlice} from '@reduxjs/toolkit'

const filterSlice = createSlice({
        name: 'filterState',
        initialState: {
            filter: '',
        },
        reducers: {
            setFilter(state, action) {
                state.filter = action.payload.value;
            }
        },
    }
)

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer