import { Injectable } from '@angular/core';
import { ITEMS } from './mock-items';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  items = ITEMS;

  constructor() { }

  getAllItems() {
    return this.items;
  }

  addItem(body: string) {
    let id = this.items[this.items.length - 1].id;
    this.items.push({id: (id + 1), body: body});
  }

  removeItem(id: number) {
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      if(element.id == id) {
        this.items.splice(i, 1);
      }
    }
  }
}
