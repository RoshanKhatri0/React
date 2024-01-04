import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_REQUEST } from "../constants/productConstant";

const initialState={
    products:[],
    error:null
}

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
            return{
                ...state
            }
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                products:action.playload
            }
        case FETCH_PRODUCT_FAILURE:
            return{
                ...state,
                error:action.playload
            }
        default:
            return state
        
    }
}

export default productReducer