import "./App.css";
import Navbar from "./components/Navbar";
import WithdrawDepositComponent from "./components/WithdrawDepositComponent";
import Footerbar from "./components/Footerbar";
import Counter from './components/counter.js';
import ItemList from "./components/itemList.js";
import UserData  from "./components/usersData.js";
import { withdrawMoney } from "./state/action-creators/index.js";
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ul className='nav'>
        <li className='nav-item'>
            <Link className='nav-link' to='/counter'>Counter</Link>
            <Link className='nav-link' to='/itemlist'>Item List</Link>
            <Link className='nav-link' to='/userlist'>User List</Link>
            <Link className='nav-link' to="/withdrawMoney">Withdraw Money</Link>
        </li>
        <Routes>
            <Route exact path='/' element={<Counter />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
            <Route path='/itemlist' element={<ItemList />}></Route>
            <Route path='/userlist' element={<UserData />}></Route>
            <Route path='/withdrawMoney' element={<WithdrawDepositComponent/>}></Route> 
        </Routes>
    </ul>
 </BrowserRouter>
  );
}

export default App;
