export const FETCH_TRANSACTION = "FETCH_TRANSACTION";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export function transactionReducer(state, action) {
  switch (action.type) {
    case FETCH_TRANSACTION: {
      // ตอนที่ dispath  เข้ามาจะต้องเป็น ({type: FETCH_TRANSACTION,value:{transaction:[state]}})

      return action.value.transactions;
    }
    // case CREATE_TRANSACTION: {
    //   //dispatch({type:CREATE_TRANSACTION,value: {transaction: newTransaction}})
    // }
    case DELETE_TRANSACTION: {
      const idx = state.findIndex((el) => el.id === action.value.id);
      if (idx !== -1) {
        const cloneState = [...state];
        cloneState.splice(idx, 1);
        return cloneState;
      }

      return state;
    }

    default:
      return state;
  }
}
