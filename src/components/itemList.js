import {useState} from 'react'
import { ADD_ITEM, REMOVE_ITEM } from '../state/reducers/actiontypes'
import {useSelector, useDispatch} from 'react-redux';

export const ItemList = () => {
    const items = useSelector(state=>state.itemsRed.items);
    const dispatch= useDispatch();

    const [newItem, setItem] = useState('');

    const handleAddItem= () => {
        dispatch({type: ADD_ITEM, payload: {id:Date.now(), name: newItem}})
        setNewItem('');
    }

    const handleRemoveItem = () => {
        displatch({type: REMOVE_ITEM, payload: itemId})
    }


    return (
        <div>
            <h2> Item List</h2>
            <ul>
                {items.map(item=> {
                    return(<li key= {item.id}>
                        {item.name}
                        <button onClick={()=>{handleRemoveItem(item.id)}}>Remove Items</button>
                        </li>)
                })}
            </ul>
            <div>
                <input type="text"
                    value="{newItem}" onChange={e=>setNewItem(e.target.value)}
                    placeholder='Enter Item Name'/>
                <button onClick={handleAddItem}>Add Items</button>
            </div>
        </div>
    )

}
