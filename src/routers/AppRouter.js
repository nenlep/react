import React from 'React'
import { BrowserRouter, Route , Switch, Link, NavLink } from 'react-router-dom'
import NotFoundPage from '../components/NotFound'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpExpensePage from '../components/HelpExpense'
import Header from '../components/Header'



const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>
)

export default AppRouter
