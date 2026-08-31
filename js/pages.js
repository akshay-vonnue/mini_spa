import { Button } from "../components/button.js"
import { Card } from "../components/card.js"
import { Modal } from "../components/modal.js"

let app = document.querySelector(".app")
console.log(app)



export function renderHomePage() {
    console.log("rendering home..")
    app.replaceChildren()

    let heading = document.createElement("h1")
    heading.innerText = 'TASK MANAGER';

    app.appendChild(heading)
}

export function renderListPage(store,router) {
    console.log("rendering list..")
    app.replaceChildren()

    let openModalBtn = Button("Add",() => {
        console.log("modal button clicked")

        let modalCard = Modal('add');
        document.body.appendChild(modalCard)

    })

    app.appendChild(openModalBtn)


    let todoTasks = document.createElement("div")
    todoTasks.innerText = 'TODO'
    let completedTasks = document.createElement("div")
    completedTasks.innerText = 'COMPLETED'
    
    let state = store.getState()
    state.forEach(stateItem => {
        let taskCard = Card(stateItem.id, stateItem.text)

        if (stateItem.completed) {
            completedTasks.appendChild(taskCard)
        } else {
            todoTasks.appendChild(taskCard)
        }
        
        // let p = document.createElement("p")
        // p.innerText = stateItem.text
        // // listener for detail page
        // p.addEventListener('click', () => {
        //     router.navigate(`/detail/${stateItem.id}`)
        // })

        // let isCompletedBox = document.createElement("input")
        // isCompletedBox.setAttribute("type", "checkbox")
        // // listener for isComplete
        // isCompletedBox.addEventListener("change", () => {
        //     store.dispatch({type:'TASK_TOGGLED',payload:stateItem.id})
        // })
        
        // let todoWrapper = document.createElement("div")
        
        // todoWrapper.classList.add('todo-wrapper')
        // todoWrapper.appendChild(p)
        // todoWrapper.append(isCompletedBox)

        // if (stateItem.completed) {
        //     completedTasks.appendChild(todoWrapper)
        // } else {
        //     todoTasks.appendChild(todoWrapper)
        // }
    });

    app.appendChild(todoTasks)
    app.appendChild(completedTasks)
}

export function renderSettingsPage(store) {
    console.log("rendering settings..")
    app.replaceChildren()

    let clearAllBtn = Button(
        "Clear all tasks",
        () => store.dispatch({type:'CLEAR_TASKS'})
    )

    app.appendChild(clearAllBtn)
}

export function renderDetailPage(todoId) {
    console.log("rendering todo with id:", todoId)
    app.replaceChildren()
}