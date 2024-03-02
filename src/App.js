import "./App.css";
import Navbar from "./components/Navbar";
import WithdrawDepositComponent from "./components/WithdrawDepositComponent";
import Footerbar from "./components/Footerbar";
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WithdrawDepositComponent />
      <Counter />
      <Footerbar />
    </div>
  );
}

export default App;
