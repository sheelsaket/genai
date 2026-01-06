import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
                {transactions.sort((a, b) => new Date(b.date) - new Date(a.date)).map(transaction => (
                    <li key={transaction.id}>
                        <span>{transaction.date}: </span>
                        <span>{transaction.description} - </span>
                        <span>${transaction.amount.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;