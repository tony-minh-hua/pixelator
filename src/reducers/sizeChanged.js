const sizeReducer = (state = 30, action) => {
    switch (action.type) {
        case "SIZE_INCREASED":
            return state + action.payload;
        case "SIZE_DECREASED":
            return state - action.payload;
        default:
            return state;
    }
};

export default sizeReducer;