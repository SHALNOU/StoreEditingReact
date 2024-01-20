import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded, todoEdit, todoChange } from '../components/badges'
import { setFilter } from '../components/filter'

export default function TodoHeader() {
    const [serviceState, setServiceState] = useState('')
    const [priceState, setPriceState] = useState(0)

    const dispatch = useDispatch();
    const todoEditID = useSelector((store) => store.todosStore.edit)
    const todos = useSelector((store) => store.todosStore.todos)

    let timeoutID = undefined;

    useEffect(() => {
        if (todoEditID === 0) {
            return
        }
        const todo = todos.find((e) => e.id === todoEditID)
        setServiceState(todo.text)
        setPriceState(todo.price)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todoEditID])


    const onSave = (e) => {
        e.preventDefault()
        const payload = { text: serviceState, price: priceState, id: todoEditID }
        dispatch(todoEditID === 0 ? todoAdded(payload) : todoChange(payload))
        if (todoEditID !== 0) {
            dispatch(todoEdit({ id: 0 }))
        }
        setServiceState('')
        setPriceState(0)
    }

    const onCancel = (e) => {
        e.preventDefault()
        dispatch(todoEdit({ id: 0 }))
        setServiceState('')
        setPriceState(0)
    }

    const filterChange = (e) => {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            dispatch(setFilter({ value: e.target.value }))
        }, 1000)
    }

    return (
        <>
            <form>
                <input value={serviceState} type={'text'} name={'service_input'} placeholder="Наименование"
                    onChange={(e) => setServiceState(e.target.value)} />
                <input value={priceState} type={'text'} name={'price_input'}
                    onChange={(e) => setPriceState(Number(e.target.value))} />
                <input type={'text'} name={'filter_input'} placeholder="Поиск"
                    onChange={filterChange} />
                <button onClick={onSave}>Save</button>
                {todoEditID !== 0 && <button onClick={onCancel}>Cancel</button>}
            </form>
        </>
    )
}