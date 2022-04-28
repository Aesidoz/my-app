import { useParams } from "react-router-dom";
import TransactionForm from "../Components/TransactionFrom";
function TransactionAction() {
  const params = useParams();
  console.log(params);
  return <TransactionForm />;
}
export default TransactionAction;
