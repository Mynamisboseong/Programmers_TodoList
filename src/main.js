const data = [
    {
        text : '자바스크립트 공부하기'
    },
    {
        text : '자바스크립트 복습하기'
    }
]

const $app = document.querySelector('.app')

new TodoForm({
    $target: $app,
    onSubmit: (text) => {
        const nextState = [...todoList.state, {
            text
        }]
        todoList.setState(nextState)
    }
})

const todoList = new TodoList({
    $target: $app,
    initialState: data
})