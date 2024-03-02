import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const UserData = () => {
    const item = useSelector(state=>state.userReducer.user);
    const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');

    const login=() => {
        dispatch({type:"SUCCESS", payload: {id:Date.now(), name: newItem}})
        setNewItem();
    }

    return (
        <div>
            <h2>User Data</h2>
            <div>
                <input type="text"
                    value={newItem} onChange={e=>setNewItem(e.target.value)}
                    placeholder="Enter user name"/>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
        </div>
    )

}

export default UserData;