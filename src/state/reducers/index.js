import { combineReducers} from 'redux';
import amountReducer from './amountReducer';
import counterReducer from './counterReducer';
import itemReducer from './itemReducer';
import userReducer from './userReducer';


const rooReducers = combineReducers({
    amount: amountReducer,
    counter: counterReducer,
    itemsRed: itemReducer,
    userReducer: userReducer
});

export default rooReducers;