export interface Customer {
    id: string;
    name: string;
    mobile: string;
    city: string;
    loyaltyPoints: number;
    lastVisit: string;
    kycStatus: 'Verified' | 'Pending';
}

export interface Scheme {
    id: string;
    name: string; // e.g., "Golden Future 11+1"
    type: 'Amount' | 'Weight';
    durationMonths: number;
    minInstallment: number;
    activeMembers: number;
}

export interface SchemeAccount {
    id: string;
    customerId: string;
    customerName: string;
    schemeName: string;
    totalPaid: number;
    installmentsPaid: number; // e.g., 5/11
    nextDueDate: string;
    status: 'Active' | 'Matured' | 'Closed';
}

export const MOCK_CUSTOMERS: Customer[] = [
    { id: '1', name: 'Anjali Gupta', mobile: '9876543210', city: 'Delhi', loyaltyPoints: 1250, lastVisit: '2025-10-20', kycStatus: 'Verified' },
    { id: '2', name: 'Rajiv Malhotra', mobile: '9988776655', city: 'Mumbai', loyaltyPoints: 500, lastVisit: '2025-09-15', kycStatus: 'Pending' },
];

export const MOCK_SCHEMES: Scheme[] = [
    { id: '1', name: 'Gold Saver 11+1', type: 'Amount', durationMonths: 11, minInstallment: 2000, activeMembers: 145 },
    { id: '2', name: 'Swarna Nidhi (Weight)', type: 'Weight', durationMonths: 12, minInstallment: 500, activeMembers: 82 },
];

export const MOCK_ACCOUNTS: SchemeAccount[] = [
    { id: '101', customerId: '1', customerName: 'Anjali Gupta', schemeName: 'Gold Saver 11+1', totalPaid: 10000, installmentsPaid: 5, nextDueDate: '2025-11-05', status: 'Active' },
];
