import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../Redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = ()=> {
    if(amount){
      //dispatch amount
      dispatch(incrementByAmount(+amount))
    }else{
      alert('Please enter a valid amount!')
    }
  }

  return (
    <>
      <div className='bg-dark d-flex flex-column justify-content-center align-items-center' style={{height:'100vh'}}>
        <h1 className='text-light mb-5'>Counter App</h1>
        <div className="container border rounded d-flex flex-column align-items-center justify-content-evenly w-75 h-50">
          <h1 style={{fontSize:"100px",color:"white"}}>{count}</h1>
          <div>
            <button onClick={()=>dispatch(decrement())} className="btn btn-danger me-5">DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className="btn btn-warning">RESET</button>
            <button onClick={()=>dispatch(increment())} className="btn btn-success ms-5">INCREMENT</button>
          </div>
          <div className="input-group w-50">
            <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Enter the number to be incremented' className="form-control w-25 bg-light rounded me-2"/>
            <button onClick={handleIncrementAmount} className="btn btn-primary rounded">INCREMENT BY AMOUNT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter