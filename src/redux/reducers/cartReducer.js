const initialState={
    cartCount:0
}

const cartReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'Add_to_cart':
            return{
                cartCount:++state.cartCount
            }
        case 'remove_from_cart':
            return{
                cartCount:--state.cartCount
            }
        default:
            return state
    }
    
}
export default cartReducer