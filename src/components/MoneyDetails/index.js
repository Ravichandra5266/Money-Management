// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount, totalAmount} = props
  return (
    <div className="money-list-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="money-transactions-info">
          <h1 className="balance-text">Your Balance</h1>
          <p className="currency">Rs {totalAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="money-transactions-info">
          <h1 className="balance-text">Your Income</h1>
          <p className="currency">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expense"
          className="img"
        />
        <div className="money-transactions-info">
          <h1 className="balance-text">Your Expenses</h1>
          <p className="currency">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
