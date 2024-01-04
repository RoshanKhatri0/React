import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_REQUEST } from "../constants/productConstant";
import axios from "axios";

export const fetchProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:FETCH_PRODUCT_REQUEST})
        const {data}=await axios.get(`https://fakestoreapi.com/products`)
        dispatch({
            type:FETCH_PRODUCT_SUCCESS,
            playload:data
        })
    }
    catch(error){
        dispatch({
            type:FETCH_PRODUCT_FAILURE,
            playload:error.message
        })
    }
}