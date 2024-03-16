const authState = {};

export const authReducer = (state = authState, action) =>{
    switch (action.type) {
        case "GET_A":
            return state
        default:
            return state;
    }
}