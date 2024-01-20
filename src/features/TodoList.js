import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";


export default function TodoList() {
    const todos = useSelector((store) => store.todosStore.todos)
    const filter = useSelector((store) => store.filterStore.filter)

    // eslint-disable-next-line array-callback-return
    const renderedListItems = todos.map((todo) => {
        if (filter === '') {
            return <TodoListItem key={todo.id} todo={todo} />
        }
        if (todo.text.toLowerCase().includes(filter.toLowerCase())) {
            return <TodoListItem key={todo.id} todo={todo} />
        }
    })

    return (renderedListItems)
}