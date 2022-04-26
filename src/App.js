import Header from "./Components/Header";
import Transaction from "./Components/Transaction";
import TransactionList from "./Components/TransactionList";
import TransactionFrom from "./Components/TransactionFrom";
function App() {
  return (
    <div>
      <Header />
      <TransactionFrom />
      <TransactionList />
    </div>
  );
}

export default App;
