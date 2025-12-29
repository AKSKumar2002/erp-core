export type Department = 'Casting' | 'Filing' | 'Setting' | 'Polishing' | 'Rhodium' | 'QC';
export type JobStatus = 'Pending' | 'In Process' | 'Completed' | 'Hold' | 'Cancelled';
export type Priority = 'Normal' | 'Urgent' | 'VVIP';

export interface Karigar {
    id: string;
    name: string;
    mobile: string;
    skills: Department[];
    balanceGold: number; // in grams (Net weight issued - received)
    balanceCash: number; // Labour due
    status: 'Active' | 'Inactive';
}

export interface JobCard {
    id: string;
    jobId: string; // e.g., JOB-2025-001
    date: string;
    deliveryDate: string;

    // Design Details
    designName: string;
    designImage?: string; // URL placeholder
    description?: string;

    // Metal Details
    metalType: 'Gold' | 'Platinum' | 'Silver';
    purity: '22K' | '18K' | '14K';
    targetWeight: number; // Estimated

    // Assignment
    assignedKarigarId: string;
    karigarName: string;
    currentDepartment: Department;

    // Material Issue (Gold given to Karigar)
    issuedGoldWeight: number;
    issuedStoneWeight: number; // Diamonds/Stones given

    // Status
    status: JobStatus;
    priority: Priority;
    customerName?: string; // If made to order
}

export const MOCK_KARIGARS: Karigar[] = [
    { id: '1', name: 'Ramesh Bengali', mobile: '9876543210', skills: ['Casting', 'Filing'], balanceGold: 125.50, balanceCash: 12000, status: 'Active' },
    { id: '2', name: 'Suresh Setter', mobile: '9988776655', skills: ['Setting'], balanceGold: 45.00, balanceCash: 5000, status: 'Active' },
    { id: '3', name: 'Abdul Polish', mobile: '8877665544', skills: ['Polishing', 'Rhodium'], balanceGold: 10.20, balanceCash: 2500, status: 'Active' },
];

export const MOCK_JOBS: JobCard[] = [
    {
        id: '1',
        jobId: 'JOB-25-1001',
        date: '2025-10-25',
        deliveryDate: '2025-11-02',
        designName: 'Peacock Jhumka',
        metalType: 'Gold',
        purity: '22K',
        targetWeight: 25.00,
        assignedKarigarId: '1',
        karigarName: 'Ramesh Bengali',
        currentDepartment: 'Filing',
        issuedGoldWeight: 28.50,
        issuedStoneWeight: 0,
        status: 'In Process',
        priority: 'Normal',
        customerName: 'Mrs. Kapoor'
    },
    {
        id: '2',
        jobId: 'JOB-25-1002',
        date: '2025-10-26',
        deliveryDate: '2025-10-30',
        designName: 'Diamond Ring',
        metalType: 'Gold',
        purity: '18K',
        targetWeight: 4.50,
        assignedKarigarId: '2',
        karigarName: 'Suresh Setter',
        currentDepartment: 'Setting',
        issuedGoldWeight: 5.00,
        issuedStoneWeight: 0.45,
        status: 'In Process',
        priority: 'Urgent',
        customerName: 'Rajesh Malhotr'
    }
];
