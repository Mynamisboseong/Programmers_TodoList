export default function TodoForm({ $target, onSubmit }) {
    const $form = document.createElement('form')

    $target.appendChild($form)

    let isInit = false

    this.render = () => {
        $form.innerHTML = `
            <input type = "text" name = "todo" />
            <button>Add</button>
        `

        if (!isInit){
                //preventDefault : 태그가 가지고 있는 고유의 기능을 끔. 
                //해당 코드에서는 input form에 텍스트 입력 후 enter를 했을 때 화면이 새로고침되는 것을 막기 위함
                $form.addEventListener('submit', e => {
                    e.preventDefault()
                    
                    const $todo = $form.querySelector('input[name=todo]')
                    const text = $todo.value

                    if (text.length > 1) {
                        $todo.value = ''
                        onSubmit(text)
                    }
                })
                isInit = true
            }
        }

    this.render();
}