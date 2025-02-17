import { authActions } from "./actions";

const initialState = {
    isAuthenticated: !!localStorage.getItem("token"), 
    user: null,  
    token: localStorage.getItem("token") || null  
};



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActions.LOGINSUCCESS:
            localStorage.setItem("token", action.payload.token);  // Store token in localStorage
            console.log(action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.username,
                token: action.payload.token
            };

        case authActions.LOGOUT:
            localStorage.removeItem("token"); 
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            };

        default:
            return state;
    }
};

export default authReducer;
