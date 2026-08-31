import { store } from "../js/main.js";
import { Button } from "./button.js";

export function Card(id,text) {
    let p = document.createElement("p")
    p.innerText = text
    // listener for detail page
    p.addEventListener('click', () => {
        router.navigate(`/detail/${id}`)
    })
    let isCompletedBox = document.createElement("input")
    isCompletedBox.setAttribute("type", "checkbox")
    // listener for isComplete
    isCompletedBox.addEventListener("change", () => {
        store.dispatch({type:'TASK_TOGGLED',payload:id})
    })
    // delete button
    const deleteBtn = Button("delete", () => {
        store.dispatch({type:'TASK_DELETED',payload:id})
    })
    
    let todoWrapper = document.createElement("div")
    
    todoWrapper.classList.add('todo-wrapper')
    todoWrapper.appendChild(p)
    todoWrapper.append(isCompletedBox)
    todoWrapper.append(deleteBtn)

    return todoWrapper
}