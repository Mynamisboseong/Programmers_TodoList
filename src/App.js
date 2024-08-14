function App ({ $target, initialState}) {

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
            todoList.setState(nextState)
        }
    })

    //TodoList 컴포넌트
    const todoList = new TodoList({
        $target,
        initialState 
    })
}