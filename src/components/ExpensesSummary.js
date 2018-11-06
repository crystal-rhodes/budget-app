import React from 'react';
import {
    connect
} from 'react-redux';
import {
    Link
} from 'react-router-dom';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';


const ExpensesSummary = ({
    visibleExpensesCount,
    visibleExpensesTotal,
    allExpensesCount,
    allExpensesTotal
}) => {
    const visibleExpensesTotalFormatted = numeral(visibleExpensesTotal / 100).format('$0,0.00');
    const visibleExpensesWord = visibleExpensesCount <= 1 ? 'expense' : 'expenses';
    const hiddenExpensesTotalFormatted = numeral((allExpensesTotal - visibleExpensesTotal) / 100).format('$0,0.00');
    const hiddenExpensesWord = allExpensesCount - visibleExpensesCount <= 1 ? 'expense' : 'expenses';
    return <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{visibleExpensesCount}</span> {visibleExpensesWord} totalling <span>{visibleExpensesTotalFormatted}</span></h1>
      <h2 className="page-header__title"><span>{allExpensesCount - visibleExpensesCount}</span> hidden {hiddenExpensesWord} totalling <span>{hiddenExpensesTotalFormatted}</span></h2>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const allExpenses = state.expenses;
    return {
        visibleExpensesCount: visibleExpenses.length,
        visibleExpensesTotal: getExpensesTotal(visibleExpenses),
        allExpensesTotal: getExpensesTotal(allExpenses),
        allExpensesCount: allExpenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);