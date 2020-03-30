const colorReducer = (state = null, action) => {
    switch (action.type) {
        case "COLOR_PICKED":
            return action.payload;
        default:
            return state;
    }
};

export default colorReducer;