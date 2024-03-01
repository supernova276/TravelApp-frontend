import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getHotels = (category) => {

    return async (dispatch) => {

        try {
            const SLUG = category ? `/travelApp/api/v1/hotels?category=${category}` : `/travelApp/api/v1/hotels`
            const URL = BASE_URL + SLUG
            const { data } = await axios.get(URL)
            dispatch({
                type: "GET_HOTEL_BY_CATEGORY",
                payload: data
            })
            dispatch({
                type: "GET_FIRST_16_HOTEL",
                payload: data ? data.slice(0, 16) : []
            })

        }
        catch (err) {
            console.log(err)
        }
    }

}

export const getCategories = () => {

    return async (dispatch) => {
        try {
            const SLUG = "/travelApp/api/v1/categories"
            const URL = BASE_URL + SLUG

            const { data } = await axios.get(URL)
            dispatch({
                type: "GET_CATEGORIES",
                payload: data
            })

            dispatch({
                type:"GET_FIRST_10_CATEGORIES",
                payload: data?data.slice(0,10):[]
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const getHotelById = (id) => {

    return async (dispatch) => {
        try {
            const SLUG = `/travelApp/api/v1/hotels/${id}`
            const URL = BASE_URL + SLUG

            const { data } = await axios.get(URL)

           
            dispatch({

                type: "GET_HOTEL_BY_ID",
                payload: data
            })
        }
        catch (err) {
            console.log(err)
        }
    }

}



