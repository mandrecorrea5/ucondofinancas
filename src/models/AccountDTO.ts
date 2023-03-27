export type AccountDTO = {
    accountFather?: string;
    id: string;
    name: string;
    type: 'expense' | 'revenue';
    acceptEntries: boolean;
}