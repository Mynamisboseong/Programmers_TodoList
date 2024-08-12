// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기상태 (초기상태에 따라서 리스트를 그리는 것.)
function TodoList(params) {
    const $todoList = document.createElement('div');
    const $target = params.$target;
    $target.appendChild($todoList);

    this.state = params.initialState;
    this.render = () => {
        let html = ''

        for(let i = 0; i < this.state.length; i++) {
            html += `<li>${this.state[i].text}</li>`
        }
        html = `<ul>${html}</ul>`

        $todoList.innerHTML = html;
    }

}