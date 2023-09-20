import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTransactionComponent } from './ajout-transaction.component';

describe('AjoutTransactionComponent', () => {
  let component: AjoutTransactionComponent;
  let fixture: ComponentFixture<AjoutTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutTransactionComponent]
    });
    fixture = TestBed.createComponent(AjoutTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
