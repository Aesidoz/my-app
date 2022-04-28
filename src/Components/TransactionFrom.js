import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { TransactionContext } from "../contexts/TransactionContext";
import TransactionAction from "../pages/TransactionAction";
import { DELETE_TRANSACTION } from "../reducers/transactionReducer";

const INCOME = "INCOME";
const EXPENSE = "EXPENSE";

function TransactionForm() {
  const [transaction, setTransaction] = useState({});
  const [notFoundError, setNotFoundErroe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState(EXPENSE);
  const [payeeInput, seetPayeeInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const { dispatch } = useContext(TransactionContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.transactionId) {
      axios
        .get("http://localhost:8080/transactions/" + params.transactionId)
        .then((res) => {
          if (res.data.transaction === null) {
            setNotFoundErroe(true);
          } else {
            setTransaction(res.data.transaction);
          }
          setTransaction(res.data.transaction);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.transactionId]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get("http://localhost:8080/categories");
      setCategories(res.data.categories);
      console.log(res.data.categories);
    };

    fetchCategory();
  }, []);

  const location = useLocation();
  console.log(location);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    

    navigate("/home");
  };

  const handleClickDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(
        "http://localhost:8080/transactions/" + params.transactionId
      );
      dispatch({
        type: DELETE_TRANSACTION,
        value: { id: params.transactionId },
      });
      setLoading(false);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  // FilterCategory
  const FilterCategories = categories.filter((el) => el.type === categoryType);
  // const FilterCategories = categories.filter((el) => el.type === EXPENSE);

  if (notFoundError)
    return <h1 className="text-white">404 !!! Transaction is not found</h1>;

  return (
    <>
      <div className="border bg-white rounded-2 p-3">
        <form className="row g-3" onSubmit={handleSubmitForm}>
          <div className="col-6">
            {/* -------------------------------------Expense------------------------------------- */}

            <input
              type="radio"
              className="btn-check"
              id="cbx-expense"
              name="type"
              defaultChecked
              onChange={() => setCategoryType(EXPENSE)}
            />
            <label
              className="btn btn-outline-danger rounded-0 rounded-start"
              htmlFor="cbx-expense"
            >
              Expense
            </label>

            {/* -------------------------------------Income------------------------------------- */}

            <input
              type="radio"
              className="btn-check"
              id="cbx-income"
              name="type"
              onChange={() => setCategoryType(INCOME)}
            />
            <label
              className="btn btn-outline-success rounded-0 rounded-end"
              htmlFor="cbx-income"
            >
              Income
            </label>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <i className="fa-solid fa-xmark" role="button"></i>
          </div>

          {/* -------------------------------------Form------------------------------------- */}

          <div className="col-sm-6">
            <label className="form-label">Payee</label>
            <input className="form-control" type="text" />
          </div>

          {/* ------------Category------------------- */}

          <div className="col-sm-6">
            <label className="form-label">Category</label>
            <select className="form-select">
              {FilterCategories.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>

          {/* ------------Amount------------------- */}

          <div className="col-sm-6">
            <label className="form-label">Amount</label>
            <input className="form-control" type="text" />
          </div>

          {/* ------------Date------------------- */}

          <div className="col-sm-6">
            <label className="form-label">Date</label>
            <input className="form-control" type="date" />
          </div>

          {/* -------------------------------------Save------------------------------------- */}

          <div className="col-12">
            <div className="d-grid mt-3">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
      {/* -------------------------------------Delete------------------------------------- */}
      {params.transactionId && ( // ถ้าเป็น true  จะ render  เป็น button  เเต่ถ้าไม่  จะ render param
        <div className="d-grid mt-5">
          <button
            className="btn btn-danger"
            onClick={handleClickDelete}
            disabled={loading}
          >
            Delete Transaction
          </button>
        </div>
      )}
    </>
  );
}

export default TransactionForm;

// import React from "react";

// function TransactionFrom() {
//   return (
//     <div className="border bg-white rounded-2 p-3">
//       <form className="row g-3">
//         <div className="col-6">
//           <input
//             type="radio"
//             className="btn-check"
//             id="cbx-income"
//             name="type"
//             defaultChecked
//           />
//           <label
//             className="btn btn-outline-danger rounded-0 rounded-start"
//             htmlFor="cbx-expense"
//           >
//             Expense
//           </label>
//           <input
//             type="radio"
//             className="btn-check"
//             id="cbx-income"
//             name="type"
//           />
//           <label
//             className="btn btn-outline-success rounded-0 rounded-end"
//             htmlFor="cbx-income"
//           >
//             Income
//           </label>

//           <div className="col-6 d-flex justify-content-end">
//             <i className="fa-solid fa-xmark" role="button" />
//           </div>

//           <div className="col-sm-6">
//             <label className="form-label">Payee</label>
//             <input className="form-control" type="text" />
//           </div>
//           <div className="col-sm-6">
//             <label className="form-label">Catorogy</label>
//             <select className="form-select">
//               <option>Food</option>
//               <option>Transport</option>
//             </select>
//           </div>
//           <div className="col-sm-6">
//             <label className="form-label">Amount</label>
//             <input className="form-control" type="text" />
//           </div>

//           <div className="col-sm-6">
//             <label className="form-label">Date</label>
//             <input className="form-control" type="fate" />
//           </div>

//           <div className="col-12">
//             <div className="d-grid mt-3">
//               <button className="btn btn-primary">Save</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TransactionFrom;
