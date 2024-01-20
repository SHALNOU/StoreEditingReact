import './App.css';
import {Provider} from 'react-redux'
import TodoHeader from "./features/TodoHeader";
import {store} from './components/store'
import TodoList from "./features/TodoList";

function App() {
    return (
        <Provider store={store}>
            <TodoHeader/>
            <TodoList/>
        </Provider>
    );
}

export default App;
