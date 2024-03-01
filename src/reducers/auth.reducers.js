const initalState={
    // token:null,
    isAuthModalOpen:false,
    isLogoutModalOpen:false,
    name:"",
    number:"",
    email:"",
    password:"",
    confirmPassword:"",
    selectedTab:"login",
    token:"",
    addToast:false,
    removeToast:true

}

export const authReducer=(state=initalState,action)=>{

    const{type,payload}=action;
    
    switch(type){

        case "MODAL":
            return{
                ...state,
                isAuthModalOpen:!state.isAuthModalOpen
            }
        case "LOGOUT_MODAL":
            return{
                ...state,
                isLogoutModalOpen:!state.isLogoutModalOpen
            }

        case "TAB_LOGIN":
            return{
                ...state,
                selectedTab:"login"
            }

            case "TAB_SIGNUP":
                return{
                    ...state,
                    selectedTab:"signup"
                }

            case "SET_NUMBER":
                return{
                    ...state,
                    number:payload
                }
            case "SET_PASSWORD":
                return{
                    ...state,
                    password:payload
                }
            case "SET_EMAIL":
                return{
                    ...state,
                    email:payload
                }
            case "SET_NAME":
                return{
                    ...state,
                    name:payload
                }
            case "CONFIRM_PASSWORD":
                return{
                    ...state,
                    confirmPassword:payload
                }

        case "CLEAR_ALL":
            return {
                ...state,
                name: "",
                number: "",
                email: "",
                password: "", 
                addToast:false,
                // removeToast:false 
                }

        case "SET_TOKEN":
            return{
                ...state,
                token:payload
            }
        case "REMOVE_TOKEN":
            return{
                ...state,
                token:""
            }
        case "ADD_TOAST":
            return{
                ...state,
                addToast:true
            }
        case "REMOVE_TOAST":
            return{
                ...state,
                 removeToast:!state.removeToast
            }

        default:return state
    }
}