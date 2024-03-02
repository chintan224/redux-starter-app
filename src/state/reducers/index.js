import { combineReducers} from 'redux';
import amountReducer from './amountReducer';
import counterReducer from './counterReducer';


const rooReducers = combineReducers({
    amount: amountReducer,
    counter: counterReducer,
    // item: itemReducer,
    // user: userReducer
});

export default rooReducers;