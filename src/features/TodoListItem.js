import { useDispatch } from "react-redux";
import { todoRemoved, todoEdit } from '../components/badges'

export default function TodoListItem({ todo }) {
    const dispatch = useDispatch();

    const removedClick = () => {
        dispatch(todoRemoved({ id: todo.id }))
    }

    const editClick = () => {
        dispatch(todoEdit({ id: todo.id }))
    }

    return (
        <>
            <div className={'todo'}>
                <div className='todo-text'>{todo.text}</div>
                <div className='todo-price'>{todo.price}</div>
                <button onClick={removedClick} className={'button-removed'}>X</button>
                <button onClick={editClick} className={'button-edit'}>&#9998;</button>
            </div>
        </>
    )

}