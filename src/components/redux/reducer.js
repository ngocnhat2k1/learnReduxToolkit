const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: []
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case "filters/searchFiltersChange":
            return {
                ...state,
                filters: { ...state.filters, search: action.payload }
            }
        default:
            return state;
    }

}