const colorReducer = (state = null, action) => {
    switch (action.type) {
        case "COLOR_PICKED":
            return action.payload;
            break;
    }
    return state;
};

export default colorReducer;