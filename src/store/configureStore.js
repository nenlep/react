import { createStore, combineReducers } from 'Redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filterReducer
    })
  )
  return store
}

// store creation
