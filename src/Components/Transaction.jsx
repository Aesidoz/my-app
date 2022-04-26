function Transaction() {
  return (
    <li className="list-group-item d-flex align-items-center bd-callout-success">
      <div className="d-flex flex-fill" role="button">
        <div className="border border-1 border-dark rounded-2 bg-warning p-2 text-center w-15">
          <p className="p-0 m-0 text-black-50 text-3">Jan 22</p>
          <p className="p-0 m-0">26</p>
        </div>
        <div className="d-flex justify-content-between align-items-center ps-4 flex-fill">
          <div>
            <p className="mb-1 fw-bold">7-11</p>
            <p className="mb-0 text-3 text-blac-50">Food</p>
          </div>
          <span className="badge bg-success">200.00</span>
        </div>
      </div>
    </li>
  );
}

export default Transaction;
