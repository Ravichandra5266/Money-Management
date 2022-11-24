import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {id, title, amount, type} = eachTransaction
  const deleteTrans = () => {
    deleteTransaction(id)
  }
  return (
    <li className="list-container-transaction">
      <table className="table">
        <tr className="table-data">
          <th>{title}</th>
          <th>{amount}</th>
          <th>{type}</th>
          <th>
            <button onClick={deleteTrans} className="delete-btn" type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                alt="delete"
                className="delete-img"
              />
            </button>
          </th>
        </tr>
      </table>
    </li>
  )
}
export default TransactionItem
