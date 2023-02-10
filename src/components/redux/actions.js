export const addTodoAction = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    }

}
export const searchFiltersChange = (data) => {
    return {
        type: "filters/searchFiltersChange",
        payload: data,
    }
}