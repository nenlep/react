import React from 'React'
import AppRouter from './routers/AppRouter'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();
store.dispatch(addExpense({desc: 'Water bill', amount: 2000}))
store.dispatch(addExpense({desc: 'Gas bill', amount: 2500}))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
// console.log(store.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'))

