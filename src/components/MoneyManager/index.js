import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    initialUserTitle: '',
    initialUserAmount: '',
    transactionList: [],
    initialOptionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({initialUserTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({initialUserAmount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({initialOptionId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {initialUserTitle, initialUserAmount, initialOptionId} = this.state

    const findType = transactionTypeOptions.find(
      each => each.optionId === initialOptionId,
    )

    const {displayText} = findType
    console.log(displayText)
    const newTransaction = {
      id: uuidv4(),
      title: initialUserTitle,
      amount: parseInt(initialUserAmount),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      initialUserTitle: '',
      initialUserAmount: '',
      initialOptionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const trashData = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: trashData})
  }

  getBalance = () => {
    const {transactionList, initialOptionId} = this.state
    let balance = 0
    let income = 0
    let expenses = 0

    transactionList.forEach(each => {
      if (each.optionId === initialOptionId.optionId) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    balance = income - expenses
    return balance
  }

  getIncome = () => {
    const {initialOptionId, transactionList} = this.state
    let income = 0
    transactionList.forEach(each => {
      if (transactionTypeOptions[0].optionId === initialOptionId.optionId) {
        income += each.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {initialOptionId, transactionList} = this.state
    let expenses = 0
    transactionList.forEach(each => {
      if (transactionTypeOptions[1].optionId === initialOptionId.optionId) {
        expenses += each.amount
      }
    })
    return expenses
  }

  render() {
    const {
      initialOptionId,
      initialUserAmount,
      initialUserTitle,
      transactionList,
    } = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()
    return (
      <div className="container">
        <div className="navCard-container">
          <h1 className="person-name">Hi,Richard</h1>
          <p className="bank-description">
            Welcome back to your{' '}
            <span className="bank-description-highlight">Money Manager</span>
          </p>
        </div>
        <ul className="money-display-container">
          <MoneyDetails
            incomeAmount={income}
            expensesAmount={expenses}
            totalAmount={balance}
          />
        </ul>
        <div className="transactions-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="transaction-heading">Add Transaction</h1>

            <label htmlFor="title" className="title">
              TITLE
            </label>
            <input
              type="text"
              onChange={this.onChangeTitle}
              className="title-input"
              value={initialUserTitle}
              id="title"
              placeholder="TITLE"
            />
            <label htmlFor="amount" className="amount">
              AMOUNT
            </label>
            <input
              onChange={this.onChangeAmount}
              type="text"
              value={initialUserAmount}
              className="amount-input"
              placeholder="AMOUNT"
            />
            <label htmlFor="Select" className="select">
              TYPE
            </label>
            <select
              value={initialOptionId}
              onChange={this.onChangeOption}
              className="Select-ele"
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="submit-btn">
              Add
            </button>
          </form>
          <ul className="transaction-history-container">
            <h1 className="history-heading">History</h1>
            <table className="table">
              <tr className="table-data">
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Trash</th>
              </tr>
            </table>
            {transactionList.map(each => (
              <TransactionItem
                eachTransaction={each}
                deleteTransaction={this.deleteTransaction}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
