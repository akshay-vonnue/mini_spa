import { store } from "../js/main.js"

export function Modal(type,id = null) {
    console.log("modal...")

    const modal = document.createElement("div")
    modal.classList.add("modal")

    modal.innerHTML = `
        <form class="modal-form">
            <label for="task">task</label>
            <input type="text" id="task" required name="task">
            <button>
                ${type === 'edit' ? 'Submit' : 'Add'}
            </button>
        </form>
    `;


    const form = modal.querySelector(".modal-form")
    const formInput = modal.querySelector("#task")

    form.addEventListener("submit", (e) => {
        console.log("clicked form button...")
        e.preventDefault()
        const text = formInput.value.trim()

        if(!text) return

        if (type === 'edit') {
            console.log("calling edit dispatch")
            store.dispatch({ type: 'TASK_UPDATE', payload: { id,text} })
        }
        if (type === 'add') {
            console.log("calling add dispatch")
            store.dispatch({ type: 'TASK_ADDED', payload: text })
        }
        modal.remove()
    })


    // event listeners
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          modal.remove();
        }
    });

    return modal
}