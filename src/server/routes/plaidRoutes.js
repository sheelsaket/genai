const express = require('express');
const router = express.Router();
const plaidService = require('../services/plaidService');

// Route to get transactions
router.get('/transactions', async (req, res) => {
    try {
        const transactions = await plaidService.getTransactions(req.user.accessToken);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

// Route to get account information
router.get('/accounts', async (req, res) => {
    try {
        const accounts = await plaidService.getAccounts(req.user.accessToken);
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch accounts' });
    }
});

// Route to get spending trends
router.get('/trends', async (req, res) => {
    try {
        const trends = await plaidService.getSpendingTrends(req.user.accessToken);
        res.json(trends);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch spending trends' });
    }
});

module.exports = router;