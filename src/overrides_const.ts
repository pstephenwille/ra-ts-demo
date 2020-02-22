export const tccOverrides = {
    key: 'results',
    autoCompleteFilters: ['name', 'alert_email', 'description', 'team'],
    columnNames: ['name', 'alert_email', 'status', 'description', 'team']
};

export const demoOverrides = {
    paginationHeader: 'x-total-count',
    autoCompleteFilters: ['name', 'email', 'company.name', 'website'],
    columnNames: ['name','username', 'email', 'company.name', 'website']
}
