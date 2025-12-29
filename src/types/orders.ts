export type OrderStatus = 'Pending' | 'In Process' | 'Ready' | 'Delivered' | 'Cancelled';
export type OrderType = 'Custom' | 'Repair';

export interface Order {
    id: string;
    orderNo: string;
    customerName: string;
    mobile: string;
    type: OrderType;
    itemDetails: string;
    orderDate: string;
    deliveryDate: string;
    estimatedAmount: number;
    advanceAmount: number;
    assignedKarigar?: string;
    status: OrderStatus;
    image?: string;
}

export const MOCK_ORDERS: Order[] = [
    {
        id: '1',
        orderNo: 'ORD-2025-001',
        customerName: 'Mrs. Sharma',
        mobile: '9876543210',
        type: 'Custom',
        itemDetails: 'Gold Necklace (Design A45)',
        orderDate: '2025-10-25',
        deliveryDate: '2025-11-05',
        estimatedAmount: 145000,
        advanceAmount: 10000,
        assignedKarigar: 'Ramesh Bengali',
        status: 'In Process'
    },
    {
        id: '2',
        orderNo: 'REP-2025-089',
        customerName: 'Rajiv Malhotra',
        mobile: '9988776655',
        type: 'Repair',
        itemDetails: 'Chain Soldering & Polish',
        orderDate: '2025-10-27',
        deliveryDate: '2025-10-29',
        estimatedAmount: 1200,
        advanceAmount: 0,
        status: 'Pending'
    }
];
