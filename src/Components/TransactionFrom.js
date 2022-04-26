function TransactionForm() {
  return (
    <div className="border bg-white rounded-2 p-3">
      <form className="row g-3" action="">
        <div className="col-6">
          {/* -------------------------------------Expense------------------------------------- */}

          <input
            type="radio"
            className="btn-check"
            id="cbx-expense"
            name="type"
            defaultChecked
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
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
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
