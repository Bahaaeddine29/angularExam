import { Transaction } from "./iTransactions";

export const TRANSACTIONS_MOCK: Transaction [] = [
    {
      id: 1,
      amount: 100.0,
      category: 'Entrée',
      date: new Date('2023-09-20'),
    },
    {
      id: 2,
      amount: -50.0,
      category: 'Dépense',
      date: new Date('2023-09-21'),
    },
    {
      id: 3,
      amount: -30.0,
      category: 'Dépense',
      date: new Date('2023-09-22'),
    },
    {
      id: 4,
      amount: 200.0,
      category: 'Entrée',
      date: new Date('2023-09-23'),
    },
    {
      id: 5,
      amount: -20.0,
      category: 'Dépense',
      date: new Date('2023-09-24'),
    },

    {
        id: 6,
        amount: -35.0,
        category: 'Dépense',
        date: new Date('2023-09-25'),
    },

  ];