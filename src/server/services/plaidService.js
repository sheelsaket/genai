const axios = require('axios');
const qs = require('qs');

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';
const PLAID_BASE_URL = `https://${PLAID_ENV}.plaid.com`;

const plaidClient = axios.create({
    baseURL: PLAID_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const plaidService = {
    getAccessToken: async (publicToken) => {
        const url = '/item/public_token/exchange';
        const data = {
            client_id: PLAID_CLIENT_ID,
            secret: PLAID_SECRET,
            public_token: publicToken,
        };
        const response = await plaidClient.post(url, data);
        return response.data;
    },

    getTransactions: async (accessToken, startDate, endDate) => {
        const url = '/transactions/get';
        const data = {
            client_id: PLAID_CLIENT_ID,
            secret: PLAID_SECRET,
            access_token: accessToken,
            start_date: startDate,
            end_date: endDate,
        };
        const response = await plaidClient.post(url, data);
        return response.data.transactions;
    },

    getAccounts: async (accessToken) => {
        const url = '/accounts/get';
        const data = {
            client_id: PLAID_CLIENT_ID,
            secret: PLAID_SECRET,
            access_token: accessToken,
        };
        const response = await plaidClient.post(url, data);
        return response.data.accounts;
    },
};

module.exports = plaidService;