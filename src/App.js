//import 구문은 항상 구문의 최상위에 있어야 한다.
import Header from './Header.js'
import TodoForm from './TodoForm.js'
import TodoList from './Todolist.js'
import { setItem } from './storage.js' 

export default function App ({ $target, initialState}) {

    //App은 컴포넌트를 만든다.

    //Headeer 컴포넌트 
    new Header({$target,
        text: 'Simple Todo List'
    })
    
    //TodoForm 컴포넌트
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, {
                text
            }]
            //'state'를 업데이트 하는 부분
            todoList.setState(nextState)

            //localStorage.setItem으로 다음 nextState를 넣어주는 것
            setItem('todos',JSON.stringify(nextState))
        }
    })

    //TodoList 컴포넌트
    const todoList = new TodoList({
        $target,
        initialState 
    })
}