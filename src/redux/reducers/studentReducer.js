const initialState={
    student_name:'Roshan Khatri'
}

const studentReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
            return{
                ...state,
                student_name:action.playload
            }
        
        default:
            return state
    }
    
}
export default studentReducer