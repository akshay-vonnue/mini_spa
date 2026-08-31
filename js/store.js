export function createStore(initialState,reducer) {
    let state = initialState
    let listeners = []

    function getState() {
        return state
    }

    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
        console.log("inside dispatch...")
        console.log(state)
        return state
    }

    function subscribe(listener) {
        listeners.push(listener)
        return () => {
            let index = listeners.indexOf(listener)
            listeners.splice(index,1)
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}