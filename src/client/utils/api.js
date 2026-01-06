const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchTransactions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/transactions`);
        if (!response.ok) {
            throw new Error('Failed to fetch transactions');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

export const fetchAccountData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/accounts`);
        if (!response.ok) {
            throw new Error('Failed to fetch account data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};

export const calculateNetWorth = (accounts) => {
    return accounts.reduce((total, account) => total + account.balance, 0);
};