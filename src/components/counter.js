
import React from 'react';
import { INCREMENT, DECREMENT } from '../state/reducers/actiontypes';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

export default function Counter () {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={()=> dispatch({type: INCREMENT})}> INCREMENT </button>
            <button onClick={()=> dispatch({type: DECREMENT})}> DECREMENT </button>
        </div>

        
    )
}