import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import { TransactionContextProvider } from "./contexts/TransactionContext";
import Home from "./pages/Home";
import TransactionAction from "./pages/TransactionAction";

function App() {
  return (
    <TransactionContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<TransactionAction />} />
          <Route
            path="transaction/:transactionId"
            element={<TransactionAction />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route
            index
            // element={<div className="text-white">This is Default Page</div>}
            element={<Navigate to="/home" />}
          />
        </Route>
      </Routes>
    </TransactionContextProvider>
  );
}

export default App;
