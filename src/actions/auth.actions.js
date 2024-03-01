import axios from 'axios'
import { validateNumber } from '../utils/number-regex'
import { validateEmail } from '../utils/email-regex'
import { validateName } from '../utils/name-regex'
import { validatePassword } from '../utils/password.-regex'

export const setAuthModal = () => {

    return dispatch => {
        dispatch({
            type: "MODAL"
        })
    }

}

export const setLogoutModal = () => {

    return dispatch => {
        dispatch({
            type: "LOGOUT_MODAL"
        })
    }

}


export const setSelectedTabLogin = () => {
    return dispatch => {
        dispatch({
            type: "TAB_LOGIN",
            payload: "login"
        })
    }
}

export const setSelectedTabSignup = () => {
    return (dispatch) => {
        dispatch({
            type: "TAB_SIGNUP",
            payload: "signup"
        })
    }
}

export const setMobileNumber = (number) => {
    return (dispatch) => {
        const isNumberValid = validateNumber(number);
        if (isNumberValid) {
            dispatch({
                type: "SET_NUMBER",
                payload: number
            });
        } else {
            console.log("invalid number");
        }
    };
};

export const setEmail = (email) => {
    return (dispatch) => {
        const isEmailValid = validateEmail(email);
        if (isEmailValid) {
            dispatch({
                type: "SET_EMAIL",
                payload: email
            });
        } else {
            console.log("Invalid email");
        }
    };
};

export const setName = (name) => {
    return (dispatch) => {
        const isNameValid = validateName(name);
        if (isNameValid) {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        } else {
            console.log("Invalid name");
        }
    };
};

export const setPassword = (password) => {
    return (dispatch) => {
        const isPasswordValid = validatePassword(password);
        if (isPasswordValid) {
            dispatch({
                type: "SET_PASSWORD",
                payload: password
            });
        } else {
            console.log("Invalid password");
        }
    };
};

export const setConfirmPassword = (password) => {
    return (dispatch) => {
        const isPasswordValid = validatePassword(password);
        if (isPasswordValid) {
            dispatch({
                type: "CONFIRM_PASSWORD",
                payload: password
            });
        } else {
            console.log("Invalid password");
        }
    };
};

export const clearUserData=()=>{
    return dispatch=>{
        dispatch({
            type:"CLEAR_ALL"
        })
    }
}
export const removeToken=()=>{
    return dispatch=>{
        dispatch({
            type:"REMOVE_TOKEN"
        })
    }
}
export const addToast=()=>{
    return dispatch=>{
        dispatch({
            type:"ADD_TOAST"
        })
    }
}
export const removeToast=()=>{
    return dispatch=>{
        dispatch({
            type:"REMOVE_TOAST"
        })
    }
}


