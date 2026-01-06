export interface Transaction {
    id: string;
    date: string;
    name: string;
    amount: number;
    category: string[];
}

export interface Account {
    id: string;
    name: string;
    mask: string;
    type: string;
    subtype: string;
    balance: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    accounts: Account[];
    transactions: Transaction[];
}

export interface SpendingTrend {
    date: string;
    totalSpent: number;
}