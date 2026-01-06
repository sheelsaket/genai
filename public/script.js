document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');

    const fetchTransactions = async () => {
        try {
            const response = await fetch('/api/transactions');
            const data = await response.json();
            renderTransactionList(data.transactions);
            renderTrendAnalysis(data.transactions);
            calculateNetWorth(data.accounts);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const renderTransactionList = (transactions) => {
        const transactionList = document.createElement('ul');
        transactions.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction.date}: ${transaction.amount} - ${transaction.description}`;
            transactionList.appendChild(listItem);
        });
        appDiv.appendChild(transactionList);
    };

    const renderTrendAnalysis = (transactions) => {
        // Placeholder for trend analysis rendering logic
        const trendDiv = document.createElement('div');
        trendDiv.textContent = 'Trend Analysis Placeholder';
        appDiv.appendChild(trendDiv);
    };

    const calculateNetWorth = (accounts) => {
        const netWorth = accounts.reduce((total, account) => total + account.balance, 0);
        const netWorthDiv = document.createElement('div');
        netWorthDiv.textContent = `Net Worth: ${netWorth}`;
        appDiv.appendChild(netWorthDiv);
    };

    fetchTransactions();
});