import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService { private categories: string[] = ['Entrée', 'Dépense'];


  constructor() { }

  getCategories(): string[] {
    return this.categories;
  }

  addCategory(category: string): void {
    this.categories.push(category);
  }

  deleteCategory(category: string): void {
    const index = this.categories.indexOf(category);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }
  
  
}
