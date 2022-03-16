const intial = [];

const reducer = (state = intial, action) => {
    console.log(action);
    switch (action.type) {
        case "addExpense":
            return [...state, action.payload];
        case "delete":
            return state.filter((state) => state.id !== action.payload);
        case "edit":
            return state.map((state) =>
                state.id === action.payload.id ? action.payload : state
            );
        default:
            return state;
    }
};
export default reducer;
