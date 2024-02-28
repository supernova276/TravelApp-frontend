const initalState={
    // token:null,
    isAuthModalOpen:false,
    name:"",
    number:"",
    email:"",
    password:"",
    confirmPassword:"",
    selectedTab:"login",
    token:""

}

export const authReducer=(state=initalState,action)=>{

    const{type,payload}=action;
    
    switch(type){

        case "MODAL":
            return{
                ...state,
                isAuthModalOpen:!state.isAuthModalOpen
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
                    
                }

        case "SET_TOKEN":
            return{
                ...state,
                token:payload
            }

        default:return state
    }
}