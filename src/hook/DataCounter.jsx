import React, {useReducer} from 'react'
import Memo from './Memo'

// define the intial state
const initialState={
    count: 1
}
const reducer = (state, action) =>{
    switch (action.type){
        case 'Increment':
            return{
                count:state.count+1
            }
            default:
                return state
    }
}

const DataCounter = () => {
    //useReducer returns the current state and a dispatch function
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
        <h2>{state.count}</h2>
        <button className='btn btn-primary' onClick={()=>dispatch({type:'Increment'})}>Increment</button>
        <Memo/>
    </>
  )
}

export default DataCounter