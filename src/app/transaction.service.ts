import { Injectable } from '@angular/core';
import { Transaction } from './iTransactions';
import { TRANSACTIONS_MOCK } from './transaction-mock';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = TRANSACTIONS_MOCK;

  constructor() {
    this.transactions = [];
  }

  getTransactions(): Transaction[] {
    return TRANSACTIONS_MOCK; 
  }

  addTransaction(transaction: Transaction): void {
    TRANSACTIONS_MOCK.push(transaction);
  }
  

 
}
