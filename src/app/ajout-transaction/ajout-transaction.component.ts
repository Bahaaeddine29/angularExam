import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransactionService } from '../transaction.service'; // Importez votre service de transactions
import { Transaction } from '../iTransactions';


@Component({
  selector: 'app-ajout-transaction',
  templateUrl: './ajout-transaction.component.html',
  styleUrls: ['./ajout-transaction.component.css']
})
export class AjoutTransactionComponent {
  transactionForm: FormGroup;

  constructor(private transactionService: TransactionService) { 
    this.transactionForm = new FormGroup({
      amount: new FormControl(''),
      category: new FormControl(''),
    });
  }

  onSubmit(): void {
    const amount = this.transactionForm.get('amount')?.value;
    const category = this.transactionForm.get('category')?.value;

    if (amount !== null && category !== null) {
      const newTransaction: Transaction = {
        id: 0, 
        amount: +amount, 
        category: category,
        date: new Date() 
      };

      this.transactionService.addTransaction(newTransaction); 
      this.transactionForm.reset(); 
    }
  }
}
