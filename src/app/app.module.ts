import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AjoutTransactionComponent } from './ajout-transaction/ajout-transaction.component';
import { HomeComponent } from './home/home.component';
import { GraphiqueComponent } from './graphique/graphique.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransactionListComponent,
    AjoutTransactionComponent,
    HomeComponent,
    GraphiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
