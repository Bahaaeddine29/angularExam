export interface Transaction {
    id: number;
    amount: number;
    category: 'Entrée' | 'Dépense';
    date: Date;
  }