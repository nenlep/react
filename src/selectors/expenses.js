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
export default getVisibleExpenses