import {createStore, combineReducers} from 'redux';
import {v1 as uuid} from 'uuid';


// ADD_EXPENSE
const addExpense = ({desc = '', note = '', amount = 0, createdAt = 0} = {}) =>({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    desc,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET TEXT FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT BY AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  
})
// SORT BY DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  
})
// SET START DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})
// SET END DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})

// expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id
      })
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {...expense, ...action.updates}
        }else{
          return updates //expense
        }
      })
    default:
      return state;
  }
}
// filter reducer
const filterReducerDefaultState = {text : '',sortBy : 'date', startDate: undefined, endDate: undefined}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state, 
        text: action.text
      }
      case 'SORT_BY_AMOUNT':
        return {...state,
          sortBy: 'amount'}
      case 'SORT_BY_DATE':
        return {...state,
          sortBy: 'date'}
      case 'SET_START_DATE':
        return {...state,
          startDate: action.date}
      case 'SET_END_DATE':
        return {...state,
          endDate: action.date}
    default:
      return state
    
  }
}


// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase()) 


    // figure out if expenses.desc has text variabel string inside
    // convert both strings to lowercase
    
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1
    }
    else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1
    }
  })
  
}

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
)

store.subscribe(()=>{
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})
// add expense
const expenseOne = store.dispatch(addExpense({ desc : 'Rent', amount : '100', createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({desc : 'school fees', amount : '1030', createdAt: -1000}))

// remove Expense
// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// edit expense
// store.dispatch(editExpense(expenseTwo.expense.id{amount: 1030}))

// set text filter
store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

// sortBy
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// setStartDate
store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())

// setEndDate
// store.dispatch(setEndDate(1240))

  
const demoState = {
  expenses: [{
    id: 'fgh',
    desc: 'Jan Rent',
    note: 'this was final payment for address',
    amount: 55000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //amount or date
    startDate: undefined,
    endDate: undefined
  }
}
