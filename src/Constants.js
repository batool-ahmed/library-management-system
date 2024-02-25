export const tableCols = [ 
    '',
    'Book title', 
    'ISBN', 
    'Publish year', 
    'Cover price', 
    'Check-In / Check-Out status'
];

export const btnsBelowTable = [
    {title: 'Check-In'},
    {title: 'Check-Out'},
    {title: 'Details'}
];

export const detailsCategories = [
    'Book title', 
    'ISBN', 
    'Publish year', 
    'Cover price', 
    'Check-In / Check-Out Status' 
    // If checked out, details should display the person who checked out it 
    // o Check out history of the book to display who checked out and checked in at what dates. 
]

export const checkOutFields = [
    {title: 'Name of Person', placeholder: 'Batool Ahmed'},
    {title: 'Mobile No.', placeholder: '031111111'}, 
    {title: 'CNIC No.', placeholder: '4444444444'},
    {title: 'Borrowed On', placeholder: 'fffff'}
]

export const checkInFields = [
    'Name of Person',
    'Mobile No.', 
    'Returned On',
    'Required Returning Date',
    'Penalty'
]