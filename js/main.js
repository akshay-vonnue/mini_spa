import { createRouter } from './router.js'
import { renderHomePage, renderListPage, renderDetailPage, renderSettingsPage } from './pages.js'
import { createStore } from './store.js'
import { reducer } from './reducer.js'


const initialState = [
    {
        id: 0,
        text: 'wake up',
        completed: false
    },
    {
        id: 1,
        text: 'GYM',
        completed:false
    }
]

let router = createRouter()
export let store = createStore(initialState, reducer);


router.register("/home", renderHomePage)
router.register("/list", ()=>renderListPage(store,router))
router.register("/detail/:id", renderDetailPage)
router.register("/settings", ()=>renderSettingsPage(store))

document.querySelectorAll("[data-path]").forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        let pathName = element.getAttribute('data-path')
        router.navigate(pathName)
    })
})

// subscribes
store.subscribe(() => {
    let state = store.getState()
    console.log(state)
    router.route()
})
