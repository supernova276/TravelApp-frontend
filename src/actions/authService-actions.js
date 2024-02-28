import axios from 'axios'
import { validateEmail } from "../utils/email-regex";
import { validateName } from "../utils/name-regex";
import { validateNumber } from "../utils/number-regex";
import { validatePassword } from "../utils/password.-regex";
const BASE_URL = process.env.REACT_APP_BASE_URL

let isValidEmail,isValidName,isValidPassword,isValidNumber,isValidConfirmPass;

export const signupHandler= (number, name, email, password, confirmPassword) => {
    return async (dispatch) => {
         isValidEmail = validateEmail(email);
         isValidName = validateName(name);
         isValidPassword = validatePassword(password);
         isValidNumber = validateNumber(number);
         isValidConfirmPass = validatePassword(confirmPassword);
       
        console.log(isValidPassword,isValidNumber,isValidConfirmPass,isValidName)

        if (isValidEmail && isValidName && isValidNumber && isValidPassword && isValidConfirmPass) {
            try {

            const SLUG = `/travelApp/api/v1/signup`
            const URL = BASE_URL + SLUG

                const { data: { accessToken }, status } = await axios.post(URL, {
                    name: name,
                    password: password,
                    email: email,
                    number: number,
                    userType:"CUSTOMER"
                });

                if (status === 200) {
                    localStorage.setItem('accessToken', accessToken);
                }
            } catch (err) {
                alert('Please check the credentials, the user might already exist');
                console.log(err);
            }
        } else {
            alert("Invalid credentials");
        }
    };
};

export const LoginHandler=(number,password)=>{

    return async (dispatch) => {
        isValidPassword = validatePassword(password);
        isValidNumber = validateNumber(number);
    
       console.log(isValidPassword,isValidNumber)

       if ( isValidNumber && isValidPassword) {
           try {

           const SLUG = `/travelApp/api/v1/login`
           const URL = BASE_URL + SLUG

               const { data: { accesstoken }, status } = await axios.post(URL, {
                  number:number,
                   password: password,
               });

               if (status === 200) {
                    console.log(accesstoken)
                   localStorage.setItem('accessToken', accesstoken)
                   return accesstoken
               }
           } catch (err) {
               alert('some error occured');
               console.log(err);
               return null;
           }
       } else {
           alert("Invalid credentials");
           return null
       }
   };
}