// src/data/MockData.js

// Loan offers for LoanOffers / Home page
export const loanOffers = [
  {
    id: 1,
    name: "Personal Loan",
    loanType: "personal",
    interestRate: 12,
    maxAmount: 500000,       // ← make sure this exists
    features: ["Quick approval", "No collateral"]
  },
  {
    id: 2,
    name: "Business Loan",
    loanType: "business",
    interestRate: 8,
    maxAmount: 5000000,      // ← make sure this exists
    features: ["Long tenure", "Low EMI"]
  },
  {
    id: 3,
    name: "Home Loan",
    loanType: "home",
    interestRate: 10,
    maxAmount: 2000000,      // ← make sure this exists
    features: ["Fast processing", "Minimal documents"]
  },
  {
    id: 4,
    name: "Mortage Loan",
    loanType: "mortage",
    interestRate: 10,
    maxAmount: 2000000,      // ← make sure this exists
    features: ["Fast processing", "Minimal documents"]
  },
  {
    id: 4,
    name: "OD Loan",
    loanType: "od",
    interestRate: 10,
    maxAmount: 2000000,      // ← make sure this exists
    features: ["Fast processing", "Minimal documents"]
  },
  {
    id: 5,
    name: "CC Limit Loan",
    loanType: "cc",
    interestRate: 10,
    maxAmount: 2000000,      // ← make sure this exists
    features: ["Fast processing", "Minimal documents"]
  }
];

// Calculator presets (optional)
export const loanCalculatorPresets = [
  {
    id: 1,
    title: "Personal Loan",
    amount: 50000,
    rate: 11.5,
    term: 3
  },
  {
    id: 2,
    title: "Home Loan",
    amount: 1000000,
    rate: 8.25,
    term: 20
  },
  {
    id: 3,
    title: "Car Loan",
    amount: 200000,
    rate: 9.0,
    term: 5
  },
  {
    id: 4,
    title: "Education Loan",
    amount: 300000,
    rate: 10.0,
    term: 7
  }
];

// Sample loan application statuses (frontend-only, can use for LoanStatus page)
export const sampleLoanStatus = [
  {
    id: 1,
    name: "John Doe",
    loanType: "Personal Loan",
    amount: 75000,
    status: "Approved",
    appliedAt: "2025-09-20"
  },
  {
    id: 2,
    name: "Jane Smith",
    loanType: "Home Loan",
    amount: 1200000,
    status: "Pending",
    appliedAt: "2025-09-22"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    loanType: "Car Loan",
    amount: 250000,
    status: "Rejected",
    appliedAt: "2025-09-21"
  }
];

export const loanApplications = [
  {
    id: 1,
    applicantName: 'John Doe',
    loanType: 'Business Loan',
    amount: 75000,
    status: 'Approved',
    appliedDate: '2025-09-20'
  },
  {
    id: 2,
    applicantName: 'Jane Smith',
    loanType: 'Home Loan',
    amount: 1200000,
    status: 'Pending',
    appliedDate: '2025-09-22'
  },
  {
    id: 3,
    applicantName: 'Ravi Kumar',
    loanType: 'Business Loan',
    amount: 250000,
    status: 'Rejected',
    appliedDate: '2025-09-25'
  }
];

export const businessLoanDocs = [
  { id: 1, name: "Aadhaar Front & Back Photo" },
  { id: 2, name: "Bank Statement (6 months till date)" },
  { id: 3, name: "ITR 3 Years / GST / UDYAM" },
  { id: 4, name: "Shop Photo" }
];

export const homeLoanDocs = [
  { id: 1, name: "Aadhaar Front & Back Photo" },
  { id: 2, name: "Bank Statement (6 months till date)" },
  { id: 3, name: "ITR 3 Years / GST / UDYAM / Job 3 months salary slip" },
  { id: 4, name: "Property Papers" }
];
