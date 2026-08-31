function getNextId(state) {
    if(state.length === 0) return 0
    let maxId = state.reduce((maxId, stateItem) => Math.max(stateItem.id, maxId), -1)
    return maxId + 1
}

export function reducer(state, action) {
    switch (action.type) {
        case "TASK_ADDED":
            return [
                ...state,
                {
                    id: getNextId(state),
                    text: action.payload,
                    completed:false
                }
            ]
        
        case "TASK_TOGGLED":
            return state.map(stateItem => {
                if (stateItem.id !== action.payload) {
                    return stateItem
                }

                return {
                    ...stateItem,
                    completed: !stateItem.completed
                }
            })
        
        case "TASK_DELETED":
            return state.filter(stateItem => stateItem.id !== action.payload)
        
        case "CLEAR_TASKS":
            console.log("clearing tasks...")
            return []
        
        case "TASK_UPDATE":
            console.log("editing task")
            return state.map(stateItem => {
                if (stateItem.id !== action.payload.id) {
                    return stateItem
                }

                return {
                    ...stateItem,
                    text: action.payload.text
                }
            })
    
        default:
            break;
    }
}