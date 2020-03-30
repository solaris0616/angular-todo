import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-todo-items-list',
  templateUrl: './todo-items-list.component.html',
  styleUrls: ['./todo-items-list.component.css']
})
export class TodoItemsListComponent implements OnInit {
  items;

  constructor(private dataStore: DatastoreService) { }

  ngOnInit(): void {
    this.items = this.dataStore.getAllItems();
  }

  markAsFinish(id: number) {
    this.dataStore.removeItem(id);
  }
}
