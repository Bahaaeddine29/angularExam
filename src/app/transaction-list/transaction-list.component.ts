import { Component, OnInit } from '@angular/core';
import { Transaction } from '../iTransactions';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{

  transactions: Transaction[] = [];
  totalDepenses: number = 0;
  totalEntrees: number = 0;
  solde: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions();
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalDepenses = this.transactions
      .filter(transaction => transaction.category === 'Dépense')
      .reduce((total, transaction) => total + transaction.amount, 0);

    this.totalEntrees = this.transactions
      .filter(transaction => transaction.category === 'Entrée')
      .reduce((total, transaction) => total + transaction.amount, 0);

    this.solde = this.totalEntrees - this.totalDepenses; // Calcul du solde
  }
}
