import React from 'react'
import { useDispatch } from 'react-redux'

const TestItem = () => {
    const dispatch = useDispatch()

    const addItem =()=>(
        dispatch({type:'Add_to_cart'})
    )
    const removeItem =()=>(
        dispatch({type:'remove_from_cart'})
    )
  return (
    <>
        <div className="container">
            <div className="d-flex justify-content-center">
                <button className='btn btn-primary' onClick={addItem}>Add</button>
                &nbsp;&nbsp;
                <div className="btn btn-danger" onClick={removeItem}>Remove</div>
            </div>
        </div>
    </>
  )
}

export default TestItem