// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기상태 (초기상태에 따라서 리스트를 그리는 것.)
function TodoList({$target, initialState}) {
    const $todoList = document.createElement('div');
    $target.appendChild($todoList);

    this.state = initialState;

    this.render = () => {
        // this.state = [{ text : '자바스크립트 공부하기}, { text: '....'}] 

        //map을 돈 이후에는 아래처럼 만들어 집니다.
        /*
        * this.state.map(todo => `<li>${todo.text}</li>`)
        *   [{ text : '자바스크립트 공부하기}, { text: '<....'}]
        *   [`<li>자바스크립트 공부하기</li>`,`<li>....</li>`]
        *   join('') => join은 배열을 두 번째 인자를 기준으로 다 붙혀버리는 것이다
        *   <li>자바스크립트 공부하기</li><li>....</li>
        */
        $todoList.innserHTML = `
            <ul>
                 ${this.state.map(({text}) => `<li>${text}</li>`).join('')}
            </ul>
        `
    }

    this.render();

}