import axios from "axios"

const BASE_URL=process.env.REACT_APP_BASE_URL

 export const getHotels=async(category)=>{

    const SLUG= category?`/travelApp/api/v1/hotels?category=${category}`:`/travelApp/api/v1/hotels`
    console.log(SLUG)
    const URL=BASE_URL+SLUG
    return axios.get(URL)

}

export const getCategories=async()=>{

    const SLUG= "/travelApp/api/v1/categories"
    const URL=BASE_URL+SLUG

    return axios.get(URL)
}