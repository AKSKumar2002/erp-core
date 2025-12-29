export type MetalType = 'Gold' | 'hSilver' | 'Platinum' | 'Diamond';
export type Purity = '24K' | '22K' | '18K' | '14K' | '925' | 'Other';
export type StockStatus = 'In Stock' | 'Sold' | 'On Approval' | 'Repair' | 'Reserved';

export interface JewelryItem {
    id: string;
    tagId: string; // Unique Tag Number (Barcode)
    huid?: string; // Hallmarking Unique ID
    productName: string;
    category: string; // e.g., Bangle, Chain, Ring
    metalType: MetalType;
    purity: Purity;

    // Weights (in grams)
    grossWeight: number;
    stoneWeight: number;
    netWeight: number; // Gross - Stone

    // Pricing Factors
    wastagePercent: number; // VA %
    makingCharges: number; // Labour per gm or fixed
    stoneValue: number;

    // Location/Tracking
    boxNumber?: string;
    trayNumber?: string;

    status: StockStatus;
    createdAt: string;
}

export const MOCK_INVENTORY: JewelryItem[] = [
    {
        id: '1',
        tagId: 'TAG-1001',
        huid: 'HDJ8392',
        productName: 'Antique Temple Necklace',
        category: 'Necklace',
        metalType: 'Gold',
        purity: '22K',
        grossWeight: 45.500,
        stoneWeight: 2.100,
        netWeight: 43.400,
        wastagePercent: 12.5,
        makingCharges: 5000,
        stoneValue: 12000,
        boxNumber: 'BOX-A1',
        status: 'In Stock',
        createdAt: '2025-10-15T10:00:00Z'
    },
    {
        id: '2',
        tagId: 'TAG-1002',
        huid: 'XYZ1234',
        productName: 'Diamond Solitaire Ring',
        category: 'Ring',
        metalType: 'Gold',
        purity: '18K',
        grossWeight: 5.200,
        stoneWeight: 0.400,
        netWeight: 4.800,
        wastagePercent: 8,
        makingCharges: 2500,
        stoneValue: 45000,
        boxNumber: 'BOX-R2',
        status: 'In Stock',
        createdAt: '2025-10-16T11:30:00Z'
    }
];
