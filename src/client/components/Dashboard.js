import React, { useEffect, useState } from 'react';
import { fetchTransactions, fetchNetWorth } from '../utils/api';
import TransactionList from './TransactionList';
import TrendAnalysis from './TrendAnalysis';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [netWorth, setNetWorth] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const transactionsData = await fetchTransactions();
                const netWorthData = await fetchNetWorth();
                setTransactions(transactionsData);
                setNetWorth(netWorthData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Spending Dashboard</h1>
            <h2>Net Worth: ${netWorth.toFixed(2)}</h2>
            <TrendAnalysis transactions={transactions} />
            <TransactionList transactions={transactions} />
        </div>
    );
};

export default Dashboard;