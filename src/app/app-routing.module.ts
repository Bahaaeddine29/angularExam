import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AjoutTransactionComponent } from './ajout-transaction/ajout-transaction.component';
import { GraphiqueComponent } from './graphique/graphique.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'transaction-list', component: TransactionListComponent },
  { path: 'ajout-transaction', component: AjoutTransactionComponent}, 
  { path: 'graphique', component: GraphiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
